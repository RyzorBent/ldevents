import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

console.log('Initializing Cloudinary config...');
try {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  console.log(
    'Cloudinary configured successfully. Cloud Name:',
    process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not Set'
  );
} catch (configError) {
  console.error('CRITICAL: Failed to configure Cloudinary:', configError);
  // Optionally, prevent the function from running if config fails
}

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  folder?: string;
}

// Map folder names to categories
const categoryMap: { [key: string]: string } = {
  corporate: 'corporate',
  birthdays: 'birthdays',
  weddings: 'weddings',
  // Add more mappings if needed
};

export async function GET(request: Request) {
  console.log(`GET /api/gallery-images: Received request at ${new Date().toISOString()}`);
  try {
    console.log('Attempting to fetch images from Cloudinary...');
    const folders = ['ldevents/gallery/birthdays', 'ldevents/gallery/corporate']; // Match exact Cloudinary paths
    console.log('Fetching from folders:', folders);
    let allImages: any[] = [];

    for (const folder of folders) {
      console.log(`Fetching images for folder: ${folder}`);
      try {
        const result = await cloudinary.search
          .expression(`folder:${folder}`)
          .sort_by('public_id', 'desc')
          .max_results(50) // Adjust as needed
          .execute();
        console.log(
          `Successfully fetched ${result.resources.length} images from folder: ${folder}`
        );

        const categoryFolderName = folder.split('/').pop() || 'uncategorized';
        const category = categoryMap[categoryFolderName] || 'other';

        const images = result.resources.map((resource: CloudinaryResource, index: number) => ({
          id: resource.public_id || `${folder}-${index}`,
          category: category,
          image: resource.secure_url,
          title: `Event in ${categoryFolderName}`, // Placeholder title
          description: `Image from ${folder}`, // Placeholder description
          width: resource.width,
          height: resource.height,
        }));
        allImages = allImages.concat(images);
      } catch (folderError) {
        console.error(`Error fetching images for folder ${folder}:`, folderError);
        // Continue to next folder even if one fails
      }
    }

    console.log(`Total images fetched: ${allImages.length}`);
    // Simple unique ID generation for frontend state management
    allImages = allImages.map((img, index) => ({ ...img, id: index + 1 }));
    console.log('Processed images with new IDs.');

    console.log('GET /api/gallery-images: Sending successful response.');
    return NextResponse.json(allImages);
  } catch (error) {
    console.error('GET /api/gallery-images: Unhandled error in GET handler:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
}

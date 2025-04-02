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
  console.log('=== GALLERY API START ===');
  console.log('Environment Check:', {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not Set',
    apiKey: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not Set',
    apiSecret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not Set',
  });

  try {
    const folders = ['ldevents/gallery/birthdays', 'ldevents/gallery/corporate'];
    console.log('Searching folders:', JSON.stringify(folders));
    let allImages: any[] = [];

    for (const folder of folders) {
      try {
        console.log(`=== Searching folder: ${folder} ===`);
        const result = await cloudinary.search
          .expression(`folder:${folder}`)
          .sort_by('public_id', 'desc')
          .max_results(50)
          .execute();

        console.log(`Found ${result.resources.length} images in ${folder}`);
        if (result.resources.length === 0) {
          console.log('No images found in folder. Search result:', JSON.stringify(result));
        }

        const categoryFolderName = folder.split('/').pop() || 'uncategorized';
        const images = result.resources.map((resource: CloudinaryResource, index: number) => ({
          id: resource.public_id || `${folder}-${index}`,
          category: categoryMap[categoryFolderName] || 'other',
          image: resource.secure_url,
          title: `Event in ${categoryFolderName}`,
          description: `Image from ${folder}`,
          width: resource.width,
          height: resource.height,
        }));
        allImages = allImages.concat(images);
      } catch (folderError) {
        console.error(`ERROR in folder ${folder}:`, folderError);
      }
    }

    console.log(`=== Total images found: ${allImages.length} ===`);
    allImages = allImages.map((img, index) => ({ ...img, id: index + 1 }));

    return NextResponse.json(allImages);
  } catch (error) {
    console.error('=== CRITICAL API ERROR ===', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
}

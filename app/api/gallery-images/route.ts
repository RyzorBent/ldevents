import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

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
  try {
    // Fetch images from specified folders
    const folders = ['ldevents/gallery/corporate', 'ldevents/gallery/birthdays']; // Add 'ldevents/gallery/weddings' if needed
    let allImages: any[] = [];

    for (const folder of folders) {
      const result = await cloudinary.search
        .expression(`folder:${folder}`)
        .sort_by('public_id', 'desc')
        .max_results(50) // Adjust as needed
        .execute();

      const categoryFolderName = folder.split('/').pop() || 'uncategorized';
      const category = categoryMap[categoryFolderName] || 'other';

      const images = result.resources.map((resource: CloudinaryResource, index: number) => ({
        // Create a unique-ish ID based on public_id or index if needed
        id: resource.public_id || `${folder}-${index}`,
        category: category,
        image: resource.secure_url,
        title: `Event in ${categoryFolderName}`, // You might want a better way to get titles
        description: `Image from ${folder}`, // Placeholder description
        width: resource.width,
        height: resource.height,
      }));
      allImages = allImages.concat(images);
    }

    // Simple unique ID generation for frontend state management
    allImages = allImages.map((img, index) => ({ ...img, id: index + 1 }));

    return NextResponse.json(allImages);
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
}

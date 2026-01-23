import { Card } from "@/components/ui/Card";
export const dynamic = 'force-dynamic';

interface GalleryImage {
  _id: string;
  imageUrl: string;
  altText: string;
  category?: string;
}

async function getGalleryImages() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/gallery`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch gallery images');
    }

    const data = await res.json();
    return data.images || [];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
        <p className="text-purple-50 max-w-2xl mx-auto px-4">
          Glimpses of life at Shanthibhavan. Moments of care, joy, and hope.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
         {/* Simple Masonry Layout using Columns */}
         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {images.length > 0 ? (
              images.map((image: GalleryImage) => (
                <div key={image._id} className="break-inside-avoid mb-4 md:mb-6">
                   <div className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                     <img
                        src={image.imageUrl}
                        alt={image.altText}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <p className="text-white text-xs md:text-sm font-medium">{image.altText}</p>
                     </div>
                   </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No images available at the moment.</p>
              </div>
            )}
         </div>
         </div>
      </section>
    </div>
  );
}

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

const galleryImages = [
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg", altText: "Hospital Care", category: "care", order: 1 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg", altText: "Palliative Home Care", category: "care", order: 2 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg", altText: "Free Dialysis Treatment", category: "services", order: 3 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b4708488e94c.jpeg", altText: "Free Ambulance Service", category: "services", order: 4 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b4700199a8e3.jpeg", altText: "Emergency Care Services", category: "services", order: 5 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46f73f1b039.jpeg", altText: "Free Food for Patients", category: "services", order: 6 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/690862fae90fe.jpeg", altText: "Hospital Activities", category: "events", order: 7 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd093ea3e.jpeg", altText: "Patient Care", category: "care", order: 8 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd08de31e.jpeg", altText: "Medical Services", category: "services", order: 9 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd0877dd6.jpeg", altText: "Care Team", category: "care", order: 10 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4eaeba5.jpeg", altText: "Hospital Facility", category: "facility", order: 11 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4e65a9b.jpeg", altText: "Community Service", category: "events", order: 12 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4def388.jpeg", altText: "Compassionate Care", category: "care", order: 13 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9bec446.jpeg", altText: "Hospital Environment", category: "facility", order: 14 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9b461eb.jpeg", altText: "Medical Equipment", category: "facility", order: 15 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9ae3080.jpeg", altText: "Care Activities", category: "care", order: 16 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/637c74188b6da.jpeg", altText: "Hospital Events", category: "events", order: 17 },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/637c72b3c756e.jpeg", altText: "Community Outreach", category: "events", order: 18 },
  { imageUrl: "https://shanthibhavan.in/images/articles/66def4898e6a7.jpeg", altText: "Award Recognition", category: "events", order: 19 },
  { imageUrl: "https://shanthibhavan.in/images/articles/66def3e6beb9d.jpeg", altText: "Recognition Ceremony", category: "events", order: 20 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9b9dcd01a34.jpeg", altText: "Early Medical Detection", category: "services", order: 21 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9b932a43a69.jpeg", altText: "Scanning Services", category: "services", order: 22 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9ba0e32c4cc.jpeg", altText: "Pharmacy Services", category: "services", order: 23 },
  { imageUrl: "https://shanthibhavan.in/images/products/5b47096891615.jpeg", altText: "Ortho Care", category: "services", order: 24 },
];

export async function POST() {
  try {
    await connectToDatabase();

    const existingImages = await Gallery.countDocuments();
    if (existingImages > 0) {
      return NextResponse.json(
        { success: false, message: 'Gallery already contains images. Delete existing images first.' },
        { status: 400 }
      );
    }

    const result = await Gallery.insertMany(galleryImages);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.length} gallery images`,
      count: result.length,
    });
  } catch (error) {
    console.error('Error seeding gallery:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed gallery images' },
      { status: 500 }
    );
  }
}

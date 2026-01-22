import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import AboutImage from '@/models/AboutImage';

const aboutImageData = [
  {
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg",
    altText: "Shanthibhavan Palliative Hospital - India's First No-Bill Palliative Hospital",
    isActive: true,
  },
];

export async function POST() {
  try {
    await connectToDatabase();

    const existingImages = await AboutImage.countDocuments();
    if (existingImages > 0) {
      return NextResponse.json(
        { success: false, message: 'About images already exist. Delete existing images first.' },
        { status: 400 }
      );
    }

    const result = await AboutImage.insertMany(aboutImageData);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.length} about image(s)`,
      count: result.length,
    });
  } catch (error) {
    console.error('Error seeding about images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed about images' },
      { status: 500 }
    );
  }
}

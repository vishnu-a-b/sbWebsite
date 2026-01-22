import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Banner from '@/models/Banner';

const bannerData = [
  {
    title: "Welcome to Shanthibhavan",
    description: "India's First Palliative Hospital - Providing compassionate care without bills or cash counters",
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg",
    order: 1,
    isActive: true,
  },
  {
    title: "Compassionate Care for All",
    description: "49-bed no-bill hospital with 24/7 nursing, pain management, and ICU facilities",
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c70be1224.jpeg",
    order: 2,
    isActive: true,
  },
  {
    title: "Home Care Services",
    description: "15 vehicles providing 24/7 emergency home care across Thiruvananthapuram District",
    imageUrl: "https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg",
    order: 3,
    isActive: true,
  },
  {
    title: "Free Dialysis Unit",
    description: "Solar-powered dialysis facility with 40-patient capacity, completely free of charge",
    imageUrl: "https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg",
    order: 4,
    isActive: true,
  },
];

export async function POST() {
  try {
    await connectToDatabase();

    await Banner.deleteMany({}); // Clear existing to allow re-seed
    
    const result = await Banner.insertMany(bannerData);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.length} banners`,
      count: result.length,
    });
  } catch (error) {
    console.error('Error seeding banners:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed banners' },
      { status: 500 }
    );
  }
}

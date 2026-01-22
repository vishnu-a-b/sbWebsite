import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Banner from '@/models/Banner';

export async function GET() {
  try {
    await connectToDatabase();

    const banners = await Banner.find({ isActive: true })
      .sort({ order: 1 })
      .lean();

    return NextResponse.json({ success: true, banners });
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch banners' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { title, description, imageUrl, order, isActive } = body;

    if (!title || !imageUrl) {
      return NextResponse.json(
        { success: false, error: 'Title and image URL are required' },
        { status: 400 }
      );
    }

    const newBanner = await Banner.create({
      title,
      description,
      imageUrl,
      order: order || 0,
      isActive: isActive !== undefined ? isActive : true,
    });

    return NextResponse.json({ success: true, banner: newBanner }, { status: 201 });
  } catch (error) {
    console.error('Error creating banner:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create banner' },
      { status: 500 }
    );
  }
}

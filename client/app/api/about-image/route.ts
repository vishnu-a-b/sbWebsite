import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import AboutImage from '@/models/AboutImage';

export async function GET() {
  try {
    await connectToDatabase();

    const images = await AboutImage.find({ isActive: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error('Error fetching about images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch about images' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { imageUrl, altText, isActive } = body;

    if (!imageUrl) {
      return NextResponse.json(
        { success: false, error: 'Image URL is required' },
        { status: 400 }
      );
    }

    const newImage = await AboutImage.create({
      imageUrl,
      altText: altText || 'Shanthibhavan Hospital',
      isActive: isActive !== undefined ? isActive : true,
    });

    return NextResponse.json({ success: true, image: newImage }, { status: 201 });
  } catch (error) {
    console.error('Error creating about image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create about image' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

export async function GET() {
  try {
    await connectToDatabase();

    const images = await Gallery.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { imageUrl, altText, category, order } = body;

    if (!imageUrl || !altText) {
      return NextResponse.json(
        { success: false, error: 'Image URL and alt text are required' },
        { status: 400 }
      );
    }

    const newImage = await Gallery.create({
      imageUrl,
      altText,
      category: category || 'general',
      order: order || 0,
      isActive: true,
    });

    return NextResponse.json({ success: true, image: newImage }, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}

import { NextResponse, NextRequest } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('mode');

    // Admin mode: return all images including inactive
    const filter = mode === 'admin' ? {} : { isActive: true };

    const images = await Gallery.find(filter)
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

export async function PUT(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { id, imageUrl, altText, category, order, isActive } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const updatedImage = await Gallery.findByIdAndUpdate(
      id,
      { imageUrl, altText, category, order, isActive },
      { new: true }
    );

    if (!updatedImage) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, image: updatedImage });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update gallery image' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const deletedImage = await Gallery.findByIdAndDelete(id);

    if (!deletedImage) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}

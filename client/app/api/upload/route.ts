import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string || 'any';

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'File size must be less than 50MB' },
        { status: 400 }
      );
    }

    // Get file extension
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = file.name.split('.').pop();

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    const filename = `${timestamp}-${randomString}.${ext}`;

    // Determine upload directory based on type
    let subDir = 'uploads';
    if (type === 'video' || file.type.startsWith('video/')) {
      subDir = 'video';
    } else if (type === 'image' || file.type.startsWith('image/')) {
      subDir = 'images';
    }

    // Backend public directory path (assuming client and backend are siblings)
    const backendPublicDir = path.join(process.cwd(), '../backend/public');
    const fullUploadDir = path.join(backendPublicDir, subDir);

    // Create directory if it doesn't exist
    if (!existsSync(fullUploadDir)) {
      await mkdir(fullUploadDir, { recursive: true });
    }

    // Write file
    const filepath = path.join(fullUploadDir, filename);
    await writeFile(filepath, buffer);

    // Return URL (pointing to backend static serve)
    // Use API_BASE_URL and remove /api to get the root backend URL
    const { default: API_BASE_URL } = await import('@/lib/api');
    const backendUrl = API_BASE_URL.replace(/\/api$/, '');
    const url = `${backendUrl}/public/${subDir}/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename,
      size: file.size,
      type: file.type
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

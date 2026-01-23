import { NextResponse } from 'next/server';
import API_BASE_URL from '@/lib/api';

export async function GET() {
  const targetUrl = `${API_BASE_URL}/benevity/projects`;
  try {
    console.log('Debug Route: Fetching', targetUrl);
    const response = await fetch(targetUrl, { cache: 'no-store' });
    
    const data = await response.text();
    let json;
    try {
        json = JSON.parse(data);
    } catch (e) {
        json = null;
    }

    return NextResponse.json({
      testType: 'Next.js Server -> Backend API',
      targetUrl,
      status: response.status,
      ok: response.ok,
      headers: Object.fromEntries(response.headers),
      bodyRaw: data.substring(0, 500),
      bodyJson: json
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      targetUrl
    }, { status: 500 });
  }
}

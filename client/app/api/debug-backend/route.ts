import { NextResponse } from 'next/server';

export async function GET() {
  const targetUrl = 'http://127.0.0.1:5001/api/benevity/projects';
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

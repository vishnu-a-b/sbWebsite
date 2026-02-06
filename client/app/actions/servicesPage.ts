'use server';

// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export async function getServicesPageContent() {
  try {
    const res = await fetch(`${API_URL}/api/services-page`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch services page content", error);
    return null;
  }
}

export async function updateServicesPageContent(data: any) {
  try {
    const res = await fetch(`${API_URL}/api/services-page`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to update services page content');
    }

    const result = await res.json();
    return result.data || result;
  } catch (error) {
    console.error("Failed to update services page content", error);
    throw error;
  }
}

export async function seedServicesPageContent() {
  try {
    const res = await fetch(`${API_URL}/api/services-page/seed`, {
      method: 'POST',
    });

    if (!res.ok) {
      throw new Error('Failed to seed services page content');
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to seed services page content", error);
    throw error;
  }
}

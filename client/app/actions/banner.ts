'use server';

import API_BASE_URL from '@/lib/api';

export async function getBanners(location?: string) {
  try {
    const url = new URL(`${API_BASE_URL}/banner`);
    if (location) {
      url.searchParams.append('location', location);
    }
    
    const response = await fetch(url.toString(), {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.status}`);
    }

    const data = await response.json();
    return data.banners || [];
  } catch (error) {
    console.error("Failed to fetch banners", error);
    return [];
  }
}

export async function createBanner(data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/banner`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create banner: ${response.status}`);
    }

    const result = await response.json();
    return result.banner;
  } catch (error) {
    console.error("Failed to create banner", error);
    throw error;
  }
}

export async function updateBanner(id: string, data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/banner/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update banner: ${response.status}`);
    }

    const result = await response.json();
    return result.banner;
  } catch (error) {
    console.error("Failed to update banner", error);
    throw error;
  }
}

export async function deleteBanner(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/banner/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete banner: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to delete banner", error);
    throw error;
  }
}

export async function seedBenevityBanners() {
  try {
    // Use API_BASE_URL directly, it already handles the backend location
    const response = await fetch(`${API_BASE_URL}/benevity/banners/seed`, {
      method: 'POST',
      cache: 'no-store',
    });

    if (!response.ok) {
       const text = await response.text();
       console.error('Seed Error Response:', response.status, text, response.headers);
       return { success: false, error: `Backend returned ${response.status}: ${text}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error seeding banners:', error);
    return { success: false, error: 'Failed to connect to backend' };
  }
}

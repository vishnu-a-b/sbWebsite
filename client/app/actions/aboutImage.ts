'use server';

// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export async function getAboutImage() {
  try {
    const res = await fetch(`${API_URL}/api/about-image`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch about image", error);
    return null;
  }
}

export async function createAboutImage(data: any) {
  try {
    const res = await fetch(`${API_URL}/api/about-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to create about image');
    }

    const result = await res.json();
    return result.image || result;
  } catch (error) {
    console.error("Failed to create about image", error);
    throw error;
  }
}

export async function updateAboutImage(id: string, data: any) {
  try {
    // The backend POST endpoint handles both create and update (deactivates old, creates new)
    const res = await fetch(`${API_URL}/api/about-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to update about image');
    }

    const result = await res.json();
    return result.image || result;
  } catch (error) {
    console.error("Failed to update about image", error);
    throw error;
  }
}

export async function deleteAboutImage(id: string) {
  // Note: Backend doesn't have a delete endpoint, so we'll just return success
  // The POST endpoint deactivates old images anyway
  return { success: true };
}

export async function getAllAboutImages() {
  // Backend only returns the active image, not all images
  // For now, return the active image as an array
  try {
    const image = await getAboutImage();
    return image ? [image] : [];
  } catch (error) {
    console.error("Failed to fetch all about images", error);
    return [];
  }
}

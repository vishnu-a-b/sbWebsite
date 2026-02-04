'use server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export async function getAboutContent() {
  try {
    const res = await fetch(`${API_URL}/api/about`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error("Failed to fetch about content:", res.status);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch about content", error);
    return null;
  }
}

export async function updateAboutContent(data: any) {
  try {
    const res = await fetch(`${API_URL}/api/about`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to update about content");
    }
    const result = await res.json();
    return result.data || result;
  } catch (error) {
    console.error("Failed to update about content", error);
    throw error;
  }
}

export async function seedAboutContent() {
  try {
    const res = await fetch(`${API_URL}/api/about/seed`, {
      method: 'POST',
    });
    if (!res.ok) {
      throw new Error("Failed to seed about content");
    }
    await res.json();
    // After seeding, fetch the new content
    const aboutRes = await fetch(`${API_URL}/api/about`, {
      cache: 'no-store',
    });
    if (!aboutRes.ok) {
      throw new Error("Failed to fetch seeded content");
    }
    return await aboutRes.json();
  } catch (error) {
    console.error("Failed to seed about content", error);
    throw error;
  }
}

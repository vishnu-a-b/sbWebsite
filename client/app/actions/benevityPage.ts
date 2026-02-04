'use server';

import { revalidatePath } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export async function getBenevityPageContent() {
  try {
    const res = await fetch(`${API_URL}/api/benevity/page`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error("Failed to fetch benevity page content:", res.status);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch benevity page content", error);
    return null;
  }
}

export async function updateBenevityPageContent(data: any) {
  try {
    const res = await fetch(`${API_URL}/api/benevity/page`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to update benevity page content");
    }
    const result = await res.json();

    // Revalidate the benevity page to show updated content
    revalidatePath('/benevity');

    return result.data || result;
  } catch (error) {
    console.error("Failed to update benevity page content", error);
    throw error;
  }
}

export async function seedBenevityPageContent() {
  try {
    const res = await fetch(`${API_URL}/api/benevity/page/seed`, {
      method: 'POST',
    });
    if (!res.ok) {
      throw new Error("Failed to seed benevity page content");
    }
    await res.json();
    // After seeding, fetch the new content
    const pageRes = await fetch(`${API_URL}/api/benevity/page`, {
      cache: 'no-store',
    });
    if (!pageRes.ok) {
      throw new Error("Failed to fetch seeded content");
    }

    // Revalidate the benevity page to show updated content
    revalidatePath('/benevity');

    return await pageRes.json();
  } catch (error) {
    console.error("Failed to seed benevity page content", error);
    throw error;
  }
}

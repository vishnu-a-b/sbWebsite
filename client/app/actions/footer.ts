'use server';

import { revalidatePath } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export async function getFooterContent() {
  try {
    const res = await fetch(`${API_URL}/api/footer`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch {
    // Silently fail during build when backend is not available
    return null;
  }
}

export async function updateFooterContent(data: any) {
  try {
    const res = await fetch(`${API_URL}/api/footer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to update footer content");
    }
    const result = await res.json();

    // Revalidate all pages since footer is on every page
    revalidatePath('/', 'layout');

    return result.data || result;
  } catch (error) {
    console.error("Failed to update footer content", error);
    throw error;
  }
}

export async function seedFooterContent() {
  try {
    const res = await fetch(`${API_URL}/api/footer/seed`, {
      method: 'POST',
    });
    if (!res.ok) {
      throw new Error("Failed to seed footer content");
    }
    await res.json();

    const footerRes = await fetch(`${API_URL}/api/footer`, {
      cache: 'no-store',
    });
    if (!footerRes.ok) {
      throw new Error("Failed to fetch seeded content");
    }

    revalidatePath('/', 'layout');

    return await footerRes.json();
  } catch (error) {
    console.error("Failed to seed footer content", error);
    throw error;
  }
}

'use server';

import connectToDatabase from "@/lib/db";
import Banner from "@/models/Banner";

import API_BASE_URL from '@/lib/api';

export async function getBanners(location?: string) {
  await connectToDatabase();
  try {
    const filter: any = {};
    if (location) {
      if (location === 'home') {
        // For backward compatibility, include banners with no location set
        filter.$or = [{ location: 'home' }, { location: { $exists: false } }];
      } else {
        filter.location = location;
      }
    } else {
      // If no location specified, maybe fetch all? Or default to home?
      // Let's keep it as "fetch all" if no location provided, as it was before.
    }
    const banners = await Banner.find(filter).sort({ order: 1 }).lean();
    return JSON.parse(JSON.stringify(banners));
  } catch (error) {
    console.error("Failed to fetch banners", error);
    return [];
  }
}

export async function createBanner(data: any) {
  await connectToDatabase();
  try {
    // Set default location if not provided
    if (!data.location) data.location = 'home';
    const banner = await Banner.create(data);
    return JSON.parse(JSON.stringify(banner));
  } catch (error) {
    console.error("Failed to create banner", error);
    throw error;
  }
}

export async function updateBanner(id: string, data: any) {
  await connectToDatabase();
  try {
    const banner = await Banner.findByIdAndUpdate(id, data, { new: true });
    return JSON.parse(JSON.stringify(banner));
  } catch (error) {
    console.error("Failed to update banner", error);
    throw error;
  }
}

export async function deleteBanner(id: string) {
  await connectToDatabase();
  try {
    await Banner.findByIdAndDelete(id);
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

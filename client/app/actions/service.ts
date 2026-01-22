'use server';

const API_URL = 'http://127.0.0.1:5001';

export async function getServices() {
  try {
    console.log(`Fetching services from: ${API_URL}/api/services`);
    const response = await fetch(`${API_URL}/api/services`, {
      cache: 'no-store',
    });

    if (!response.ok) {
        console.error(`getServices: Fetch failed with status: ${response.status}`);
      throw new Error('Failed to fetch services');
    }

    const data = await response.json();
    console.log(`getServices: Fetched ${data.services?.length} services`);
    return data.services || [];
  } catch (error) {
    console.error("Failed to fetch services", error);
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const response = await fetch(`${API_URL}/api/services/slug/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
       console.error(`getServiceBySlug: Fetch failed with status: ${response.status}`);
       return null;
    }

    const data = await response.json();
    return data.service;
  } catch (error) {
    console.error("Failed to fetch service by slug", error);
    return null;
  }
}


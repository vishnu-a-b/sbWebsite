'use server';

// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export async function getAdminData(type: 'volunteers' | 'contacts') {
  try {
    const endpoint = type === 'volunteers' ? 'volunteer' : 'contact';
    const res = await fetch(`${API_URL}/api/${endpoint}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Failed to fetch ${type}: ${res.status}`);
      return [];
    }

    const data = await res.json();

    // Backend returns array directly for GET requests
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch admin data", error);
    return [];
  }
}

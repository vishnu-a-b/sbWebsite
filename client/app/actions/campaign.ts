'use server';

// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export interface Campaign {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  currency: string;
  status: string;
  startDate: string;
  endDate?: string;
  isFeatured: boolean;
}

export async function getActiveCampaigns(): Promise<Campaign[]> {
  try {
    const res = await fetch(`${API_URL}/api/campaign/active`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch campaigns');
    }

    const data = await res.json();
    return data.success ? data.campaigns : [];
  } catch (error) {
    console.error('Error fetching active campaigns:', error);
    return [];
  }
}

export async function getFeaturedCampaigns(): Promise<Campaign[]> {
  try {
    const res = await fetch(`${API_URL}/api/campaign/featured`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch featured campaigns');
    }

    const data = await res.json();
    return data.success ? data.campaigns : [];
  } catch (error) {
    console.error('Error fetching featured campaigns:', error);
    return [];
  }
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  try {
    const res = await fetch(`${API_URL}/api/campaign/slug/${slug}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.success ? data.campaign : null;
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return null;
  }
}

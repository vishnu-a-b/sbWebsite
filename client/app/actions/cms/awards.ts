'use server';

import API_BASE_URL from '@/lib/api';

export async function getAwards() {
  try {
    const url = `${API_BASE_URL}/awards/admin`;
    console.log('[Awards] Fetching from:', url);
    
    const response = await fetch(url, {
      cache: 'no-store',
    });

    console.log('[Awards] Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Awards] Error response:', errorText);
      throw new Error('Failed to fetch awards');
    }

    const data = await response.json();
    console.log('[Awards] Fetched awards count:', data.awards?.length);
    return data.awards || [];
  } catch (error) {
    console.error('Error fetching awards:', error);
    return [];
  }
}

export async function getAward(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/awards/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch award');
    }

    const data = await response.json();
    return data.award;
  } catch (error) {
    console.error('Error fetching award:', error);
    throw error;
  }
}

export async function createAward(awardData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/awards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(awardData),
    });

    if (!response.ok) {
      throw new Error('Failed to create award');
    }

    const data = await response.json();
    return data.award;
  } catch (error) {
    console.error('Error creating award:', error);
    throw error;
  }
}

export async function updateAward(id: string, awardData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/awards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(awardData),
    });

    if (!response.ok) {
      throw new Error('Failed to update award');
    }

    const data = await response.json();
    return data.award;
  } catch (error) {
    console.error('Error updating award:', error);
    throw error;
  }
}

export async function deleteAward(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/awards/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete award');
    }

    return true;
  } catch (error) {
    console.error('Error deleting award:', error);
    throw error;
  }
}

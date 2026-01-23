'use server';

import API_BASE_URL from '@/lib/api';

export async function getNewsEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events/admin`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news/events');
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching news/events:', error);
    return [];
  }
}

export async function getPublicNewsEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch public news/events');
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching public news/events:', error);
    return [];
  }
}

export async function getNewsEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news/event');
    }

    const data = await response.json();
    return data.newsEvent;
  } catch (error) {
    console.error('Error fetching news/event:', error);
    throw error;
  }
}

export async function createNewsEvent(newsEventData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsEventData),
    });

    if (!response.ok) {
      throw new Error('Failed to create news/event');
    }

    const data = await response.json();
    return data.newsEvent;
  } catch (error) {
    console.error('Error creating news/event:', error);
    throw error;
  }
}

export async function updateNewsEvent(id: string, newsEventData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsEventData),
    });

    if (!response.ok) {
      throw new Error('Failed to update news/event');
    }

    const data = await response.json();
    return data.newsEvent;
  } catch (error) {
    console.error('Error updating news/event:', error);
    throw error;
  }
}

export async function deleteNewsEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/news-events/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete news/event');
    }

    return true;
  } catch (error) {
    console.error('Error deleting news/event:', error);
    throw error;
  }
}

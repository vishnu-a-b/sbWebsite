'use server';

const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001';
const API_URL = RAW_API_URL.includes('localhost') ? RAW_API_URL.replace('localhost', '127.0.0.1') : RAW_API_URL;

export async function getServices() {
  try {
    const url = `${API_URL}/api/services/admin`;
    console.log(`[CMS] Fetching services from: ${url}`);
    
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[CMS] Failed to fetch services: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch services');
    }

    const data = await response.json();
    console.log(`[CMS] Fetched ${data.services?.length} services`);
    return data.services || [];
  } catch (error) {
    console.error('[CMS] Error fetching services:', error);
    return [];
  }
}

export async function getService(id: string) {
  try {
    const response = await fetch(`${API_URL}/api/services/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch service');
    }

    const data = await response.json();
    return data.service;
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
}

export async function createService(serviceData: any) {
  try {
    const response = await fetch(`${API_URL}/api/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    });

    if (!response.ok) {
      throw new Error('Failed to create service');
    }

    const data = await response.json();
    return data.service;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
}

export async function updateService(id: string, serviceData: any) {
  try {
    const response = await fetch(`${API_URL}/api/services/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    });

    if (!response.ok) {
      throw new Error('Failed to update service');
    }

    const data = await response.json();
    return data.service;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
}

export async function deleteService(id: string) {
  try {
    const response = await fetch(`${API_URL}/api/services/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete service');
    }

    return true;
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
}
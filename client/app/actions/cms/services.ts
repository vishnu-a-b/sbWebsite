'use server';

import API_BASE_URL from '@/lib/api';

export async function getServices() {
  try {
    const url = `${API_BASE_URL}/services/admin`;
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
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
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
    const response = await fetch(`${API_BASE_URL}/services`, {
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
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
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
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
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
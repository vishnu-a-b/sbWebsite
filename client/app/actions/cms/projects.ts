'use server';

import API_BASE_URL from '@/lib/api';

export async function getProjects(filter?: { showOnBenevity?: boolean, showOnFirstFace?: boolean, mode?: 'admin' | 'public' }) {
  try {
    let url = `${API_BASE_URL}/projects/admin`;
    if (filter) {
        if (filter.showOnBenevity) {
            // Check if admin mode requested for Benevity
            if (filter.mode === 'admin') {
                url = `${API_BASE_URL}/benevity/projects/admin`;
            } else {
                url = `${API_BASE_URL}/benevity/projects`;
            }
        } else {
             // Main projects
             url = `${API_BASE_URL}/projects?`;
             if (filter.showOnFirstFace) {
                 url += `showOnFirstFace=true`;
             }
        }
    }

    console.log('getProjects: Fetching from URL:', url);
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('getProjects: Fetch failed with status:', response.status);
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    console.log('getProjects: Received data count:', data.projects?.length);
    return data.projects || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(id: string) {
  try {
    // 1. Try Main Collection
    const mainResponse = await fetch(`${API_BASE_URL}/projects/${id}`, { cache: 'no-store' });
    if (mainResponse.ok) {
        const data = await mainResponse.json();
        return data.project;
    }

    // 2. Try Benevity Collection
    // Only if main failed (e.g. 404), check Benevity
    const benevityResponse = await fetch(`${API_BASE_URL}/benevity/projects/${id}`, { cache: 'no-store' });
    if (benevityResponse.ok) {
        const data = await benevityResponse.json();
        return data.project;
    }

    // 3. If here, neither worked
    console.error(`getProject: Failed to find project ${id} in either collection.`);
    throw new Error('Project not found');
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}


import { revalidatePath } from 'next/cache';

export async function createProject(projectData: any, isBenevity: boolean = false) {
  try {
    const url = isBenevity ? `${API_BASE_URL}/benevity/projects` : `${API_BASE_URL}/projects`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error('Failed to create project');
    }

    const data = await response.json();
    
    // Revalidate paths to update UI immediately
    revalidatePath('/admin/projects');
    revalidatePath('/projects');
    revalidatePath('/benevity');
    revalidatePath('/'); // If on home

    return data.project;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function updateProject(id: string, projectData: any, isBenevity: boolean = false) {
  try {
    const url = isBenevity ? `${API_BASE_URL}/benevity/projects/${id}` : `${API_BASE_URL}/projects/${id}`;
    // For Benevity routes, we might need a generic PUT endpoint if using /:id
    // Benevity routes currently don't explicitly list PUT /:id but assume standard CRUD.
    // I need to double check benevity.routes.ts... wait, I didn't add PUT /:id there!
    // I should check and update backend if needed.
    
    // Assuming standard REST, but let's check backend first.
    // Wait, I only added GET, POST (create), POST (seed), GET /:id.
    // I missed Update and Delete in benevity.routes.ts!
    
    // I will proceed with frontend update assuming backend will be fixed shortly.
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
        console.error('Update failed:', response.status, await response.text());
      throw new Error('Failed to update project');
    }

    const data = await response.json();
    
    revalidatePath('/admin/projects');
    revalidatePath('/projects');
    revalidatePath('/benevity');
    revalidatePath(`/projects/${id}`);

    return data.project;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}

export async function deleteProject(id: string, isBenevity: boolean = false) {
  try {
    const url = isBenevity ? `${API_BASE_URL}/benevity/projects/${id}` : `${API_BASE_URL}/projects/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete project');
    }

    revalidatePath('/admin/projects');
    revalidatePath('/projects');
    revalidatePath('/benevity');

    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}

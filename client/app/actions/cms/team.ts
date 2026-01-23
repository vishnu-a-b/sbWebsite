'use server';

import API_BASE_URL from '@/lib/api';

export async function getTeamMembers() {
  try {
    const response = await fetch(`${API_BASE_URL}/team/admin`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch team members');
    }

    const data = await response.json();
    return data.teamMembers || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getTeamMember(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch team member');
    }

    const data = await response.json();
    return data.teamMember;
  } catch (error) {
    console.error('Error fetching team member:', error);
    throw error;
  }
}

export async function createTeamMember(teamMemberData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamMemberData),
    });

    if (!response.ok) {
      throw new Error('Failed to create team member');
    }

    const data = await response.json();
    return data.teamMember;
  } catch (error) {
    console.error('Error creating team member:', error);
    throw error;
  }
}

export async function updateTeamMember(id: string, teamMemberData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamMemberData),
    });

    if (!response.ok) {
      throw new Error('Failed to update team member');
    }

    const data = await response.json();
    return data.teamMember;
  } catch (error) {
    console.error('Error updating team member:', error);
    throw error;
  }
}

export async function deleteTeamMember(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete team member');
    }

    return true;
  } catch (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
}

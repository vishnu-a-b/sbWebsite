'use server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export async function getTeamMembers() {
  try {
    const response = await fetch(`${API_URL}/api/team/admin`, {
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
    const response = await fetch(`${API_URL}/api/team/${id}`, {
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
    const response = await fetch(`${API_URL}/api/team`, {
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
    const response = await fetch(`${API_URL}/api/team/${id}`, {
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
    const response = await fetch(`${API_URL}/api/team/${id}`, {
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

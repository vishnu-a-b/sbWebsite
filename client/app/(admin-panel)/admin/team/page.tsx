'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, User } from 'lucide-react';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember } from '@/app/actions/cms/team';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  designation: string;
  bio: string;
  image: string;
  specialization?: string;
  experience?: number;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnAboutPage: boolean;
}

export default function TeamAdminPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const data = await getTeamMembers();
      setMembers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team members:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingMember) {
        await updateTeamMember(editingMember._id, data);
      } else {
        await createTeamMember(data);
      }
      setShowForm(false);
      setEditingMember(null);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error saving member:', error);
      alert('Failed to save team member');
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    try {
      await deleteTeamMember(id);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('Failed to delete team member');
    }
  };

  return (
    <div className="p-8">
      {showForm && (
        <TeamMemberForm
          member={editingMember}
          onClose={() => {
            setShowForm(false);
            setEditingMember(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
          <p className="text-gray-600 mt-1">Manage medical team & hospital staff</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add Team Member
        </button>
      </div>

      {/* CMS Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">CMS Controls</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Team members display based on <strong>Priority</strong> (higher first)</li>
          <li>• Only <strong>Active</strong> members within <strong>Start/Expiry dates</strong> are shown</li>
          <li>• Toggle "Show on About Page" to display on About Us section</li>
          <li>• Add specialization and experience for medical professionals</li>
        </ul>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            Loading team members...
          </div>
        ) : members.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No team members found. Click "Add Team Member" to create one.
          </div>
        ) : (
          members.map((member) => (
            <div key={member._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Profile Image */}
              <div className="relative h-64 bg-gray-200">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded font-semibold">
                    Priority: {member.priority}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{member.designation}</p>
                <p className="text-xs text-gray-600 mb-3">{member.role}</p>

                {member.specialization && (
                  <div className="text-xs text-gray-600 mb-2">
                    <strong>Specialization:</strong> {member.specialization}
                  </div>
                )}

                {member.experience && (
                  <div className="text-xs text-gray-600 mb-4">
                    <strong>Experience:</strong> {member.experience} years
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {member.isActive ? (
                      <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                        <Eye className="w-3 h-3" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <EyeOff className="w-3 h-3" />
                        Inactive
                      </span>
                    )}
                  </div>
                  {member.showOnAboutPage && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      On About Page
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(member)}
                    className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

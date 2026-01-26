'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, ImageIcon } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';
import { getProjects, createProject, updateProject, deleteProject } from '@/app/actions/cms/projects';

interface FeaturedProject {
  _id: string;
  projectName: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  gallery: string[];
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  showOnSecondFace: boolean;
  showOnBenevity: boolean;
  link?: string;
}

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<FeaturedProject | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Hardcode showOnBenevity: false for Main
      const data = await getProjects({ mode: 'admin', showOnBenevity: false });
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      // Force Benevity off
      data.showOnBenevity = false;

      if (editingProject) {
        await updateProject(editingProject._id, data, false);
      } else {
        await createProject(data, false);
      }
      setShowForm(false);
      setEditingProject(null);
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    }
  };

  const handleEdit = (project: FeaturedProject) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id, false);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  return (
    <div className="p-8">
      {showForm && (
        <ProjectForm
          project={editingProject}
          onClose={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
          onSave={handleSave}
        />
      )}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Featured Projects</h1>
          <p className="text-gray-600 mt-1">Manage community programs, special initiatives & campaigns for the Official Website.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add New Project
        </button>
      </div>

      {/* CMS Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">CMS Controls</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Projects display based on <strong>Priority</strong> (higher first)</li>
          <li>• Only <strong>Active</strong> projects within <strong>Start/Expiry dates</strong> are shown</li>
          <li>• <strong>First Face</strong>: Shows above the fold on homepage</li>
          <li>• <strong>Second Face</strong>: Shows below the fold on homepage</li>
          <li>• Upload featured image + gallery images for each project</li>
        </ul>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Project</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Display</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Link</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  Loading projects...
                </td>
              </tr>
            ) : projects.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No projects found. Click "Add New Project" to create one.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary">{project.priority}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {project.featuredImage ? (
                        <img src={project.featuredImage} alt={project.projectName} className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{project.projectName}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{project.shortDescription}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {project.showOnFirstFace && (
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-medium w-fit">1st Face</span>
                      )}
                      {project.showOnSecondFace && (
                        <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-medium w-fit">2nd Face</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blue-600 hover:underline max-w-[150px] truncate block"
                      >
                        {project.link}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {project.isActive ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <Eye className="w-4 h-4" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400 text-sm">
                        <EyeOff className="w-4 h-4" />
                        Inactive
                      </span>
                    )}
                    <div className="text-[10px] text-gray-500 mt-1">
                      {new Date(project.startDate).toLocaleDateString()} to {new Date(project.expiryDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

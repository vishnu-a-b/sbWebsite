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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No projects found. Click "Add New Project" to create one.
          </div>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200">
                {project.featuredImage ? (
                  <img src={project.featuredImage} alt={project.projectName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-2">
                  {project.showOnFirstFace && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">1st Face</span>
                  )}
                  {project.showOnSecondFace && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">2nd Face</span>
                  )}
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded font-semibold">
                    Priority: {project.priority}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{project.projectName}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>

                {/* Status & Dates */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div>
                    {project.isActive ? (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <Eye className="w-3 h-3" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400">
                        <EyeOff className="w-3 h-3" />
                        Inactive
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div>{new Date(project.startDate).toLocaleDateString()}</div>
                    <div>to {new Date(project.expiryDate).toLocaleDateString()}</div>
                  </div>
                </div>

                {/* Gallery Count */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="text-xs text-gray-500 mb-4">
                    <ImageIcon className="w-3 h-3 inline mr-1" />
                    {project.gallery.length} images in gallery
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
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

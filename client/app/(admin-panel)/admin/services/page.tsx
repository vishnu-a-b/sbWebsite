'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import ServiceForm from '@/components/admin/ServiceForm';
import ServicesPageConfig from '@/components/admin/ServicesPageConfig';
import { getServices, createService, updateService, deleteService } from '@/app/actions/cms/services';

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingService) {
        await updateService(editingService._id, data);
      } else {
        await createService(data);
      }
      setShowForm(false);
      setEditingService(null);
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Failed to save service');
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteService(id);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  return (
    <div className="p-8">
      {/* Form Modal */}
      {showForm && (
        <ServiceForm
          service={editingService}
          onClose={() => {
            setShowForm(false);
            setEditingService(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-600 mt-1">Manage hospital services with CMS controls</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add New Service
        </button>
      </div>

      {/* Page Configuration */}
      <ServicesPageConfig />

      {/* CMS Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">CMS Controls</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Services display based on <strong>Priority</strong> (higher first)</li>
          <li>• Only <strong>Active</strong> services within <strong>Start/Expiry dates</strong> are shown</li>
          <li>• Toggle "Show on Homepage" to feature on first face</li>
        </ul>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Icon</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date Range</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  Loading services...
                </td>
              </tr>
            ) : services.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No services found. Click "Add New Service" to create one.
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary">{service.priority}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{service.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{service.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-2xl">{service.icon}</span>
                  </td>
                  <td className="px-6 py-4">
                    {service.isActive ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400">
                        <EyeOff className="w-4 h-4" />
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>{new Date(service.startDate).toLocaleDateString()}</div>
                    <div className="text-xs">to {new Date(service.expiryDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
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

'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, Newspaper, Clock } from 'lucide-react';
import NewsEventForm from '@/components/admin/NewsEventForm';
import { getNewsEvents, createNewsEvent, updateNewsEvent, deleteNewsEvent } from '@/app/actions/cms/newsEvents';

interface NewsEvent {
  _id: string;
  title: string;
  description: string;
  fullContent: string;
  eventDate: Date;
  images: string[];
  type: 'news' | 'event';
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  isScheduled: boolean;
  scheduledPublishDate?: Date;
}

export default function NewsEventsAdminPage() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsEvent | null>(null);

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  const fetchNewsEvents = async () => {
    try {
      const data = await getNewsEvents();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news/events:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingItem) {
        await updateNewsEvent(editingItem._id, data);
      } else {
        await createNewsEvent(data);
      }
      setShowForm(false);
      setEditingItem(null);
      fetchNewsEvents();
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Failed to save item');
    }
  };

  const handleEdit = (item: NewsEvent) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await deleteNewsEvent(id);
      fetchNewsEvents();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <div className="p-8">
      {showForm && (
        <NewsEventForm
          item={editingItem}
          onClose={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News & Events</h1>
          <p className="text-gray-600 mt-1">Manage news articles and upcoming events</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add News/Event
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('news')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filter === 'news' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <Newspaper className="w-4 h-4" />
          News
        </button>
        <button
          onClick={() => setFilter('event')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filter === 'event' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <Calendar className="w-4 h-4" />
          Events
        </button>
      </div>

      {/* CMS Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">CMS Controls</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Items display based on <strong>Event Date</strong> (newest first) and <strong>Priority</strong></li>
          <li>• Only <strong>Active</strong> items within <strong>Start/Expiry dates</strong> are shown</li>
          <li>• <strong>Scheduled Publishing</strong>: Set future publish date to auto-activate</li>
          <li>• Toggle "Show on First Face" to feature on homepage</li>
        </ul>
      </div>

      {/* News/Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            Loading news & events...
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No {filter === 'all' ? 'items' : filter} found. Click "Add News/Event" to create one.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header with Type Badge */}
              <div className="relative h-48 bg-gray-200">
                {item.images && item.images.length > 0 ? (
                  <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {item.type === 'news' ? (
                      <Newspaper className="w-12 h-12 text-gray-400" />
                    ) : (
                      <Calendar className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                )}
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className={`text-white text-xs px-2 py-1 rounded ${item.type === 'news' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                    {item.type === 'news' ? 'News' : 'Event'}
                  </span>
                  {item.showOnFirstFace && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Featured</span>
                  )}
                  {item.isScheduled && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Scheduled
                    </span>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded font-semibold">
                    Priority: {item.priority}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                {/* Event Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {new Date(item.eventDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div>
                    {item.isActive ? (
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
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
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

'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Video, Image as ImageIcon, Edit, Trash2, Database } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';
import BannerForm from '@/components/admin/BannerForm';

function BannersContent() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  const currentLocation = locationParam === 'benevity' ? 'benevity' : 'home';
  
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<any>(null);

  useEffect(() => {
    fetchBanners();
  }, [currentLocation]);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const { getBanners } = await import('@/app/actions/banner');
      // If we are on the benevity page, strictly fetch benevity.
      // If we are on the home page (or default), fetch home (which includes backward compat).
      // However, if the user navigates to /banners without param, we might want to show ALL?
      // But the sidebar sends ?location=benevity or /banners (which implies home usually).
      // Let's stick to the sidebar logic where "Hero Banners" -> all/home and "Benevity" -> benevity.
      
      // If no param is present, let's treat it as 'home' for now to match "Hero Banners"
      // Or pass undefined if we want all.
      // But getBanners('home') includes null locations.
      
      const data = await getBanners(locationParam || 'home'); 
      setBanners(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching banners:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingBanner) {
        const { updateBanner } = await import('@/app/actions/banner');
        await updateBanner(editingBanner._id, data);
      } else {
        const { createBanner } = await import('@/app/actions/banner');
        await createBanner(data);
      }
      setShowForm(false);
      setEditingBanner(null);
      fetchBanners();
    } catch (error) {
      console.error('Error saving banner:', error);
      alert('Failed to save banner');
    }
  };

  const handleEdit = (banner: any) => {
    setEditingBanner(banner);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this banner?')) return;
    try {
      const { deleteBanner } = await import('@/app/actions/banner');
      await deleteBanner(id);
      fetchBanners();
    } catch (error) {
      console.error('Error deleting banner:', error);
      alert('Failed to delete banner');
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-lg text-gray-600">Loading banners...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {currentLocation === 'benevity' ? 'Benevity Impact Banners' : 'Hero Banners & Videos'}
            </h1>
            <p className="text-gray-600">
              {currentLocation === 'benevity' ? 'Manage sliders for the Benevity page' : 'Manage homepage hero section content'}
            </p>
          </div>
          <div className="flex gap-2">
          {currentLocation === 'benevity' && (
              <Button
               onClick={async () => {
                 try {
                   const { seedBenevityBanners } = await import('@/app/actions/banner');
                   const data = await seedBenevityBanners();
                   if (data.success) {
                     alert(data.message);
                     fetchBanners();
                   } else {
                     alert('Failed to seed: ' + (data.error || data.message || 'Unknown error'));
                   }
                 } catch (err) {
                   console.error(err);
                   alert('Error seeding banners. Ensure backend is running.');
                 }
               }}
               variant="outline"
               className="gap-2"
             >
              <Database className="w-4 h-4" />
              Seed Defaults
            </Button>
            )}
            <Button
              onClick={() => {
                setEditingBanner(null);
                setShowForm(true);
              }}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Banner
            </Button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <BannerForm
            banner={editingBanner}
            defaultLocation={currentLocation}
            onClose={() => {
              setShowForm(false);
              setEditingBanner(null);
            }}
            onSave={handleSave}
          />
        )}
      </div>

      {/* Banners List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {banners.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No banners found. Create your first banner!
          </div>
        ) : (
          banners.map((banner, index) => (
            <RevealAnimation key={banner._id} delay={index * 0.1}>
              <Card className="border-2 hover:border-secondary transition-all h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {banner.mediaType === 'video' ? (
                        <Video className="w-5 h-5 text-primary" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-secondary" />
                      )}
                      <CardTitle className="text-lg">{banner.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1">
                      {banner.location === 'benevity' ? (
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium border border-purple-200">
                          Benevity
                        </span>
                      ) : (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium border border-blue-200">
                          Home
                        </span>
                      )}
                      {!banner.isActive && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          Inactive
                        </span>
                      )}
                      <span className="text-xs bg-secondary/30 text-primary px-2 py-1 rounded">
                        #{banner.order}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Preview */}
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    {banner.mediaType === 'video' ? (
                      <video
                        src={banner.videoUrl}
                        poster={banner.thumbnailUrl}
                        className="w-full h-full object-cover"
                        muted
                      />
                    ) : (
                      <img
                        src={banner.imageUrl}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 flex-1">
                    {banner.subtitle && (
                      <p className="text-sm text-gray-600">
                        <strong>Subtitle:</strong> {banner.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {banner.description}
                    </p>
                    {banner.ctaText && (
                      <p className="text-sm text-primary">
                        <strong>CTA:</strong> {banner.ctaText} → {banner.ctaLink}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4 pt-4 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(banner)}
                      className="flex-1"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(banner._id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </RevealAnimation>
          ))
        )}
      </div>

      {/* Video Upload Instructions */}
      <RevealAnimation delay={0.3}>
        <Card className="mt-8 border-2 border-secondary/50 bg-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" />
              Video Upload Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>1. Local Video Files:</strong> Place your video in <code className="bg-white px-2 py-1 rounded">public/video/</code> folder
              </p>
              <p>
                <strong>2. Use Path:</strong> Enter <code className="bg-white px-2 py-1 rounded">/video/hero.mp4</code> in the Video URL field
              </p>
              <p>
                <strong>3. Recommended Format:</strong> MP4 (H.264), max 50MB for web performance
              </p>
              <p>
                <strong>4. External URLs:</strong> You can also use URLs like <code className="bg-white px-2 py-1 rounded">https://cdn.example.com/video.mp4</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </RevealAnimation>
    </div>
  );
}

export default function BannersPage() {
  return (
    <Suspense fallback={
      <div className="p-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-lg text-gray-600">Initializing...</div>
        </div>
      </div>
    }>
      <BannersContent />
    </Suspense>
  );
}

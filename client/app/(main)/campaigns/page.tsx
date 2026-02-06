'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Target, ArrowRight, Heart, Users, Loader2 } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';
import DonationModal from '@/components/DonationModal';

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  currency: string;
  status: string;
  startDate: string;
  endDate?: string;
  isFeatured: boolean;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/active`);
      const data = await res.json();
      if (data.success) {
        setCampaigns(data.campaigns);
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  const handleDonateClick = (campaign: Campaign, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/90 py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
          </div>
          <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
            <RevealAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">
                <Target className="w-4 h-4" />
                Active Campaigns
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Support Our Campaigns
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Help us reach our goals and make a lasting impact on the lives of those in need.
                Every contribution counts.
              </p>
            </RevealAnimation>
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : campaigns.length === 0 ? (
              <div className="text-center py-16">
                <Target className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No Active Campaigns</h2>
                <p className="text-gray-600 mb-6">There are no active campaigns at the moment.</p>
                <Button asChild>
                  <Link href="/donate">Make a General Donation</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {campaigns.map((campaign, index) => {
                  const progress = getProgressPercentage(campaign.raisedAmount, campaign.goalAmount);

                  return (
                    <RevealAnimation key={campaign._id} delay={index * 0.1}>
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden border-none shadow-lg rounded-2xl">
                        {/* Campaign Image */}
                        <div className="relative h-52 w-full overflow-hidden">
                          <img
                            src={campaign.image || "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop"}
                            alt={campaign.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Progress overlay */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex justify-between text-sm mb-1.5">
                              <span className="text-white/90 font-medium">
                                {formatCurrency(campaign.raisedAmount)} raised
                              </span>
                              <span className="text-white font-bold">{progress}%</span>
                            </div>
                            <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                              <div
                                className="bg-secondary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>

                          {/* Featured badge */}
                          {campaign.isFeatured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                                FEATURED
                              </span>
                            </div>
                          )}
                        </div>

                        <CardHeader className="p-6 pb-3">
                          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {campaign.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="px-6 pb-6 space-y-4">
                          {campaign.shortDescription && (
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                              {campaign.shortDescription}
                            </p>
                          )}

                          {/* Stats */}
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              <span>Goal: {formatCurrency(campaign.goalAmount)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{campaign.donorCount} donors</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-2">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                              <Link href={`/campaigns/${campaign.slug}`}>
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-1.5" />
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 rounded-full"
                              onClick={(e) => handleDonateClick(campaign, e)}
                            >
                              <Heart className="w-4 h-4 mr-1.5" />
                              Donate Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </RevealAnimation>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
            <RevealAnimation>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                You can always make a general donation to support our overall mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/donate">
                    <Heart className="w-5 h-5 mr-2" />
                    General Donation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2">
                  <Link href="/donate?tab=fellowship">
                    <Users className="w-5 h-5 mr-2" />
                    Join Fellowship
                  </Link>
                </Button>
              </div>
            </RevealAnimation>
          </div>
        </section>
      </div>

      {/* Donation Modal */}
      {selectedCampaign && (
        <DonationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          campaign={selectedCampaign}
        />
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Target, ArrowRight, Heart, Users, IndianRupee } from 'lucide-react';
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

interface CampaignsSectionProps {
  campaigns: Campaign[];
}

export default function CampaignsSection({ campaigns }: CampaignsSectionProps) {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!campaigns || campaigns.length === 0) {
    return null;
  }

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
      <section className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#0f635c 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <RevealAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Target className="w-4 h-4" />
                Active Campaigns
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Support Our Campaigns
              </h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Help us reach our goals and make a lasting impact on the lives of those in need.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.slice(0, 6).map((campaign, index) => {
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

          {campaigns.length > 6 && (
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center mt-16">
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-2 hover:bg-primary hover:text-white transition-all">
                  <Link href="/campaigns">
                    View All Campaigns
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </RevealAnimation>
          )}
        </div>
      </section>

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

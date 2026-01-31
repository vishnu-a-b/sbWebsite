'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  Heart,
  ArrowLeft,
  Target,
  Users,
  Calendar,
  IndianRupee,
  Share2,
  CheckCircle,
  Loader2
} from 'lucide-react';
import DonationModal from '@/components/DonationModal';
import RevealAnimation from '@/components/RevealAnimation';

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

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export default function CampaignDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchCampaign();
    }
  }, [slug]);

  const fetchCampaign = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/slug/${slug}`);
      const data = await res.json();

      if (data.success && data.campaign) {
        setCampaign(data.campaign);
      } else {
        setError('Campaign not found');
      }
    } catch (err) {
      console.error('Error fetching campaign:', err);
      setError('Failed to load campaign');
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: campaign?.title,
          text: campaign?.shortDescription || campaign?.title,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Target className="w-16 h-16 text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Campaign Not Found</h1>
        <p className="text-gray-600 mb-6">The campaign you're looking for doesn't exist or has ended.</p>
        <Button asChild>
          <Link href="/donate?tab=campaign">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Campaigns
          </Link>
        </Button>
      </div>
    );
  }

  const progress = getProgressPercentage(campaign.raisedAmount, campaign.goalAmount);
  const remaining = campaign.goalAmount - campaign.raisedAmount;

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
          {campaign.image ? (
            <Image
              src={campaign.image}
              alt={campaign.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl pb-12 md:pb-16">
              <RevealAnimation direction="up">
                <Link
                  href="/donate?tab=campaign"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Campaigns
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  {campaign.isFeatured && (
                    <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                  <span className="bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-400/30">
                    ACTIVE
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
                  {campaign.title}
                </h1>
                {campaign.shortDescription && (
                  <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                    {campaign.shortDescription}
                  </p>
                )}
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Campaign Details */}
              <div className="lg:col-span-2 space-y-8">
                <RevealAnimation>
                  <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Target className="w-6 h-6 text-primary" />
                        About This Campaign
                      </h2>
                      <div
                        className="prose prose-lg max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: campaign.description.replace(/\n/g, '<br/>') }}
                      />
                    </CardContent>
                  </Card>
                </RevealAnimation>

                {/* Campaign Stats */}
                <RevealAnimation delay={0.1}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="border-none shadow-md rounded-xl">
                      <CardContent className="p-5 text-center">
                        <IndianRupee className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-gray-900">
                          {formatCurrency(campaign.raisedAmount)}
                        </div>
                        <div className="text-sm text-gray-500">Raised</div>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-md rounded-xl">
                      <CardContent className="p-5 text-center">
                        <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-gray-900">
                          {formatCurrency(campaign.goalAmount)}
                        </div>
                        <div className="text-sm text-gray-500">Goal</div>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-md rounded-xl">
                      <CardContent className="p-5 text-center">
                        <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-gray-900">
                          {campaign.donorCount}
                        </div>
                        <div className="text-sm text-gray-500">Donors</div>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-md rounded-xl">
                      <CardContent className="p-5 text-center">
                        <CheckCircle className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-gray-900">
                          {progress}%
                        </div>
                        <div className="text-sm text-gray-500">Funded</div>
                      </CardContent>
                    </Card>
                  </div>
                </RevealAnimation>

                {/* Campaign Timeline */}
                <RevealAnimation delay={0.2}>
                  <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Campaign Timeline
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div>
                          <div className="text-sm text-gray-500">Started</div>
                          <div className="font-medium">{formatDate(campaign.startDate)}</div>
                        </div>
                        {campaign.endDate && (
                          <>
                            <div className="h-8 w-px bg-gray-200" />
                            <div>
                              <div className="text-sm text-gray-500">Ends</div>
                              <div className="font-medium">{formatDate(campaign.endDate)}</div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </RevealAnimation>
              </div>

              {/* Right Column - Donation Card (Sticky) */}
              <div className="lg:col-span-1">
                <RevealAnimation direction="right">
                  <div className="sticky top-24">
                    <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                      <CardContent className="p-6 space-y-6">
                        {/* Progress Section */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-bold text-primary">{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-primary to-primary/80 h-4 rounded-full transition-all duration-700"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Amount Info */}
                        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Raised</span>
                            <span className="font-bold text-gray-900">
                              {formatCurrency(campaign.raisedAmount)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Goal</span>
                            <span className="font-bold text-gray-900">
                              {formatCurrency(campaign.goalAmount)}
                            </span>
                          </div>
                          {remaining > 0 && (
                            <div className="flex justify-between pt-2 border-t">
                              <span className="text-gray-600">Still Needed</span>
                              <span className="font-bold text-primary">
                                {formatCurrency(remaining)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Donor Count */}
                        <div className="flex items-center justify-center gap-2 text-gray-600">
                          <Users className="w-5 h-5" />
                          <span>
                            <strong className="text-gray-900">{campaign.donorCount}</strong> people have donated
                          </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3">
                          <Button
                            size="lg"
                            className="w-full rounded-full py-6 text-lg font-bold"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <Heart className="w-5 h-5 mr-2" />
                            Donate Now
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full rounded-full border-2"
                            onClick={handleShare}
                          >
                            <Share2 className="w-5 h-5 mr-2" />
                            Share Campaign
                          </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-4 border-t text-center text-sm text-gray-500">
                          <div className="flex justify-center gap-4">
                            <div>
                              <div className="font-bold text-primary">80G</div>
                              <div className="text-xs">Tax Exempt</div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                              <div className="font-bold text-primary">100%</div>
                              <div className="text-xs">Secure</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Every Contribution Makes a Difference
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Your support helps us provide free healthcare to those who need it most.
                Join our mission and be a part of the change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-secondary hover:text-primary rounded-full px-10 py-6 text-lg font-bold"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate to This Campaign
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-bold"
                >
                  <Link href="/donate">View All Options</Link>
                </Button>
              </div>
            </RevealAnimation>
          </div>
        </section>
      </div>

      {/* Donation Modal */}
      {campaign && (
        <DonationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          campaign={campaign}
        />
      )}
    </>
  );
}

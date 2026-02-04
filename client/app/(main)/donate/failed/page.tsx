'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { XCircle, RefreshCw, Home, MessageCircle } from "lucide-react";
import { Suspense } from 'react';

function FailedContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const message = searchParams.get('message');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-500 py-16 text-center">
        <XCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Payment Failed</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Unfortunately, your payment could not be processed.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-600">Transaction Unsuccessful</CardTitle>
              <CardDescription>
                Don&apos;t worry - no amount has been deducted from your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Error Details */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg space-y-3">
                {orderId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono font-medium">{orderId}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-red-600 font-medium">Failed</span>
                </div>
                {message && (
                  <div className="pt-2 border-t border-red-200">
                    <span className="text-gray-600">Reason:</span>
                    <p className="text-red-700 mt-1">{decodeURIComponent(message)}</p>
                  </div>
                )}
              </div>

              {/* Common Reasons */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Common Reasons for Failure</h4>
                <ul className="text-sm text-yellow-700 space-y-1 list-disc ml-4">
                  <li>Insufficient funds in your account</li>
                  <li>Transaction declined by your bank</li>
                  <li>Network connectivity issues</li>
                  <li>Session timeout during payment</li>
                  <li>Incorrect card/UPI details</li>
                </ul>
              </div>

              {/* Info */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">What Should You Do?</h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc ml-4">
                  <li>Check your bank account to confirm no amount was deducted.</li>
                  <li>If any amount was deducted, it will be refunded within 5-7 working days.</li>
                  <li>Try again with a different payment method.</li>
                  <li>Contact us if the issue persists.</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link href="/donate">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </Link>
                </Button>
              </div>

              {/* Contact */}
              <div className="text-center pt-4 border-t">
                <p className="text-gray-600 mb-4">Need help with your donation?</p>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default function DonationFailedPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-white items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    }>
      <FailedContent />
    </Suspense>
  );
}

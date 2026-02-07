'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { Clock, RefreshCw, Home, Loader2, CheckCircle, XCircle } from "lucide-react";

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

function PendingContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  const [checking, setChecking] = useState(false);
  const [status, setStatus] = useState<'pending' | 'success' | 'failed'>('pending');
  const [message, setMessage] = useState('');

  const checkStatus = async () => {
    if (!orderId) return;

    setChecking(true);
    try {
      const res = await fetch(`${API_URL}/api/donation/status/${orderId}`);
      const data = await res.json();

      if (data.success) {
        if (data.status === 'SUCCESS') {
          setStatus('success');
          setMessage('Your payment has been confirmed!');
        } else if (data.status === 'FAILED') {
          setStatus('failed');
          setMessage(data.message || 'Payment failed');
        } else {
          setStatus('pending');
          setMessage(data.message || 'Payment is still being processed');
        }
      }
    } catch (error) {
      console.error('Status check error:', error);
    } finally {
      setChecking(false);
    }
  };

  // Auto-check status on load
  useEffect(() => {
    if (orderId) {
      checkStatus();
    }
  }, [orderId]);

  if (status === 'success') {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <section className="bg-gradient-to-r from-green-600 to-green-500 py-16 text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-white/90 max-w-2xl mx-auto px-4">
            Your donation has been confirmed.
          </p>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Thank You!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700">
                  Your generous contribution will help us continue providing free healthcare to those in need.
                </p>
                {orderId && (
                  <p className="text-sm text-gray-500">
                    Order ID: <span className="font-mono">{orderId}</span>
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild>
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Return Home
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/donate">Donate Again</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <section className="bg-gradient-to-r from-red-600 to-red-500 py-16 text-center">
          <XCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Payment Failed</h1>
          <p className="text-white/90 max-w-2xl mx-auto px-4">
            {message || 'Unfortunately, your payment could not be processed.'}
          </p>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto max-w-2xl">
            <Card>
              <CardContent className="text-center space-y-4 pt-6">
                {orderId && (
                  <p className="text-sm text-gray-500">
                    Order ID: <span className="font-mono">{orderId}</span>
                  </p>
                )}
                <p className="text-gray-700">
                  If money was debited from your account, it will be refunded within 5-7 business days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild>
                    <Link href="/donate">Try Again</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-500 to-amber-400 py-16 text-center">
        <Clock className="w-16 h-16 text-white mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Payment Processing</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Your payment is being processed. Please wait while we confirm your transaction.
        </p>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-amber-600 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Transaction Pending
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              {orderId && (
                <p className="text-sm text-gray-500">
                  Order ID: <span className="font-mono">{orderId}</span>
                </p>
              )}

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-amber-800 mb-2">What does this mean?</h3>
                <ul className="text-sm text-amber-700 space-y-2">
                  <li>• Your bank is processing the payment</li>
                  <li>• This usually resolves within a few minutes</li>
                  <li>• If money was debited, the status will update automatically</li>
                  <li>• You will receive an email once the payment is confirmed</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> If your payment is still pending after 60 minutes and money was debited,
                  please contact our support team with your Order ID.
                </p>
              </div>

              <Button
                onClick={checkStatus}
                disabled={checking}
                className="w-full sm:w-auto"
              >
                {checking ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Checking Status...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Check Status Again
                  </>
                )}
              </Button>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default function PendingPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-white items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    }>
      <PendingContent />
    </Suspense>
  );
}

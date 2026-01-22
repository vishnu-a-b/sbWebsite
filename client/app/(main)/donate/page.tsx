'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { Copy, Target, Heart } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Support Our Cause</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Our income is only from donations, not from services. Help us keep Shanthibhavan a "No-Bill" hospital.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
         
         {/* Introduction */}
         <div className="mb-8 md:mb-12 text-center space-y-4">
           <Heart className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto" />
           <h2 className="text-2xl md:text-3xl font-bold text-primary">A Light of Compassion</h2>
           <p className="text-gray-800 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
             Shanthibhavan runs entirely on the goodwill of generous hearts like yours. We do not charge for any of our services.
             From specialized medical care to daily food and accommodation for patients and bystanders, everything is free.
           </p>
           <div className="bg-secondary/30 border border-secondary p-6 rounded-lg mt-8">
             <h3 className="text-xl font-bold flex items-center justify-center gap-2 mb-2 text-primary">
               <Target className="w-5 h-5" /> Our Dream
             </h3>
             <p className="text-primary/80">
               We are looking for public support to fulfill our dream of becoming a <strong>General Hospital</strong>.
               This will allow us to provide emergency care, casualty, and other essential medical services to all people nearby.
             </p>
           </div>
         </div>

         {/* Donation Options */}
         <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Bank Transfer */}
            <Card>
              <CardHeader>
                <CardTitle>Bank Transfer (NEFT/RTGS)</CardTitle>
                <CardDescription>Direct transfer to our hospital account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="bg-muted p-4 rounded-md space-y-2 text-sm">
                   <div className="flex justify-between">
                     <span className="font-semibold">Account Name:</span>
                     <span>Shanthibhavan Palliative Hospital</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="font-semibold">Bank:</span>
                     <span>State Bank of India</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="font-semibold">Account Number:</span>
                     <span className="font-mono">123456789012</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="font-semibold">IFSC Code:</span>
                     <span className="font-mono">SBIN0001234</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="font-semibold">Branch:</span>
                     <span>Vattappara, Thiruvananthapuram</span>
                   </div>
                 </div>
                 <Button variant="outline" className="w-full" onClick={() => alert("Copied details!")}>
                   <Copy className="w-4 h-4 mr-2" /> Copy Details
                 </Button>
              </CardContent>
            </Card>

            {/* UPI / QR */}
            <Card>
              <CardHeader>
                <CardTitle>UPI / Scan to Pay</CardTitle>
                <CardDescription>Instant donation via GPay, PhonePe, Paytm.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                 <div className="w-48 h-48 bg-gradient-to-br from-secondary/50 to-secondary flex flex-col items-center justify-center rounded-lg border-2 border-secondary shadow-inner">
                    <div className="text-6xl mb-2">📱</div>
                    <span className="text-primary font-semibold text-sm">Scan to Donate</span>
                    <span className="text-xs text-primary/70">UPI QR Code</span>
                 </div>
                 <p className="text-sm font-mono bg-secondary/30 text-primary px-4 py-2 rounded-md border border-secondary">shanthibhavan@sbi</p>
              </CardContent>
            </Card>
         </div>

         {/* Benevity cta */}
         <div className="bg-secondary/20 border border-secondary/50 p-8 rounded-xl text-center space-y-4">
           <h3 className="text-xl font-bold text-primary">Corporate Giving?</h3>
           <p className="text-primary/80">
             We are registered on Benevity! If your company uses Benevity for corporate giving or matching donations, you can support us there.
           </p>
           <Button asChild className="bg-primary hover:bg-primary/90">
             <Link href="/benevity">Learn About Benevity</Link>
           </Button>
         </div>
        </div>
      </section>
    </div>
  );
}

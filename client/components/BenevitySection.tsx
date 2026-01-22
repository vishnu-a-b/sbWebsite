import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Heart, ShieldCheck, Globe } from 'lucide-react';

export default function BenevitySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-red-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
              <Heart className="h-4 w-4" />
              <span>Corporate Giving</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
              Support Us Through Benevity
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Shanthibhavan Palliative Hospital is a registered charity on the Benevity platform. 
              If your company uses Benevity for workplace giving, you can double your impact through corporate matching.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                  <ShieldCheck className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Verified Charity</h4>
                  <p className="text-sm text-gray-500">Validated through global standards of accountability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Globe className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Global Standards</h4>
                  <p className="text-sm text-gray-500">Instant tax receipts and transparent reporting.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/benevity">Learn More About Benevity</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://causes.benevity.org/" target="_blank">Find Us on Portal</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-[4/3] max-w-xl mx-auto">
             <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105" />
             <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Benevity Support"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shanthibhavan Palliative Hospital - India's First No-Bill Palliative Hospital",
  description: "Shanthibhavan is India's first palliative hospital providing completely free care. 49-bed facility, free dialysis, 24/7 home care, ambulance services, and more. Located in Thiruvananthapuram, Kerala.",
  keywords: ["palliative care", "free hospital", "no-bill hospital", "Thiruvananthapuram", "Kerala", "free dialysis", "home care", "hospice care", "charitable hospital"],
  openGraph: {
    title: "Shanthibhavan Palliative Hospital",
    description: "India's First No-Bill Palliative Hospital - Providing free compassionate care to those in need",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

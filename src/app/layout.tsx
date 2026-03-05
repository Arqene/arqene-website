// app/layout.tsx
import "./globals.css";
import Providers from "./providers";
import { LenisProvider } from "@/components/lenisProvider";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ImageKitProvider } from "@imagekit/next";
import WhatsAppButton from "@/components/global/WhatsappButton";
import ConnectToggle from "@/components/global/ConnectToggle";
import RouteLoader from "@/components/global/RouteLoader";

import { Questrial } from "next/font/google";
import StructuredData from "@/components/Seo/StructuredData";




const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://arqene.com"),
  title: {
    default: "Arqene | Timeless Luxury Furniture",
    template: "%s | Arqene",
  },
  description:
    "Arqene creates timeless luxury furniture crafted with precision and architectural design thinking. Discover bespoke furniture, craftsmanship, and modern heirloom pieces.",
  keywords: [
    "luxury furniture",
    "bespoke furniture",
    "architectural furniture",
    "custom furniture India",
    "Arqene furniture",
  ],
  openGraph: {
    title: "Arqene | Timeless Luxury Furniture",
    description:
      "Luxury handcrafted furniture built with architectural precision and timeless design.",
    url: "https://arqene.com",
    siteName: "Arqene",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${questrial.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <ImageKitProvider
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
          >
            <LenisProvider>
              <StructuredData/>
              {/* <RouteLoader/> */}
              {children}

              <WhatsAppButton />
              <ConnectToggle />
              <Toaster position="top-right" />
            </LenisProvider>
          </ImageKitProvider>
        </Providers>
      </body>
    </html>
  );
}
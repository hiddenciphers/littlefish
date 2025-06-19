// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LittleFish Accounting | Franchise Opportunities",
  description:
    "Join LittleFish Accounting's franchise network. Become your own boss with full support and national brand power.",
  keywords: [
    "Accounting Franchise",
    "Franchise Opportunities",
    "Start Your Own Practice",
    "Small Business Accountant",
    "Tamworth Accounting",
    "Yamba Accounting",
    "Tax Return Help",
    "LittleFish Accounting",
  ],
  authors: [{ name: "LittleFish Accounting" }],
  openGraph: {
    title: "LittleFish Accounting",
    description:
      "Become a partner in Australia's most exciting accounting franchise. We empower local accountants with national brand strength.",
    url: "https://www.littlefishaccounting.com.au",
    siteName: "LittleFish Accounting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LittleFish Accounting Franchise",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://www.littlefishaccounting.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link rel="canonical" href="https://www.littlefishaccounting.com.au" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I start an accounting franchise with LittleFish?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Click 'Enquire Now' to speak with our team and explore available regions. We provide full training, tools, and support to help you succeed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What locations does LittleFish Accounting currently serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our primary offices are in Tamworth and Yamba, with new franchise territories opening across Australia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to be a registered tax agent to join?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you'll need to be a registered tax agent or working toward registration. We help new partners meet ASIC and TPB requirements.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "LittleFish Accounting - Tamworth",
                image: "https://www.littlefishaccounting.com.au/og-image.jpg",
                telephone: "0401-721-723",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Level 1, 507 Peel Street",
                  postalCode: "2340",
                  addressLocality: "Tamworth",
                  addressRegion: "NSW",
                  addressCountry: "AU",
                },
                url: "https://www.littlefishaccounting.com.au",
                priceRange: "$$",
                description:
                  "Tax and accounting services tailored for individuals and small businesses in Tamworth. Book a free consultation today.",
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "LittleFish Accounting - Yamba",
                image: "https://www.littlefishaccounting.com.au/og-image.jpg",
                telephone: "0401-721-723",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Example Street",
                  postalCode: "2464",
                  addressLocality: "Yamba",
                  addressRegion: "NSW",
                  addressCountry: "AU",
                },
                url: "https://www.littlefishaccounting.com.au",
                priceRange: "$$",
                description:
                  "Yamba's trusted accounting partner for tax returns, BAS lodgements, and franchisee opportunities.",
              },
            ]),
          }}
        />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

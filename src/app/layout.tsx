import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Footer from "./components/Common/modules/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://runway.globaldesignernetwork.com"),
  title: "Realm Runways",
  description:
    "A showcase of digital & IRL models across immersive environments repping indie web3 fashion collections from the most trailblazing new labels.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords:
    "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, digitalax.xyz, f3manifesto.xyz, Women, Life, Freedom.",
  twitter: {
    card: "summary_large_image",
    site: "@digitalax_",
    title: "Realm Runways",
    description:
      "A showcase of digital & IRL models across immersive environments repping indie web3 fashion collections from the most trailblazing new labels.",
    images: [
      {
        url: "/images/runway-midnight-room.png",
        width: 1200,
        height: 630,
        alt: "Realm Runways - Web3 Fashion Showcase",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://runway.globaldesignernetwork.com",
    siteName: "Realm Runways",
    title: "Realm Runways",
    description:
      "A showcase of digital & IRL models across immersive environments repping indie web3 fashion collections from the most trailblazing new labels.",
    images: [
      {
        url: "/images/runway-midnight-room.png",
        width: 1200,
        height: 630,
        alt: "Realm Runways - Web3 Fashion Showcase",
      },
    ],
  },
  alternates: {
    canonical: "https://runway.globaldesignernetwork.com",
    languages: {
      en: "https://runway.globaldesignernetwork.com/en",
      es: "https://runway.globaldesignernetwork.com/es",
      pt: "https://runway.globaldesignernetwork.com/pt",
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://runway.globaldesignernetwork.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Realm Runways",
              url: "https://runway.globaldesignernetwork.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://runway.globaldesignernetwork.com/images/realm.png",
                width: 1200,
                height: 630,
                caption: "Realm Runway Logo - Web3 Fashion",
              },
              founder: {
                "@type": "Person",
                name: "Emma-Jane MacKinnon-Lee",
                url: "https://emmajanemackinnonlee.com/",
                sameAs: [
                  "https://emmajanemackinnonlee.com/",
                  "https://emmajanemackinnon.com/",
                  "https://emmajanemackinnonlee.xyz/",
                  "https://emmajanemackinnonlee.net/",
                  "https://emmajanemackinnonlee.ai/",
                  "https://emmajanemackinnonlee.org/",
                  "https://emmajanemackinnonlee.dev/",
                  "https://emmajanemackinnonlee.info/",
                  "https://emmajanemackinnonlee-f3manifesto.com/",
                  "https://emmajanemackinnonlee-digitalax.com/",
                  "https://emmajanemackinnonlee-web3fashion.com/",
                  "https://icoinedweb3fashion.com/",
                  "https://syntheticfutures.xyz/",
                  "https://web3fashion.xyz/",
                  "https://emancipa.xyz/",
                  "https://highlangu.com/",
                  "https://digitalax.xyz/",
                  "https://cc0web3fashion.com/",
                  "https://cc0web3.com/",
                  "https://cuntism.net/",
                  "https://dhawu.com/",
                  "https://gms.globaldesignernetwork.com/",
                  "https://globaldesignernetwork.com/",
                  "https://casadeespejos.com/",
                  "https://emancipa.net/",
                  "https://dhawu.emancipa.xyz/",
                  "https://highlangu.emancipa.xyz/",
                  "https://twitter.com/emmajane1313",
                  "https://medium.com/@casadeespejos",
                  "https://www.flickr.com/photos/emmajanemackinnonlee/",
                ],
              },
              sameAs: [
                "https://twitter.com/digitalax_",
                "https://lens.xyz/u/globaldesignernetwork",
              ],
              description:
                "A showcase of digital & IRL models across immersive environments repping indie web3 fashion collections from the most trailblazing new labels.",
              keywords:
                "web3 fashion, digitalax, CC0 fashion, indie designers, blockchain fashion, decentralized fashion, smart contracts fashion",
            }),
          }}
        />
      </head>
      <body className="selection:bg-red-700">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

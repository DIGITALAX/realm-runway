import Entry from "../components/Common/modules/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = "https://runway.globaldesignernetwork.com";

  const titles: Record<string, string> = {
    en: "Realm Runway | W3FW Rogue Forks",
    es: "Realm Runway | Modelos Indie Punk - Intensamente DIY, CC0 Radical",
    pt: "Realm Runway | Modelos Indie Punk - Intensamente DIY, CC0 Radical",
  };

  const descriptions: Record<string, string> = {
    en: "All the rogue W3FW forks. The makeup artist learns color theory from CUDA documentation. Three musicians sample GPU fan noise. Hair styled with the same physics engine we use for fabric simulation. Models as transmission. If you know, you're already here.",
    es: "Todas las bifurcaciones rebeldes de W3FW. El maquillador aprende teoría del color de la documentación CUDA. Tres músicos samplean el ruido del ventilador de la GPU. Cabello peinado con el mismo motor de física que usamos para la simulación de telas. Modelos como transmisión. Si lo sabes, ya estás aquí.",
    pt: "Todas as bifurcações rebeldes do W3FW. O maquiador aprende teoria das cores da documentação CUDA. Três músicos sampleiam o ruído da ventoinha da GPU. Cabelo penteado com o mesmo motor de física que usamos para simulação de tecidos. Modelos como transmissão. Se você sabe, já está aqui.",
  };

  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
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
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        pt: `${baseUrl}/pt`,
      },
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `${baseUrl}/${lang}`,
      siteName: "Realm Runways",
      locale: lang === "en" ? "en_US" : lang === "es" ? "es_ES" : "pt_BR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/runway-midnight-room.png`,
          width: 1200,
          height: 630,
          alt: "Realm Runways - Web3 Fashion Showcase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@digitalax_",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: [
        {
          url: `${baseUrl}/images/runway-midnight-room.png`,
          width: 1200,
          height: 630,
          alt: "Realm Runways - Web3 Fashion Showcase",
        },
      ],
    },
  };
}

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <Entry dict={dict} />;
}

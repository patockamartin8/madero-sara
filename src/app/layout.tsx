import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const siteUrl = "https://masazesara.cz";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Masáže Jaroměřice nad Rokytnou | Relaxační masáž - Masáže Sára",
        template: "%s | Masáže Sára",
    },
    description:
        "Masáže Sára v Jaroměřicích nad Rokytnou. Relaxační masáž, maderoterapie a úleva od bolesti zad. Profesionální péče v příjemném prostředí.",
    keywords: [
        "masáže Jaroměřice nad Rokytnou",
        "relaxační masáž",
        "masáže Sára",
        "bolest zad",
        "maderoterapie",
        "masáže Třebíč",
    ],
    openGraph: {
        type: "website",
        locale: "cs_CZ",
        url: siteUrl,
        siteName: "Masáže Sára",
        title: "Masáže Jaroměřice nad Rokytnou | Relaxační masáž - Masáže Sára",
        description:
            "Masáže Sára v Jaroměřicích nad Rokytnou. Relaxační masáž, maderoterapie a úleva od bolesti zad.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Masáže Sára - relaxační masáže a maderoterapie v Jaroměřicích nad Rokytnou",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Masáže Sára | Relaxační masáž Jaroměřice nad Rokytnou",
        description: "Profesionální masáže, maderoterapie a relaxace v příjemném prostředí.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs" className="scroll-smooth">
            <body
                className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-cream text-wood-dark`}
            >
                <StructuredData />
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

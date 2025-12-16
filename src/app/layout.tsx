import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Masáže a Maderoterapie Sára | Pánské Holičství",
    description: "Profesionální masáže, maderoterapie a pánské stříhání v Jaroměřicích nad Rokytnou. Relaxace v příjemném dřevěném prostředí.",
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
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

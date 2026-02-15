import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Masáže Jaroměřice nad Rokytnou | Relaxační masáž - Masáže Sára",
    description:
        "Masáže Sára v Jaroměřicích nad Rokytnou. Relaxační masáž, maderoterapie a úleva od bolesti zad. Profesionální péče v příjemném prostředí.",
    openGraph: {
        title: "Masáže Jaroměřice nad Rokytnou | Relaxační masáž - Masáže Sára",
        description:
            "Masáže Sára v Jaroměřicích nad Rokytnou. Relaxační masáž, maderoterapie a úleva od bolesti zad.",
    },
};

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Contact />
        </>
    );
}

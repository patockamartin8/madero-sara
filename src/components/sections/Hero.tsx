"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#3E2723]">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#3E2723]/60 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-[url('/images/IMG_5429.JPG.png')] bg-cover bg-center"
            ></div>

            <div className="container relative z-20 px-6 text-center text-cream">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                        Relaxace a styl <br />
                        <span className="text-wood-light italic">pod jednou střechou</span>
                    </h1>
                    <p className="text-lg md:text-xl text-wood-light/90 max-w-2xl mx-auto mb-10">
                        Profesionální maderoterapie a precizní stříhání pro celou rodinu.
                        Navštivte nás v dřevěném ráji v Jaroměřicích nad Rokytnou.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#masaze"
                            className="bg-wood-light text-wood-dark px-8 py-3 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105"
                        >
                            Maderoterapie
                        </Link>
                        <Link
                            href="#holicstvi"
                            className="border-2 border-wood-light text-wood-light px-8 py-3 rounded-full font-semibold hover:bg-wood-light hover:text-wood-dark transition-all transform hover:scale-105"
                        >
                            Kadeřnictví
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

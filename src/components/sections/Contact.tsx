import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="kontakt" className="py-20 bg-wood-dark text-cream scroll-mt-10">
            <div className="container mx-auto px-6">
                <SectionHeading title="Kde nás najdete" light />

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-8">Kontaktní údaje</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-wood-light shrink-0 mt-1" size={24} />
                                <div>
                                    <p className="font-bold text-lg">Adresa</p>
                                    <p className="text-wood-light">Březinova 869</p>
                                    <p className="text-wood-light">675 51 Jaroměřice nad Rokytnou</p>
                                    <p className="text-sm mt-2 text-wood-light/70 bg-white/5 inline-block px-3 py-1 rounded">Parkování u domu zdarma</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-wood-light shrink-0 mt-1" size={24} />
                                <div>
                                    <p className="font-bold text-lg">Telefon</p>
                                    <a href="tel:+420775442669" className="text-wood-light hover:text-white transition-colors text-lg">
                                        +420 775 442 669
                                    </a>
                                    <p className="text-sm opacity-60">Objednávky (Masáže i Stříhání)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-wood-light shrink-0 mt-1" size={24} />
                                <div>
                                    <p className="font-bold text-lg">E-mail</p>
                                    <a href="mailto:maderosara@seznam.cz" className="text-wood-light hover:text-white transition-colors text-lg">
                                        maderosara@seznam.cz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full bg-wood-light/10 rounded-2xl overflow-hidden border border-wood-light/20 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=49.099135815644864,15.886416741714585&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Mapa studia"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                        {/* Note: Coordinates are approximated based on address. */}
                    </div>
                </div>
            </div>
        </section>
    );
}

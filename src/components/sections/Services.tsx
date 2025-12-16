import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, User, Scissors } from "lucide-react";
import NextImage from "next/image";

export function Services() {
    return (
        <div className="py-20">

            {/* Maderoterapie Section */}
            <section id="masaze" className="container mx-auto px-6 mb-24 scroll-mt-24">
                <SectionHeading
                    title="Masáže a Maderoterapie"
                    subtitle="Objevte sílu dřeva v boji proti celulitidě a dopřejte svému tělu zasloužený relax."
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-wood-light/30">
                        <h3 className="text-2xl font-serif font-bold text-wood-dark mb-6">Maderoterapie Sára</h3>
                        <ul className="space-y-4 text-wood-medium">
                            <li className="flex items-start gap-3">
                                <Check className="text-wood-dark shrink-0 mt-1" size={20} />
                                <span>Odstranění celulitidy a toxinů z těla</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-wood-dark shrink-0 mt-1" size={20} />
                                <span>Tvarování postavy a zpevnění kůže</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-wood-dark shrink-0 mt-1" size={20} />
                                <span>Rozproudění lymfatického systému</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-wood-dark shrink-0 mt-1" size={20} />
                                <span>Relaxace v příjemném dřevěném prostředí</span>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-wood-light/30">
                            <p className="text-sm text-wood-medium mb-4">Objednání možné také přes Notino:</p>
                            <a
                                href="https://www.notino.cz/salony/masaze-a-maderoterapie-sara_1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-wood-dark text-wood-light py-3 rounded-lg hover:bg-wood-medium transition-colors"
                            >
                                Rezervovat Maderoterapii
                            </a>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <NextImage
                            src="/images/maderotherapy.png"
                            alt="Maderoterapie relaxace"
                            fill
                            className="object-cover"
                        />
                        <div className="bg-black/30 w-full h-full absolute inset-0"></div>
                    </div>
                </div>


                {/* Price List Section */}
                <div className="mt-24 grid md:grid-cols-2 gap-16">
                    {/* Klasické masáže */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-wood-dark mb-8 border-b-2 border-wood-light/50 pb-2 inline-block">Klasické masáže</h3>
                        <div className="space-y-8">
                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Klasická masáž celého těla</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">690 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3">Plošný tlak maséra, kterým se zpracovává celé tělo.</p>
                            </div>

                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Klasická masáž zad a šíje</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">600 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3">Plošný tlak maséra, kterým se zpracovávají záda a šíje.</p>
                            </div>

                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Klasická masáž šíje</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">30m</span>
                                        <span className="text-lg font-bold text-wood-dark">300 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3 text-pretty">Stres se nejčastěji hromadí kolem krku a ramen. Nejenže vám může pomoci od ztuhlých svalů, ale i od bolesti hlavy spojené s napětím.</p>
                            </div>
                        </div>
                    </div>

                    {/* Maderoterapie */}
                    <div id="maderoterapie" className="scroll-mt-28">
                        <h3 className="text-2xl font-serif font-bold text-wood-dark mb-8 border-b-2 border-wood-light/50 pb-2 inline-block">Maderoterapie</h3>
                        <div className="space-y-8">
                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Kombinovaná maderoterapie</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">790 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3 text-pretty">Kombinace klasické a brazilské maderoterapie. Provádí se zvony a válečky pro odstranění celulitidy.</p>
                            </div>

                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Brazilská maderoterapie</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">790 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3 text-pretty">Speciální technika s vakuovými zvony, která napomáhá ke tvarování postavy a stimulaci lymfatického systému.</p>
                            </div>

                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Maderoterapie celého těla</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">690 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3">Speciální masážní technika napomáhající tvarování postavy.</p>
                            </div>
                        </div>
                    </div>

                    {/* Relaxační masáže */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-wood-dark mb-8 border-b-2 border-wood-light/50 pb-2 inline-block">Relaxační masáže</h3>
                        <div className="space-y-8">
                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Masáž lávovými kameny</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">1h</span>
                                        <span className="text-lg font-bold text-wood-dark">700 Kč</span>
                                    </div>
                                </div>
                                <p className="text-wood-medium mb-3">Kombinace klasické masáže a přikládání horkých lávových kamenů.</p>
                            </div>
                        </div>
                    </div>

                    {/* Tradiční čínské masáže */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-wood-dark mb-8 border-b-2 border-wood-light/50 pb-2 inline-block">Tradiční čínské masáže</h3>
                        <div className="space-y-8">
                            <div className="group hover:bg-white hover:shadow-sm p-4 -mx-4 rounded-xl transition-all">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-wood-dark">Čínská masáž hlavy a šíje</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-wood-medium">30m</span>
                                        <span className="text-lg font-bold text-wood-dark">300 Kč</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-wood-medium mb-4 italic">Možnost platby v hotovosti nebo přes QR kód.</p>
                    <a
                        href="https://www.notino.cz/salony/masaze-a-maderoterapie-sara_1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-4 bg-wood-dark text-wood-light text-lg font-bold rounded-lg hover:bg-wood-medium transition-colors shadow-lg"
                    >
                        Rezervovat termín
                    </a>
                </div>
            </section >

            {/* Barber Section */}
            < section id="holicstvi" className="bg-wood-dark/5 py-20 scroll-mt-24" >
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="Pánské a Dětské Stříhání"
                        subtitle="Precizní střihy pro pány a malé gentlemany ve stejném stylovém prostředí."
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-wood-light">
                            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-wood-light/30 rounded-full flex items-center justify-center text-wood-dark">
                                            <Scissors size={24} />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-wood-dark">Ceník služeb</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b border-dashed border-wood-light pb-4">
                                            <span className="font-medium text-lg text-wood-dark">Pánský střih</span>
                                            <span className="font-bold text-xl text-wood-dark">250 Kč</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-dashed border-wood-light pb-4">
                                            <span className="font-medium text-lg text-wood-dark">Dětský střih</span>
                                            <span className="font-bold text-xl text-wood-dark">180 Kč</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-dashed border-wood-light pb-4">
                                            <span className="font-medium text-lg text-wood-dark">Pánský + Dětský střih</span>
                                            <div className="text-right">
                                                <span className="font-bold text-xl text-wood-dark block">390 Kč</span>
                                                <span className="text-sm text-green-600 font-medium">Výhodná cena</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-wood-medium text-sm italic">
                                        Možnost platby v hotovosti nebo přes QR kód.
                                    </p>
                                </div>

                                <div className="bg-wood-dark text-cream p-8 rounded-xl min-w-[300px] md:min-w-[350px] text-center">
                                    <h4 className="text-xl font-bold mb-4 font-serif">Chci se ostříhat</h4>
                                    <p className="mb-6 opacity-90">Objednávky přijímáme telefonicky nebo e-mailem.</p>
                                    <a href="tel:+420775442669" className="block w-full bg-wood-light text-wood-dark font-bold py-3 rounded mb-3 hover:bg-white transition-colors">
                                        +420 775 442 669
                                    </a>
                                    <a href="mailto:maderosara@seznam.cz" className="block w-full border border-wood-light text-wood-light font-bold py-3 rounded hover:bg-wood-light hover:text-wood-dark transition-colors">
                                        maderosara@seznam.cz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
}

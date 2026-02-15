export function Footer() {
    return (
        <footer className="bg-wood-dark text-cream py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-serif font-bold mb-4">Masáže a Maderoterapie Sára</h2>
                    <p className="text-wood-light mb-2">Březinova 869</p>
                    <p className="text-wood-light mb-2">Jaroměřice nad Rokytnou, 675 51</p>
                    <p className="text-wood-light mt-4 text-sm opacity-80">Parkování u domu zdarma.</p>
                </div>
                <div className="md:text-right">
                    <h2 className="text-xl font-serif font-bold mb-4">Kontakt</h2>
                    <p className="text-wood-light mb-2">
                        <a href="tel:+420775442669" className="hover:text-white transition-colors" aria-label="Zavolat na +420 775 442 669">
                            +420 775 442 669
                        </a>
                    </p>
                    <p className="text-wood-light mb-2">
                        <a href="mailto:maderosara@seznam.cz" className="hover:text-white transition-colors" aria-label="Napsat e-mail na maderosara@seznam.cz">
                            maderosara@seznam.cz
                        </a>
                    </p>
                    <div className="mt-4">
                        <a
                            href="https://www.notino.cz/salony/masaze-a-maderoterapie-sara_1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-wood-light px-4 py-2 rounded-full hover:bg-wood-light hover:text-wood-dark transition-all text-sm"
                            aria-label="Rezervovat termín na Notino"
                        >
                            Rezervace na Notino
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-wood-medium/30 text-center text-sm text-wood-light/60">
                <p>&copy; {new Date().getFullYear()} Sára Patočková. Všechna práva vyhrazena.</p>
            </div>
        </footer>
    );
}

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MassageTherapy",
        "@id": "https://masazesara.cz/#business",
        name: "Masáže Sára",
        alternateName: "Masáže a Maderoterapie Sára",
        description:
            "Profesionální masáže, maderoterapie a relaxační masáže v Jaroměřicích nad Rokytnou. Úleva od bolesti zad, celulitidy a stresu.",
        url: "https://masazesara.cz",
        telephone: "+420775442669",
        email: "maderosara@seznam.cz",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Březinova 869",
            addressLocality: "Jaroměřice nad Rokytnou",
            postalCode: "675 51",
            addressCountry: "CZ",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 49.099135815644864,
            longitude: 15.886416741714585,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00",
            },
        ],
        priceRange: "$$",
        image: "https://masazesara.cz/images/og-image.jpg",
        sameAs: ["https://www.notino.cz/salony/masaze-a-maderoterapie-sara_1/"],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

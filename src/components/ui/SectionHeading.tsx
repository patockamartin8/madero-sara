interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

export function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
    return (
        <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-cream' : 'text-wood-dark'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-wood-light' : 'text-wood-medium'}`}>
                    {subtitle}
                </p>
            )}
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-wood-light' : 'bg-wood-dark'}`} />
        </div>
    );
}

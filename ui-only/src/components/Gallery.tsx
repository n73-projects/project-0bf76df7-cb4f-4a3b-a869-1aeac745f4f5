export function Gallery() {
  const tattooStyles = [
    { emoji: "🐉", title: "Traditional", description: "Bold lines & vibrant colors" },
    { emoji: "🌸", title: "Japanese", description: "Cultural artistry & symbolism" },
    { emoji: "⚡", title: "Realistic", description: "Lifelike portraits & details" },
    { emoji: "🔮", title: "Geometric", description: "Sacred patterns & shapes" },
    { emoji: "💀", title: "Black & Gray", description: "Classic shading techniques" },
    { emoji: "🌊", title: "Watercolor", description: "Artistic & flowing designs" },
  ];

  return (
    <section className="relative py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Gallery</span> & Styles
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different tattoo styles and find the perfect look for your next piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooStyles.map((style, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg p-8 border border-border card-glow hover:border-primary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-5xl">{style.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {style.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-2 right-2 w-12 h-px bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 h-12 w-px bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

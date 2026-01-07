export function About() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-primary">Art</span> That Lasts Forever
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience in the tattoo industry, I specialize
              in creating unique, custom pieces that tell your story. Every design
              is carefully crafted to reflect your vision and personality.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Custom Designs</h3>
                  <p className="text-muted-foreground">Personalized artwork tailored to your vision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Studio</h3>
                  <p className="text-muted-foreground">Clean, safe, and comfortable environment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">10+ years of tattoo artistry experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder with neon border */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 card-glow bg-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🎨</div>
                  <p className="text-sm text-muted-foreground">Artist at Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

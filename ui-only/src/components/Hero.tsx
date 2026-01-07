import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.65_0.28_300_/_0.15),_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Main heading with neon effect */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                ZOLAP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
              Ink Your Story
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Where art meets skin. Custom tattoo designs crafted with precision,
            passion, and years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="neon"
              size="xl"
              className="min-w-[200px]"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="min-w-[200px]"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}

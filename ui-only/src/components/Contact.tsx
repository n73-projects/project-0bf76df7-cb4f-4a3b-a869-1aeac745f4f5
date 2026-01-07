import { Button } from "./ui/button";

export function Contact() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch to discuss your next tattoo
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12 border border-border card-glow">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground font-medium">hello@zolap.ink</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">Downtown Studio<br/>123 Ink Street</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Mon - Fri: 12pm - 8pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  Book your consultation today and let's create something amazing.
                </p>
                <p className="text-muted-foreground">
                  Walk-ins welcome, but appointments are recommended for custom work.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  variant="neon"
                  size="lg"
                  className="w-full"
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </div>

              {/* Social links */}
              <div className="flex gap-4 justify-center pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Zolap Tattoo Studio. All rights reserved.
        </p>
      </div>
    </section>
  );
}

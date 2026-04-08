import { Link } from "react-router-dom";
import { ArrowRight, Zap, Palette, Globe } from "lucide-react";

const Index = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            Creative Digital Agency
          </span>
          <h1 className="text-5xl sm:text-7xl font-heading font-bold leading-tight mb-6 animate-slide-up">
            We build
            <br />
            <span className="text-gradient">digital fire.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            From stunning websites to powerful applications — we turn your vision into a blazing digital reality.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-hero-gradient text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl font-medium hover:bg-muted transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features strip */}
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Lightning Fast", desc: "Blazing performance baked into every project." },
          { icon: Palette, title: "Pixel Perfect", desc: "Every detail crafted with precision and care." },
          { icon: Globe, title: "Global Scale", desc: "Built to grow with your audience worldwide." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">{title}</h3>
              <p className="text-secondary-foreground/70 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;

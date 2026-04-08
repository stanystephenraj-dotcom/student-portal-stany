import { Users, Target, Award } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "12", label: "Team Members" },
];

const About = () => (
  <div className="pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
          Fueled by <span className="text-gradient">passion</span>
        </h1>
        <p className="text-muted-foreground">
          We're a team of designers, developers, and dreamers who believe in the power of digital transformation.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-card rounded-2xl p-6 text-center border border-border">
            <div className="text-3xl font-heading font-bold text-gradient mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: "People First", desc: "We put people — clients and team — at the heart of everything." },
          { icon: Target, title: "Goal Oriented", desc: "Every pixel and line of code serves a business purpose." },
          { icon: Award, title: "Quality Obsessed", desc: "We don't ship until it's something we're truly proud of." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;

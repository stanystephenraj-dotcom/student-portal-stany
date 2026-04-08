import { Code, Smartphone, BarChart3, Shield, Cloud, Layers } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Custom websites and web applications built with modern frameworks.", price: "From $2,999" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile apps for iOS and Android.", price: "From $4,999" },
  { icon: BarChart3, title: "Data Analytics", desc: "Turn your data into actionable insights with custom dashboards.", price: "From $1,999" },
  { icon: Shield, title: "Cybersecurity", desc: "Protect your digital assets with enterprise-grade security.", price: "From $1,499" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure that grows with your business.", price: "From $999" },
  { icon: Layers, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that users love to interact with.", price: "From $1,999" },
];

const Services = () => (
  <div className="pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
          What we <span className="text-gradient">offer</span>
        </h1>
        <p className="text-muted-foreground">
          End-to-end digital solutions tailored to your unique needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, price }, i) => (
          <div
            key={title}
            className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 bg-hero-gradient rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{desc}</p>
            <span className="text-sm font-semibold text-primary">{price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;

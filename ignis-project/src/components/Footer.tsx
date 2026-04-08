import { Flame } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-heading font-bold text-lg">
          <Flame className="h-5 w-5 text-primary" />
          Ignis Agency
        </div>
        <p className="text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Ignis. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from "react";
import { postContact } from "@/lib/db";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("All fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    postContact(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-12 min-h-screen flex items-center justify-center">
        <div className="text-center animate-slide-up">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-bold mb-2">Thank you!</h2>
          <p className="text-muted-foreground">We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-gradient">talk</span>
          </h1>
          <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5 animate-slide-up" style={{ animationDelay: "0.15s" }}>
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-xl">{error}</div>
          )}
          {[
            { key: "name", label: "Full Name", type: "text" },
            { key: "email", label: "Email Address", type: "email" },
            { key: "subject", label: "Subject", type: "text" },
          ].map(({ key, label, type }) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-1.5">{label}</label>
              <input
                type={type}
                value={(form as any)[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder={label}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-hero-gradient text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

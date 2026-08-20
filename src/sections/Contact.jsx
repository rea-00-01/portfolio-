import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const items = [
    { label: "GitHub", href: profile.links.github },
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "Instagram", href: profile.links.instagram },
    { label: "Resume (PDF)", href: profile.links.resume },
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "Phone", href: `tel:${profile.phone}` },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profile.contactFormEndpoint.includes("YOUR_FORM_ID")) {
      // Endpoint hasn't been configured yet — fail loudly instead of
      // pretending the message sent. See the TODO in src/data/portfolio.js.
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(profile.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-6 px-6 md:px-16 bg-dustyrose/30 flex items-center justify-center min-h-screen"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-display font-semibold mb-12 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-ivory/40 backdrop-blur-md rounded-card p-8 shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-6 text-ink">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-card bg-ivory/60 text-ink placeholder-ink-soft/50 border border-ink/10 focus:outline-none focus:border-ink/30 focus:bg-ivory transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-card bg-ivory/60 text-ink placeholder-ink-soft/50 border border-ink/10 focus:outline-none focus:border-ink/30 focus:bg-ivory transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-card bg-ivory/60 text-ink placeholder-ink-soft/50 border border-ink/10 focus:outline-none focus:border-ink/30 focus:bg-ivory transition-all resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  className="w-full px-6 py-2.5 rounded-card bg-sage text-ink font-medium hover:bg-sage/80 transition-colors duration-200 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                  <p className="text-sm text-ink-soft text-center">
                    Thanks — your message is on its way!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-dustyrose text-center">
                    Couldn't send that — try the direct email link instead, or try again shortly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold mb-6 text-ink">Contact Information</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    download={item.href.endsWith(".pdf") ? "Riya_Kanwar_Resume.pdf" : undefined}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    className="block px-6 py-3 rounded-card bg-ivory/40 backdrop-blur-md text-ink font-medium hover:bg-ivory/70 transition-all duration-200 border border-ivory/50"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

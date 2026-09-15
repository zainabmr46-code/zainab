import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/content";
import { emailConfig, isEmailConfigured } from "../data/emailConfig";

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "That email doesn't look right.";
  if (!form.message.trim()) errors.message = "Say a little about what you need.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    try {
      if (isEmailConfigured) {
        // Real delivery via EmailJS — no backend required.
        // Fill in src/data/emailConfig.js to activate this path.
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          { name: form.name, email: form.email, message: form.message },
          { publicKey: emailConfig.publicKey }
        );
      } else {
        // Demo mode: no EmailJS credentials yet, so simulate the send.
        // See src/data/emailConfig.js to wire up real delivery.
        await new Promise((res) => setTimeout(res, 900));
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="pt-36 pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono text-xs text-signal mb-3">// contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl text-mist mb-6">
            Let's build something
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mist-dim max-w-xl mb-12">
            Fill out the form and I'll get back to you within a couple of days, or
            email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="text-signal-dim hover:text-signal">
              {profile.email}
            </a>
            .
          </p>
        </Reveal>

        {!isEmailConfigured && (
          <Reveal delay={0.12}>
            <p className="mb-8 font-mono text-xs text-molten bg-molten/10 border border-molten/25 rounded-lg px-4 py-2.5 inline-block">
              Demo mode: form validates but doesn't send yet — add your EmailJS
              keys to <code>src/data/emailConfig.js</code> to go live.
            </p>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-mist-dim mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full bg-ink-soft border rounded-xl px-4 py-3 text-mist outline-none transition-colors ${
                  errors.name ? "border-molten" : "border-black/8 focus:border-signal"
                }`}
                placeholder="Your name"
              />
              <AnimatePresence>
                {errors.name && <FieldError text={errors.name} />}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs text-mist-dim mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full bg-ink-soft border rounded-xl px-4 py-3 text-mist outline-none transition-colors ${
                  errors.email ? "border-molten" : "border-black/8 focus:border-signal"
                }`}
                placeholder="you@example.com"
              />
              <AnimatePresence>
                {errors.email && <FieldError text={errors.email} />}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-mist-dim mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`w-full bg-ink-soft border rounded-xl px-4 py-3 text-mist outline-none transition-colors resize-none ${
                  errors.message ? "border-molten" : "border-black/8 focus:border-signal"
                }`}
                placeholder="Tell me a bit about your project or role..."
              />
              <AnimatePresence>
                {errors.message && <FieldError text={errors.message} />}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-signal text-ink font-medium hover:shadow-glow transition-shadow disabled:opacity-60"
            >
              <Mail size={18} />
              {status === "sending" ? "Sending..." : "Send message"}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <StatusBanner
                  key="success"
                  icon={<CheckCircle2 size={18} />}
                  text="Message sent — I'll be in touch soon."
                  tone="success"
                />
              )}
              {status === "error" && (
                <StatusBanner
                  key="error"
                  icon={<AlertCircle size={18} />}
                  text="Something went wrong. Try the mailto link above instead."
                  tone="error"
                />
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 pt-10 border-t border-black/6 flex items-center justify-between flex-wrap gap-6">
            <p className="font-mono text-xs text-mist-faint">Find me elsewhere</p>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FieldError({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      className="mt-2 text-xs text-molten font-mono"
    >
      {text}
    </motion.p>
  );
}

function StatusBanner({ icon, text, tone }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 font-mono text-sm ${
        tone === "success"
          ? "bg-signal/10 border border-signal/30 text-signal-dim"
          : "bg-molten/10 border border-molten/30 text-molten"
      }`}
    >
      {icon}
      {text}
    </motion.div>
  );
}

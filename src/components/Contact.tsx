"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="py-24 relative bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
            Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:potemayur2826@email.com"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <a
              href="https://www.linkedin.com/in/mayur-pote-a4a420257"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Simple Contact Form Demo */}
          <div className="max-w-2xl mx-auto text-left bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const name = (formData.get('name') as string || '').trim();
                const email = (formData.get('email') as string || '').trim();
                const message = (formData.get('message') as string || '').trim();

                if (!message) {
                  alert('Please enter a message.');
                  return;
                }
                if (!email && !name) {
                  alert('Please provide your name or email so I can reply.');
                  return;
                }

                try {
                  (document.activeElement as HTMLElement)?.blur();
                  // show simple loading state
                  setLoading(true);

                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                  });

                  if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text || 'Server error');
                  }

                  alert('Message sent — thank you!');
                  form.reset();
                } catch (err: any) {
                  alert('Failed to send message: ' + (err?.message || err));
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">Your Name</label>
                  <input name="name" type="text" id="name" className="w-full bg-bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted">Your Email</label>
                  <input name="email" type="email" id="email" className="w-full bg-bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                <textarea name="message" id="message" rows={4} className="w-full bg-bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" disabled={loading} className={`w-full py-4 bg-white text-bg-darker font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-200'}`}>
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate fields before submission
    if (!formData.name.trim()) {
      setSubmitError("Name cannot be empty.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setSubmitError("Email must be a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setSubmitError("Subject cannot be empty.");
      return;
    }
    if (!formData.message.trim()) {
      setSubmitError("Message cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 7000);
      } else {
        console.error("API Error Response:", result);
        setSubmitError("Unable to send your message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setSubmitError("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Together"
          subtitle="Interested in collaborating on full-stack or DevOps projects, discussing software engineering opportunities, or just having a tech chat?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-sm space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-black text-black tracking-tight uppercase">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10 hover:border-black/25 transition-all duration-200">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-[11px] text-gray-600 uppercase font-bold">
                        Email
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-black break-all truncate">
                        {portfolioData.personal.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.email, "email")}
                    className="p-2 sm:p-2.5 rounded-lg bg-white border border-black/10 hover:bg-gray-100 text-gray-600 hover:text-black transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10 hover:border-black/25 transition-all duration-200">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-600 uppercase font-bold">
                        Phone
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-black">
                        {portfolioData.personal.phone}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                    className="p-2 sm:p-2.5 rounded-lg bg-white border border-black/10 hover:bg-gray-100 text-gray-600 hover:text-black transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-gray-600 uppercase font-bold">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-black">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">
                  Connect Online
                </p>
                <div className="flex gap-3">
                  <a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 text-xs font-bold text-black transition-colors min-h-[44px]"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 text-xs font-bold text-black transition-colors min-h-[44px]"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-sm space-y-4 sm:space-y-5"
            >
              <h3 className="text-lg sm:text-xl font-black text-black tracking-tight uppercase">
                Send a Message
              </h3>

              {isSubmitted && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10 text-black font-bold text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-black flex-shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 font-bold text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI / SWE Project Collaboration"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-black hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

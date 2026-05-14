import React, { useState } from "react";
import { profileData } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: Connect to Supabase
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-900/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Get In Touch" subtitle="Punya proyek menarik atau peluang kerja? Mari berdiskusi." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                  placeholder="Pesan Anda..."
                />
              </div>
              
              <Button type="submit" disabled={status === "loading"} className="mt-2">
                {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
              </Button>
              
              {status === "success" && (
                <p className="text-accent text-sm text-center mt-2">Pesan berhasil dikirim!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">Terjadi kesalahan. Silakan coba lagi.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Kontak Langsung</h3>
              <p className="text-slate-400 mb-6">
                Anda juga dapat menghubungi saya secara langsung melalui email atau WhatsApp.
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-accent">
                    <span className="text-lg">@</span>
                  </div>
                  {profileData.contact.email}
                </a>
                
                <a 
                  href={profileData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-accent">
                    <span className="text-lg">WA</span>
                  </div>
                  {profileData.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

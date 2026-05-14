import React from "react";
import { profileData } from "../../data/profile";
import * as Icons from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            Alfin<span className="text-accent">.</span>
          </span>
          <p className="text-sm text-slate-400 text-center md:text-left max-w-sm">
            Assistant Treasurer & Data Enthusiast yang berfokus pada otomatisasi sistem keuangan dan manajemen bisnis yang efisien.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            {profileData.contact.socials.map((social) => {
              const Icon = (Icons as any)[social.platform] || Icons.Link;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-accent hover:text-white"
                  aria-label={social.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <div className="text-sm text-slate-400 flex flex-col items-center md:items-end gap-1">
            <span>WhatsApp: {profileData.contact.whatsapp}</span>
            <span>Email: {profileData.contact.email}</span>
            <span className="mt-2 text-slate-500">
              © {currentYear} {profileData.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import { profileData } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-slate-900/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Perjalanan karier dan fokus profesional saya saat ini." />
        
        <div className="flex flex-col gap-6 text-slate-300 text-lg leading-relaxed">
          {profileData.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <div className="flex items-center gap-2 mt-4 text-accent">
            <MapPin size={20} />
            <span className="font-medium">{profileData.about.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { profileData } from "../../data/profile";
import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto flex flex-col items-center text-center gap-8 z-10">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-slate-700/50 flex items-center justify-center overflow-hidden mb-4">
          <span className="text-4xl text-slate-500 font-medium">Foto</span>
        </div>
        
        <div className="max-w-3xl flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
            {profileData.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {profileData.subheadline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg">
            <a href="#contact">Hubungi Saya</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">Lihat Portofolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

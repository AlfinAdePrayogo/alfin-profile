import React from "react";
import { profileData } from "../../data/profile";
import { Button } from "../ui/Button";
// 1. IMPORT FOTO KAMU DI SINI
// Pastikan kamu sudah menaruh file foto (misal bernama profile.jpg) di dalam folder src/assets/
import fotoProfil from "../../assets/profile.jpg"; 

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto flex flex-col items-center text-center gap-8 z-10">
        
        {/* 2. PERUBAHAN PADA ELEMEN FOTO */}
        {/* Menggunakan tag <img> dengan border tipis elegan dan glow biru redup agar tidak silau */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/30 p-1 bg-slate-900/50 shadow-xl shadow-primary/10 mb-4 transition-transform duration-500 hover:scale-105">
          <img 
            src={fotoProfil} 
            alt={profileData.headline} 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
            {profileData.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {profileData.subheadline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <a href="#contact">Hubungi Saya</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover:bg-primary/5">
            <a href="#projects">Lihat Portofolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
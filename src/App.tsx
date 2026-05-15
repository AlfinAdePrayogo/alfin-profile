import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { InterestsSection } from "./components/sections/InterestsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ThemeToggle } from "./components/ui/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* 💡 DI SINI PERBAIKANNYA: Tombol dipasang agar tampil melayang */}
      <ThemeToggle />
    </div>
  );
}

export default App;

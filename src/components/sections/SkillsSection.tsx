import React from "react";
import { profileData } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillGroup } from "../ui/SkillGroup";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Skills & Expertise" subtitle="Kompetensi inti yang saya kembangkan untuk memberikan solusi yang efektif." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.skills.map((skillGroup, index) => (
            <SkillGroup 
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { profileData } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { InterestCard } from "../ui/InterestCard";

export const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Personal Interests" subtitle="Hal-hal yang saya eksplorasi di luar waktu kerja." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {profileData.interests.map((interest, index) => (
            <InterestCard
              key={index}
              name={interest.name}
              iconName={interest.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

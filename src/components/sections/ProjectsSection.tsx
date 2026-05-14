import React from "react";
import { profileData } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading title="Experience & Projects" subtitle="Beberapa inisiatif dan pengalaman profesional unggulan saya." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              iconName={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

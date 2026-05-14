import React from "react";
import { cn } from "../../lib/utils";
import * as Icons from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, iconName, className }) => {
  const Icon = (Icons as any)[iconName] || Icons.Code;

  return (
    <div className={cn(
      "group relative flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10",
      className
    )}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-accent transition-colors group-hover:bg-accent/20">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold text-slate-100">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

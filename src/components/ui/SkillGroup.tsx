import React from "react";
import { cn } from "../../lib/utils";

interface SkillGroupProps {
  category: string;
  items: string[];
  className?: string;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, items, className }) => {
  return (
    <div className={cn("flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-6", className)}>
      <h3 className="text-lg font-semibold text-slate-200">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-slate-300 border border-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

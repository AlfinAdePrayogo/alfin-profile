import React from "react";
import { cn } from "../../lib/utils";
import * as Icons from "lucide-react";

interface InterestCardProps {
  name: string;
  iconName: string;
  className?: string;
}

export const InterestCard: React.FC<InterestCardProps> = ({ name, iconName, className }) => {
  const Icon = (Icons as any)[iconName] || Icons.User;

  return (
    <div className={cn(
      "flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4 transition-colors hover:bg-slate-800/50",
      className
    )}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-accent">
        <Icon size={20} />
      </div>
      <span className="font-medium text-slate-200">{name}</span>
    </div>
  );
};

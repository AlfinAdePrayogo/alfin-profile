import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-accent text-accent-foreground hover:bg-navy-900",
      secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700",
      outline: "border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-100"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-10 px-6 py-2 text-sm",
      lg: "h-11 px-8 text-base"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

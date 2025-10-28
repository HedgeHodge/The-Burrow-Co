import React from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "relative inline-flex items-center justify-center overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--copper)] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  solid: "bg-[var(--copper)] text-[var(--parchment)] hover:bg-[var(--copper)]/90",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/10",
  glow:
    "border border-white/10 bg-gradient-to-r from-[var(--copper)] via-amber-200/90 to-emerald-300/80 text-[var(--bark)] shadow-[0_18px_45px_rgba(184,107,54,0.35)] hover:shadow-[0_24px_75px_rgba(184,107,54,0.45)] hover:brightness-105"
};

export const Button = React.forwardRef(
  ({ className, variant = "solid", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant] ?? variants.solid, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

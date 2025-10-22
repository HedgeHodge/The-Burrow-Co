import React from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--copper)] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  solid: "bg-[var(--copper)] text-[var(--parchment)] hover:bg-[var(--copper)]/90",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/10"
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

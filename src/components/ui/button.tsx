import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary chartreuse pill — the Antimetal signature CTA
        default:
          "rounded-full bg-chartreuse text-chartreuse-foreground shadow-cta hover:brightness-95 active:scale-[0.98]",
        // Deep navy pill
        dark:
          "rounded-full bg-navy-deep text-white shadow-md hover:bg-navy active:scale-[0.98]",
        destructive: "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Light ghost pill (on light surfaces)
        outline:
          "rounded-full bg-transparent text-foreground shadow-ghost-light hover:bg-white/60",
        secondary: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Dark ghost pill (on dark hero)
        ghost:
          "rounded-full bg-transparent text-white shadow-ghost-dark hover:bg-white/5",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
        hero:
          "rounded-full bg-chartreuse text-chartreuse-foreground shadow-cta hover:brightness-95 active:scale-[0.98]",
        whatsapp:
          "rounded-full bg-whatsapp text-white shadow-md hover:bg-whatsapp-hover active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

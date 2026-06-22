import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reactor focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded",
  {
    variants: {
      variant: {
        // Reactor primary — vivid neon green
        default:
          "bg-reactor text-void hover:brightness-110 active:scale-[0.98] shadow-[0_0_24px_-6px_hsl(var(--reactor-green)/0.6)]",
        // Ghost — bordered, transparent
        outline:
          "bg-transparent text-phosphor border border-fern hover:border-reactor hover:text-reactor",
        ghost:
          "bg-transparent text-phosphor hover:bg-carbon",
        secondary:
          "bg-carbon text-phosphor hover:bg-moss border border-fern",
        dark:
          "bg-carbon text-phosphor hover:bg-moss border border-fern",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-reactor underline-offset-4 hover:underline",
        hero:
          "bg-reactor text-void hover:brightness-110 active:scale-[0.98] shadow-[0_0_24px_-6px_hsl(var(--reactor-green)/0.6)]",
        whatsapp:
          "bg-whatsapp text-white hover:bg-whatsapp-hover",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-sm",
        xl: "h-12 px-8 text-base",
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

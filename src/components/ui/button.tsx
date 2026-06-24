import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Origin Financial — white pill is the only true CTA.
   Full-pill radius, tracked uppercase label, subtle shadow. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-normal uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full",
  {
    variants: {
      variant: {
        // White pill — the signature CTA
        default:
          "bg-white text-[#090a0b] hover:bg-[#f5f5f7] shadow-pill",
        outline:
          "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5",
        ghost:
          "bg-transparent text-white hover:text-white/70",
        secondary:
          "bg-[#3f4041] text-white hover:bg-[#4a4b4c]",
        dark:
          "bg-[#090a0b] text-white border border-[#2e2e2e] hover:border-white/50",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",
        link:
          "bg-transparent text-white underline-offset-4 hover:underline rounded-none",
        hero:
          "bg-white text-[#090a0b] hover:bg-[#f5f5f7] shadow-pill",
        whatsapp:
          "bg-white text-[#090a0b] hover:bg-[#f5f5f7] shadow-pill",
      },
      size: {
        default: "h-[38px] px-[18px] py-[12px] text-[11px] tracking-[0.182em]",
        sm: "h-8 px-4 text-[11px] tracking-[0.182em]",
        lg: "h-11 px-6 text-[12px] tracking-[0.182em]",
        xl: "h-12 px-8 text-[13px] tracking-[0.182em]",
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

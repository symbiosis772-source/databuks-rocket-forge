import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ebff00] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#ebff00] text-[#080707] border border-black hover:opacity-90",
        destructive: "bg-[#080707] text-white border border-black hover:opacity-90",
        outline: "border border-[#080707] bg-transparent text-[#080707] hover:bg-[#080707] hover:text-white",
        secondary: "bg-[#080707] text-white border border-black hover:bg-[#ebff00] hover:text-[#080707]",
        ghost: "text-[#080707] hover:underline underline-offset-4",
        link: "text-[#080707] underline-offset-4 hover:underline",
        hero: "bg-[#ebff00] text-[#080707] border border-black hover:opacity-90",
        whatsapp: "bg-[#ebff00] text-[#080707] border border-black hover:opacity-90",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-11 px-5",
        xl: "h-12 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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

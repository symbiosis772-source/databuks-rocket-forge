import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Vivid+Co — outlined ghost is the only interactive shape.
   0px radius, 1px border, transparent background, all-caps label. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-normal uppercase tracking-[0.04em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-none border",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-phosphor border-bone hover:border-gunmetal hover:text-gunmetal",
        outline:
          "bg-transparent text-gunmetal border-gunmetal hover:text-phosphor hover:border-bone",
        ghost:
          "bg-transparent text-phosphor border-transparent hover:text-gunmetal",
        secondary:
          "bg-transparent text-phosphor border-bone hover:border-gunmetal hover:text-gunmetal",
        dark:
          "bg-transparent text-phosphor border-bone hover:border-gunmetal hover:text-gunmetal",
        destructive:
          "bg-transparent text-destructive border-destructive hover:opacity-80",
        link:
          "bg-transparent text-phosphor border-transparent underline-offset-4 hover:underline",
        hero:
          "bg-transparent text-phosphor border-bone hover:border-gunmetal hover:text-gunmetal",
        whatsapp:
          "bg-transparent text-phosphor border-bone hover:border-gunmetal hover:text-gunmetal",
      },
      size: {
        default: "h-[38px] px-[15px] py-[9px] text-[14px]",
        sm: "h-8 px-3 text-[13px]",
        lg: "h-11 px-6 text-[15px]",
        xl: "h-12 px-8 text-[15px]",
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

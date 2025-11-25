import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[2px] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:border-b-0",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-100 text-zinc-900 border-b-4 border-zinc-400 hover:bg-white",
        secondary:
          "bg-zinc-800 text-zinc-100 border-b-4 border-zinc-950 hover:bg-zinc-700 hover:border-zinc-900",
        outline:
          "bg-transparent text-zinc-100 border-2 border-zinc-700 border-b-4 hover:bg-zinc-900 hover:border-zinc-600",
        destructive:
          "bg-red-600 text-white border-b-4 border-red-800 hover:bg-red-500 hover:border-red-700",
        ghost:
          "hover:bg-zinc-800 hover:text-zinc-100 border-b-4 border-transparent hover:border-zinc-800",
        link: "text-zinc-100 underline-offset-4 hover:underline active:translate-y-2",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-base",
        sm: "h-9 px-4 py-1.5 text-sm border-b-[3px]",
        lg: "h-14 px-8 py-4 text-lg font-bold border-b-[6px]",
        icon: "h-11 w-11",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

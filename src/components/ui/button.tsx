import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-accent",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow hover:bg-primary-dark dark:bg-primary-light dark:text-white dark:hover:bg-primary",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-white dark:hover:bg-red-900/90",
        outline:
          "border border-border bg-transparent shadow-sm hover:bg-primary/10 hover:text-primary dark:border-border dark:hover:bg-primary/20 dark:hover:text-accent",
        secondary:
          "bg-secondary text-white shadow-sm hover:bg-secondary/90 dark:bg-secondary dark:text-white dark:hover:bg-secondary/80",
        ghost:
          "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline dark:text-accent",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-default text-default-foreground shadow ",
        primary:
          "bg-primary-100 text-white shadow  font-[500] focus:bg-primary-80 hover:bg-primary-80 active:bg-primary-130 disabled:bg-primary-40",
        "primary-two":
          "bg-primary-10 text-primary-100 shadow font-[500] hover:bg-neutral-40 focus:bg-neutral-40 active:bg-neutral-40 active:text-primary-130 disabled:bg-primary-10",
        critical:
          "bg-critical-100 text-white focus:bg-critical-80 hover:bg-critical-80 active:bg-critical-120 border border-solid border-[1px] border-critical-110 focus:border-critical-100 shadow-sm hover:bg-critical-hover disabled:bg-critical-40 disabled:text-transparent-white-50 ",
        loading:
          "bg-loading text-loading-foreground  shadow-sm hover:bg-loading-hover opacity-50 hover:opacity-100 transition-opacity duration-500 ease-out",
        outline:
          "bg-outline text-outline-foreground  shadow-sm hover:bg-outline-hover",
        secondary:
          "bg-secondary-110 hover:bg-secondary-100 focus:bg-secondary-100 active:bg-secondary-120 text-white  shadow disabled:bg-secondary-80",
        "secondary-two":
          "bg-white text-secondary-110  shadow-sm border-neutral-40 border-[2px] border-solid hover:bg-neutral-10 hover:bg-neutral-50 hover:text-secondary-100 focus:text-secondary-100 focus:bg-neutral-10 focus:bg-neutral-50 active:bg-neutral-30 active:border-neutral-40 active:text-secondary-120",
        neutral:
          "bg-neutral-10 text-secondary-120 border-secondary-30 focus:bg-neutral-30 focus:bg-neutral-40 hover:bg-neutral-30 hover:bg-neutral-40 hover:bg-accent hover:text-accent-foreground active:bg-neutral-",
        link: "text-link underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-[2.5rem] w-[8rem] rounded-full",
        sm: "h-[1.9rem] w-[6rem] rounded-md px-3 text-xs rounded-full",
        lg: "h-[3rem] w-[9.5rem] rounded-md px-8 py-[2%] px-[2.7%] rounded-full",
        link: "h-9 px-0 py-2 rounded-full",
        icon: "py-[1%] px-[1%] h-[2.2rem] w-[2.2rem] rounded-full",
        circle: "px-3 py-3 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProperties
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  ({ className, variant, size, asChild = false, ...properties }, reference) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={reference}
        {...properties}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

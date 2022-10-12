import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
};

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={clsx(`text-gray-100 font-bold font-sans`, {})}>
      {children}
    </Comp>
  );
};

import { clsx } from "clsx";

export type TextProps = {
  size?: `sm` | `md` | `lg`;
  children: string;
};

export const Text = ({ size = `md`, children }: TextProps) => {
  return (
    <span
      className={clsx(`text-gray-100 font-sans`, {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </span>
  );
};

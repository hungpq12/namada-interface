import clsx from "clsx";
import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const linkButton = tv({
  base: clsx(
    "inline-block text-base pb-1 text-center",
    "[&_button]:unset [&_button]:pointer [&_button]:text-current",
    "[&_a]:transition-all [&_a]:duration-200 [&_a]:ease-out [&_a]:text-current",
    "[&_a]:border-b [&_a]:border-transparent [&_a]:hover:border-current"
  ),
  variants: {
    color: {
      primary: "text-yellow",
      secondary: "text-cyan",
      neutral: "text-black",
    },
    underline: {
      true: "[&_a]:border-current",
    },
  },
  defaultVariants: {
    color: "neutral",
    underline: false,
  },
});

export type LinkButtonProps = VariantProps<typeof linkButton> &
  React.ComponentPropsWithoutRef<"a">;

export const LinkButton = ({
  underline,
  color,
  children,
  ...props
}: LinkButtonProps): JSX.Element => {
  return (
    <div className={linkButton({ color, underline })}>
      {createElement(props.href ? "a" : "button", { ...props }, children)}
    </div>
  );
};

import Link from "next/link";
import type { ComponentPropsWithoutRef, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className" | "href"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cloud text-obsidian shadow-[0_16px_30px_rgba(244,241,234,0.14)] hover:-translate-y-0.5 hover:bg-white",
  secondary:
    "border border-white/15 bg-white/6 text-cloud hover:-translate-y-0.5 hover:border-[#8DB7FF]/45 hover:bg-white/10",
  ghost: "text-cloud hover:bg-white/6 hover:text-white"
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function isLinkButtonProps(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const classes = cx(baseClasses, variantClasses[props.variant ?? "primary"], props.className);

  if (isLinkButtonProps(props)) {
    const { children, className: _className, variant: _variant, ...linkProps } = props;

    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, className: _className, variant: _variant, ...buttonProps } = props;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

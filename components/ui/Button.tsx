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
    "border border-white/20 bg-[linear-gradient(135deg,#f4f1ea_0%,#ffffff_56%,#d5e3ff_100%)] text-obsidian shadow-[0_16px_32px_rgba(244,241,234,0.16)] hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(141,183,255,0.16)]",
  secondary:
    "border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] text-cloud hover:-translate-y-0.5 hover:border-[#8DB7FF]/38 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(141,183,255,0.07))]",
  ghost: "text-cloud hover:bg-white/6 hover:text-white"
};

const baseClasses =
  "relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 before:pointer-events-none before:absolute before:inset-y-0 before:left-[-35%] before:w-1/2 before:skew-x-[-24deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100";

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

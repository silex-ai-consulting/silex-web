import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  withTagline?: boolean;
};

export function Logo({ compact = false, withTagline = false }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className="inline-flex items-center gap-3 text-cloud transition-opacity duration-300 hover:opacity-90"
      aria-label="SILEX"
    >
      <span
        className={`relative inline-flex items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
          compact ? "h-11 w-11" : "h-12 w-12"
        }`}
      >
        <Image
          src="/isotipo-silex.svg"
          alt=""
          width={26}
          height={38}
          priority
          className={compact ? "h-8 w-[1.4rem]" : "h-9 w-6"}
        />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-sans font-medium uppercase text-cloud ${
            compact ? "text-[0.9rem] tracking-[0.44em]" : "text-base tracking-[0.48em]"
          }`}
        >
          SILEX
        </span>
        {withTagline ? (
          <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.3em] text-steel md:block">
            Sistemas digitales premium
          </span>
        ) : null}
      </span>
    </Link>
  );
}

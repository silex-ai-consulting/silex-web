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
        <svg
          viewBox="0 0 60 88"
          className={compact ? "h-8 w-[1.35rem]" : "h-9 w-6"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31 1L8 19V72L25 86L31 49L48 79L56 40L42 9L31 1Z" fill="#F4F1EA" />
          <path d="M30 2L10 19L27 45L42 9L30 2Z" fill="#8DB7FF" />
          <path d="M27 46L10 19V71L24 83L27 46Z" fill="#E7E2D8" />
          <path d="M28 46L31 82L48 42L42 10L28 46Z" fill="#C2D1FF" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span
          className={`font-sans uppercase tracking-[0.48em] text-cloud ${
            compact ? "text-[0.92rem]" : "text-base"
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

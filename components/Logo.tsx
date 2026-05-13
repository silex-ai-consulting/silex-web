import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className="inline-flex items-center gap-3 text-cloud transition-opacity duration-300 hover:opacity-90"
      aria-label="SILEX"
    >
      <svg
        viewBox="0 0 60 88"
        className={compact ? "h-9 w-6" : "h-10 w-7"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31 1L8 19V72L25 86L31 49L48 79L56 40L42 9L31 1Z" fill="#F4F1EA" />
        <path d="M30 2L10 19L27 45L42 9L30 2Z" fill="#8DB7FF" />
        <path d="M27 46L10 19V71L24 83L27 46Z" fill="#E7E2D8" />
        <path d="M28 46L31 82L48 42L42 10L28 46Z" fill="#C2D1FF" />
      </svg>
      <span
        className={`font-sans uppercase tracking-[0.5em] text-cloud ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        SILEX
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

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
        className={`relative inline-flex items-center justify-center rounded-[1.1rem] border border-[#f4f1ea]/40 bg-[#f4f1ea] shadow-[0_10px_24px_rgba(0,0,0,0.16)] ${
          compact ? "h-11 w-11" : "h-12 w-12"
        }`}
      >
        <Image
          src={assetPath("/isotipo-silex.svg")}
          alt=""
          width={30}
          height={42}
          priority
          className={compact ? "h-8.5 w-[1.55rem]" : "h-10 w-7"}
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

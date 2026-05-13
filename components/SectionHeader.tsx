type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false
}: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker text-xs sm:text-sm">{eyebrow}</p>
      <h2 className="mt-4 font-display text-5xl leading-none text-cloud sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#8DB7FF] to-transparent ${
          center ? "mx-auto" : ""
        }`}
      />
      <p className="mt-6 text-base leading-8 text-steel sm:text-lg">{description}</p>
    </div>
  );
}

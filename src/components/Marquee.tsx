interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

/** Infinite horizontal strip. Two copies of the list slide by -50%; CSS keyframes in index.css. */
function Marquee({ items, reverse = false, className = "" }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center font-mono text-sm tracking-wider2 uppercase">
          <span className="mx-6">{item}</span>
          <span className="h-2 w-2 bg-accent" aria-hidden />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y-2 border-ink bg-paper py-3 select-none ${className}`}
      aria-hidden
    >
      <div className={reverse ? "flex w-max animate-marquee-reverse" : "flex w-max animate-marquee"}>
        {row}
        {row}
      </div>
    </div>
  );
}

export default Marquee;

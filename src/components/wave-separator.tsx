'use client';

const WAVE_PATTERN = '~~~~ ~~~~ ~~~~ ~~~~';

export default function WaveSeparator() {
  return (
    <div className="wave-container flex select-none items-center justify-center overflow-hidden py-8 text-muted/40 md:py-12 cursor-default">
      <span className="text-xs tracking-[0.5em] flex">
        {WAVE_PATTERN.split('').map((char, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: code is safe
            key={index}
            className="wave-char inline-block"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </div>
  );
}

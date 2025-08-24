'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="w-max cursor-pointer"
      type="button"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <span className="text-muted">theme:</span> {theme}
    </button>
  );
}

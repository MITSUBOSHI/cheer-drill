"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const FuriganaContext = createContext<{
  furigana: boolean;
  toggle: () => void;
}>({
  furigana: false,
  toggle: () => {},
});

export function FuriganaProvider({ children }: { children: ReactNode }) {
  const [furigana, setFurigana] = useState(false);

  return (
    <FuriganaContext.Provider
      value={{ furigana, toggle: () => setFurigana((v) => !v) }}
    >
      {children}
    </FuriganaContext.Provider>
  );
}

export function useFurigana() {
  return useContext(FuriganaContext);
}

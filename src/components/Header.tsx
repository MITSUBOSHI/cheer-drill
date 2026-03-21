"use client";

import { useState } from "react";
import Link from "next/link";
import { useFurigana } from "@/contexts/FuriganaContext";

export function Header() {
  const { furigana, toggle } = useFurigana();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CheerDrill
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4">
          <nav className="flex gap-4 text-sm font-medium">
            <Link href="/arm-motions" className="hover:text-accent transition-colors">
              アームモーション
            </Link>
            <Link href="/steps" className="hover:text-accent transition-colors">
              ステップ
            </Link>
            <Link href="/jumps" className="hover:text-accent transition-colors">
              ジャンプ
            </Link>
            <Link href="/turns" className="hover:text-accent transition-colors">
              ターン
            </Link>
            <Link href="/kicks" className="hover:text-accent transition-colors">
              キック
            </Link>
            <Link href="/quiz" className="hover:text-accent transition-colors">
              クイズ
            </Link>
            <Link href="/baystars" className="hover:text-accent transition-colors">
              BayStars
            </Link>
          </nav>
          <button
            onClick={toggle}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-colors ${
              furigana
                ? "bg-accent text-text"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            ふりがな {furigana ? "ON" : "OFF"}
          </button>
        </div>

        {/* Mobile: furigana toggle + hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggle}
            className={`text-xs px-2.5 py-1 rounded-full font-bold transition-colors ${
              furigana
                ? "bg-accent text-text"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            ふりがな {furigana ? "ON" : "OFF"}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-1.5"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-white/20 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
          <Link href="/arm-motions" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            アームモーション
          </Link>
          <Link href="/steps" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            ステップ
          </Link>
          <Link href="/jumps" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            ジャンプ
          </Link>
          <Link href="/turns" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            ターン
          </Link>
          <Link href="/kicks" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            キック
          </Link>
          <Link href="/quiz" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            クイズ
          </Link>
          <Link href="/baystars" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            BayStars
          </Link>
        </nav>
      )}
    </header>
  );
}

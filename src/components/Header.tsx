"use client";

import Link from "next/link";
import { useFurigana } from "@/contexts/FuriganaContext";

export function Header() {
  const { furigana, toggle } = useFurigana();

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CheerDrill
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex gap-3 sm:gap-4 text-sm font-medium">
            <Link
              href="/arm-motions"
              className="hover:text-accent transition-colors"
            >
              {furigana ? (
                <>
                  <ruby>
                    ア<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>
                  </ruby>
                  ームモーション
                </>
              ) : (
                "アームモーション"
              )}
            </Link>
            <Link
              href="/steps"
              className="hover:text-accent transition-colors"
            >
              ステップ
            </Link>
            <Link
              href="/quiz"
              className="hover:text-accent transition-colors"
            >
              クイズ
            </Link>
          </nav>
          <button
            onClick={toggle}
            className={`text-xs px-2.5 py-1 rounded-full font-bold transition-colors ${
              furigana
                ? "bg-accent text-text"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
            title="ふりがなモード"
          >
            <ruby>
              あ<rp>(</rp><rt className="text-[8px]">A</rt><rp>)</rp>
            </ruby>
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { clsx } from "clsx";
import type { Difficulty } from "@/types";

const options: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "easy", label: "かんたん" },
  { value: "medium", label: "ふつう" },
  { value: "hard", label: "むずかしい" },
];

export function DifficultyFilter({
  selected,
  onChange,
}: {
  selected: Difficulty | "all";
  onChange: (value: Difficulty | "all") => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={clsx(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
            selected === opt.value
              ? "bg-primary text-white"
              : "bg-white text-text-muted border border-gray-200 hover:border-primary hover:text-primary"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

import { clsx } from "clsx";
import type { Difficulty } from "@/types";

const labels: Record<Difficulty, string> = {
  easy: "かんたん",
  medium: "ふつう",
  hard: "むずかしい",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={clsx(
        "inline-block px-2 py-0.5 rounded-full text-xs font-bold",
        difficulty === "easy" && "bg-easy-bg text-green-800",
        difficulty === "medium" && "bg-medium-bg text-yellow-800",
        difficulty === "hard" && "bg-hard-bg text-red-800"
      )}
    >
      {labels[difficulty]}
    </span>
  );
}

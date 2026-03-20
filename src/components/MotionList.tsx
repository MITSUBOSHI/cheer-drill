"use client";

import { useState } from "react";
import type { Difficulty, Motion } from "@/types";
import { MotionCard } from "./MotionCard";
import { DifficultyFilter } from "./DifficultyFilter";

export function MotionList({ motions }: { motions: Motion[] }) {
  const [filter, setFilter] = useState<Difficulty | "all">("all");

  const filtered =
    filter === "all"
      ? motions
      : motions.filter((m) => m.difficulty === filter);

  return (
    <div>
      <div className="mb-6">
        <DifficultyFilter selected={filter} onChange={setFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((motion) => (
          <MotionCard key={motion.id} motion={motion} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-8">
          この難易度のモーションはありません
        </p>
      )}
    </div>
  );
}

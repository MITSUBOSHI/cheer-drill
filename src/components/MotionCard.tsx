import Link from "next/link";
import type { Motion } from "@/types";
import { DifficultyBadge } from "./DifficultyBadge";

export function MotionCard({ motion }: { motion: Motion }) {
  const href =
    motion.category === "arm-motion"
      ? `/arm-motions/${motion.slug}`
      : `/steps/${motion.slug}`;

  return (
    <Link
      href={href}
      className="block bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-lg text-text">{motion.nameJa}</h3>
        <DifficultyBadge difficulty={motion.difficulty} />
      </div>
      <p className="text-sm text-text-muted leading-relaxed">
        {motion.description}
      </p>
      <p className="text-xs text-text-muted mt-2 opacity-60">{motion.nameEn}</p>
    </Link>
  );
}

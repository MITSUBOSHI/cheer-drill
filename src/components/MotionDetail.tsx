"use client";

import { useState } from "react";
import Link from "next/link";
import type { Motion } from "@/types";
import { DifficultyBadge } from "./DifficultyBadge";

export function MotionDetail({
  motion,
  backHref,
  backLabel,
}: {
  motion: Motion;
  backHref: string;
  backLabel: string;
}) {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(motion.tips.length).fill(false)
  );

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;
  const allDone = completedCount === motion.tips.length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1 text-primary font-medium text-sm mb-6 hover:underline"
      >
        ← {backLabel}
      </Link>

      <div className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-text">
              {motion.nameJa}
            </h1>
            <p className="text-sm text-text-muted">{motion.nameEn}</p>
          </div>
          <DifficultyBadge difficulty={motion.difficulty} />
        </div>

        <p className="text-text leading-relaxed mb-6">{motion.description}</p>

        <div className="border-t border-gray-100 pt-4">
          <h2 className="font-bold text-lg text-text mb-3">
            練習チェックリスト
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(completedCount / motion.tips.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-sm text-text-muted font-medium">
              {completedCount}/{motion.tips.length}
            </span>
          </div>
          <ul className="space-y-2">
            {motion.tips.map((tip, i) => (
              <li key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-bg transition-colors"
                >
                  <span
                    className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                      checked[i]
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {checked[i] && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      checked[i] ? "line-through text-text-muted" : "text-text"
                    }`}
                  >
                    {tip}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {allDone && (
            <div className="mt-4 p-3 bg-easy-bg rounded-xl text-center">
              <p className="text-green-800 font-bold">
                すべてクリア！すごい！
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

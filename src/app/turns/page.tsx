import type { Metadata } from "next";
import { turns } from "@/data/turns";
import { MotionList } from "@/components/MotionList";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "ターン一覧 | チアドリル",
  description:
    "チアダンスのターンテクニック4種類を学ぼう！シェネ、ピケターン、ピルエットなど、動画付きでわかりやすく解説。",
};

export default function TurnsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        ターン
      </h1>
      <p className="text-text-muted mb-6">
        <Ruby>きれいに回ろう！4種類のターンテクニックを練習しよう！</Ruby>
      </p>
      <MotionList motions={turns} />
    </div>
  );
}

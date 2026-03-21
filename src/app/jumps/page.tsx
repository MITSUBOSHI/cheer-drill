import type { Metadata } from "next";
import { jumps } from "@/data/jumps";
import { MotionList } from "@/components/MotionList";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "ジャンプ一覧 | チアドリル",
  description:
    "チアダンスのジャンプテクニック5種類を学ぼう！トゥタッチ、Cジャンプなど、動画付きでわかりやすく解説。",
};

export default function JumpsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        ジャンプ
      </h1>
      <p className="text-text-muted mb-6">
        <Ruby>高くかっこよく跳ぼう！5種類のジャンプテクニックを練習しよう！</Ruby>
      </p>
      <MotionList motions={jumps} />
    </div>
  );
}

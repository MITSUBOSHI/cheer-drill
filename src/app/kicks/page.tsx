import type { Metadata } from "next";
import { kicks } from "@/data/kicks";
import { MotionList } from "@/components/MotionList";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "キック一覧 | チアドリル",
  description:
    "チアダンスのキックテクニック4種類を学ぼう！フロントキック、ヒッチキックなど、動画付きでわかりやすく解説。",
};

export default function KicksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        キック
      </h1>
      <p className="text-text-muted mb-6">
        <Ruby>かっこよく蹴り上げよう！4種類のキックテクニックを練習しよう！</Ruby>
      </p>
      <MotionList motions={kicks} />
    </div>
  );
}

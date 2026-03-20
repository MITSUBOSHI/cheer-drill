import type { Metadata } from "next";
import { steps } from "@/data/steps";
import { MotionList } from "@/components/MotionList";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "ステップバリエーション一覧 | チアドリル",
  description:
    "チアリーディングの基本ステップ6種類を学ぼう！ステップタッチ、グレープバインなど、リズムに合わせて楽しく練習。",
};

export default function StepsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        ステップバリエーション
      </h1>
      <p className="text-text-muted mb-6">
        <Ruby>リズムに合わせて楽しくステップ！6種類のステップバリエーションを練習しよう！</Ruby>
      </p>
      <MotionList motions={steps} />
    </div>
  );
}

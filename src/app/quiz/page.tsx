import type { Metadata } from "next";
import { QuizClient } from "@/components/QuizClient";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "クイズに挑戦 | チアドリル",
  description:
    "チアリーディングのアームモーションやステップをクイズで復習しよう！何問正解できるかな？",
};

export default function QuizPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        <Ruby>クイズに挑戦!</Ruby>
      </h1>
      <p className="text-text-muted mb-6">
        <Ruby>モーションの名前を当てよう！全5問のクイズにチャレンジ！</Ruby>
      </p>
      <QuizClient />
    </div>
  );
}

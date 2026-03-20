import type { Metadata } from "next";
import { armMotions } from "@/data/arm-motions";
import { MotionList } from "@/components/MotionList";

export const metadata: Metadata = {
  title: "アームモーション一覧 | チアドリル",
  description:
    "チアリーディングの基本アームモーション18種類を学ぼう！ハイブイ、ローブイ、タッチダウンなど、写真付きでわかりやすく解説。",
};

export default function ArmMotionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-text mb-2">
        アームモーション
      </h1>
      <p className="text-text-muted mb-6">
        チアリーディングの基本となる18種類のアームモーション。ひとつずつマスターしよう！
      </p>
      <MotionList motions={armMotions} />
    </div>
  );
}

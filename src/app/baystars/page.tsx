import type { Metadata } from "next";
import { Ruby } from "@/components/Ruby";

export const metadata: Metadata = {
  title: "BayStars | チアドリル",
  description:
    "横浜DeNAベイスターズの応援ダンスを覚えよう！熱き星たちよ、ハピスタダンスの動画で練習！",
  robots: { index: false, follow: false },
};

const videos = [
  {
    id: "TYiDqMT5G8g",
    title: "熱き星たちよ",
  },
  {
    id: "6ONym0KZQeo",
    title: "ハピスタダンス",
  },
];

export default function BayStarsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold text-text mb-2">
        BayStars
      </h1>
      <p className="text-text-muted mb-8">
        <Ruby>横浜DeNAベイスターズの応援ダンスを覚えよう！</Ruby>
      </p>

      <div className="space-y-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6"
          >
            <h2 className="font-bold text-lg text-text mb-3">
              <Ruby>{video.title}</Ruby>
            </h2>
            <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-gray-100">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { jumps } from "@/data/jumps";
import { MotionDetail } from "@/components/MotionDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return jumps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const motion = jumps.find((m) => m.slug === slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | ジャンプ | チアドリル`,
    description: motion.description,
  };
}

export default async function JumpDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motion = jumps.find((m) => m.slug === slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/jumps"
      backLabel="ジャンプ一覧"
    />
  );
}

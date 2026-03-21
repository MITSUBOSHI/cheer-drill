import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { turns } from "@/data/turns";
import { MotionDetail } from "@/components/MotionDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return turns.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const motion = turns.find((m) => m.slug === slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | ターン | チアドリル`,
    description: motion.description,
  };
}

export default async function TurnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motion = turns.find((m) => m.slug === slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/turns"
      backLabel="ターン一覧"
    />
  );
}

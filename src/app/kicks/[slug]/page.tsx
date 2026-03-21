import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { kicks } from "@/data/kicks";
import { MotionDetail } from "@/components/MotionDetail";

export function generateStaticParams() {
  return kicks.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const motion = kicks.find((m) => m.slug === slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | キック | チアドリル`,
    description: motion.description,
  };
}

export default async function KickDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motion = kicks.find((m) => m.slug === slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/kicks"
      backLabel="キック一覧"
    />
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { steps } from "@/data/steps";
import { MotionDetail } from "@/components/MotionDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return steps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const motion = steps.find((m) => m.slug === slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | ステップ | チアドリル`,
    description: motion.description,
  };
}

export default async function StepDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motion = steps.find((m) => m.slug === slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/steps"
      backLabel="ステップ一覧"
    />
  );
}

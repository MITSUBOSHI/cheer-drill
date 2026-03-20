import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { steps } from "@/data/steps";
import { MotionDetail } from "@/components/MotionDetail";

export function generateStaticParams() {
  return steps.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const motion = steps.find((m) => m.slug === params.slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | ステップ | チアドリル`,
    description: motion.description,
  };
}

export default function StepDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const motion = steps.find((m) => m.slug === params.slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/steps"
      backLabel="ステップ一覧"
    />
  );
}

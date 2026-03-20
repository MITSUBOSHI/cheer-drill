import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { armMotions } from "@/data/arm-motions";
import { MotionDetail } from "@/components/MotionDetail";

export function generateStaticParams() {
  return armMotions.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const motion = armMotions.find((m) => m.slug === params.slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | アームモーション | チアドリル`,
    description: motion.description,
  };
}

export default function ArmMotionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const motion = armMotions.find((m) => m.slug === params.slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/arm-motions"
      backLabel="アームモーション一覧"
    />
  );
}

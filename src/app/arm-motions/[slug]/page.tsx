import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { armMotions } from "@/data/arm-motions";
import { MotionDetail } from "@/components/MotionDetail";

export function generateStaticParams() {
  return armMotions.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const motion = armMotions.find((m) => m.slug === slug);
  if (!motion) return {};
  return {
    title: `${motion.nameJa} | アームモーション | チアドリル`,
    description: motion.description,
  };
}

export default async function ArmMotionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motion = armMotions.find((m) => m.slug === slug);
  if (!motion) notFound();

  return (
    <MotionDetail
      motion={motion}
      backHref="/arm-motions"
      backLabel="アームモーション一覧"
    />
  );
}

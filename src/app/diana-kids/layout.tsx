import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "diana kids | チアドリル",
  robots: { index: false, follow: false },
};

export default function DianaKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

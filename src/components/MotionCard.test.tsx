import { render, screen } from "@testing-library/react";
import { MotionCard } from "./MotionCard";
import type { Motion } from "@/types";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock FuriganaContext
vi.mock("@/contexts/FuriganaContext", () => ({
  useFurigana: () => ({ furigana: false, toggle: () => {} }),
}));

const baseMotion: Motion = {
  id: "test",
  slug: "test-motion",
  nameJa: "テスト",
  nameEn: "Test",
  category: "arm-motion",
  difficulty: "easy",
  description: "テスト説明",
  tips: ["tip1"],
  commonMistakes: ["mistake1"],
  practiceSteps: ["step1"],
};

describe("MotionCard", () => {
  it("renders motion name and description", () => {
    render(<MotionCard motion={baseMotion} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByText("テスト説明")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it.each([
    ["arm-motion", "/arm-motions/test-motion"],
    ["step", "/steps/test-motion"],
    ["jump", "/jumps/test-motion"],
    ["turn", "/turns/test-motion"],
    ["kick", "/kicks/test-motion"],
  ] as const)("links to correct path for category %s", (category, expectedHref) => {
    const motion = { ...baseMotion, category };
    render(<MotionCard motion={motion} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", expectedHref);
  });
});

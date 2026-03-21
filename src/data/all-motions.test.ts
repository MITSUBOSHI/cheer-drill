import { armMotions } from "./arm-motions";
import { steps } from "./steps";
import { jumps } from "./jumps";
import { turns } from "./turns";
import { kicks } from "./kicks";

describe("all motions cross-category", () => {
  const allMotions = [...armMotions, ...steps, ...jumps, ...turns, ...kicks];

  it("should have globally unique ids", () => {
    const ids = allMotions.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have globally unique slugs", () => {
    const slugs = allMotions.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should all have required fields", () => {
    allMotions.forEach((m) => {
      expect(m.nameJa).toBeTruthy();
      expect(m.nameEn).toBeTruthy();
      expect(m.description).toBeTruthy();
      expect(m.tips.length).toBeGreaterThan(0);
      expect(m.commonMistakes.length).toBeGreaterThan(0);
      expect(m.practiceSteps.length).toBeGreaterThan(0);
    });
  });

  it("should have valid difficulty values", () => {
    allMotions.forEach((m) => {
      expect(["easy", "medium", "hard"]).toContain(m.difficulty);
    });
  });

  it("should have valid category values", () => {
    allMotions.forEach((m) => {
      expect(["arm-motion", "step", "jump", "turn", "kick"]).toContain(
        m.category
      );
    });
  });
});

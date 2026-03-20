import { armMotions } from "./arm-motions";

describe("armMotions", () => {
  it("should have 26 arm motions", () => {
    expect(armMotions).toHaveLength(26);
  });

  it("should all have category arm-motion", () => {
    armMotions.forEach((m) => {
      expect(m.category).toBe("arm-motion");
    });
  });

  it("should have unique ids", () => {
    const ids = armMotions.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = armMotions.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have at least one tip per motion", () => {
    armMotions.forEach((m) => {
      expect(m.tips.length).toBeGreaterThan(0);
    });
  });
});

import { steps } from "./steps";

describe("steps", () => {
  it("should have 6 steps", () => {
    expect(steps).toHaveLength(6);
  });

  it("should all have category step", () => {
    steps.forEach((m) => {
      expect(m.category).toBe("step");
    });
  });

  it("should have unique ids", () => {
    const ids = steps.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = steps.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have at least one tip per step", () => {
    steps.forEach((m) => {
      expect(m.tips.length).toBeGreaterThan(0);
    });
  });
});

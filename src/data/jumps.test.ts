import { jumps } from "./jumps";

describe("jumps", () => {
  it("should have 5 jumps", () => {
    expect(jumps).toHaveLength(5);
  });

  it("should all have category jump", () => {
    jumps.forEach((m) => {
      expect(m.category).toBe("jump");
    });
  });

  it("should have unique ids", () => {
    const ids = jumps.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = jumps.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have at least one tip per motion", () => {
    jumps.forEach((m) => {
      expect(m.tips.length).toBeGreaterThan(0);
    });
  });
});

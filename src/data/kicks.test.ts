import { kicks } from "./kicks";

describe("kicks", () => {
  it("should have 4 kicks", () => {
    expect(kicks).toHaveLength(4);
  });

  it("should all have category kick", () => {
    kicks.forEach((m) => {
      expect(m.category).toBe("kick");
    });
  });

  it("should have unique ids", () => {
    const ids = kicks.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = kicks.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have at least one tip per motion", () => {
    kicks.forEach((m) => {
      expect(m.tips.length).toBeGreaterThan(0);
    });
  });
});

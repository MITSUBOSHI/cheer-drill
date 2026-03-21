import { turns } from "./turns";

describe("turns", () => {
  it("should have 4 turns", () => {
    expect(turns).toHaveLength(4);
  });

  it("should all have category turn", () => {
    turns.forEach((m) => {
      expect(m.category).toBe("turn");
    });
  });

  it("should have unique ids", () => {
    const ids = turns.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = turns.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have at least one tip per motion", () => {
    turns.forEach((m) => {
      expect(m.tips.length).toBeGreaterThan(0);
    });
  });
});

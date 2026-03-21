import { test, expect } from "@playwright/test";

test.describe("top page", () => {
  test("shows site title and category cards", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "みんなでチアドリル!", exact: true })
    ).toBeVisible();

    // Category cards exist (use h2 headings in cards)
    const cards = page.locator("section h2");
    await expect(cards.filter({ hasText: "アームモーション" })).toBeVisible();
    await expect(cards.filter({ hasText: "ジャンプ" })).toBeVisible();
    await expect(cards.filter({ hasText: "ターン" })).toBeVisible();
    await expect(cards.filter({ hasText: "キック" })).toBeVisible();
  });
});

test.describe("category list pages", () => {
  const categories = [
    { path: "/arm-motions", heading: "アームモーション" },
    { path: "/steps", heading: "ステップバリエーション" },
    { path: "/jumps", heading: "ジャンプ" },
    { path: "/turns", heading: "ターン" },
    { path: "/kicks", heading: "キック" },
  ];

  for (const { path, heading } of categories) {
    test(`${path} page loads with heading`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.getByRole("heading", { level: 1, name: heading, exact: true })
      ).toBeVisible();
    });
  }
});

test.describe("detail page navigation", () => {
  test("can navigate from arm-motions list to detail", async ({ page }) => {
    await page.goto("/arm-motions");
    await page
      .getByRole("link", { name: /ハイブイ かんたん/ })
      .first()
      .click();
    await expect(
      page.getByRole("heading", { name: "ハイブイ", exact: true })
    ).toBeVisible();
    await expect(page.getByText("High V")).toBeVisible();
  });

  test("can navigate from jumps list to detail", async ({ page }) => {
    await page.goto("/jumps");
    await page
      .getByRole("link", { name: /トゥタッチ/ })
      .first()
      .click();
    await expect(
      page.getByRole("heading", { name: "トゥタッチ", exact: true })
    ).toBeVisible();
  });
});

test.describe("header navigation", () => {
  test("desktop nav links work", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "クイズ", exact: true })
      .first()
      .click();
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toBeVisible();
  });
});

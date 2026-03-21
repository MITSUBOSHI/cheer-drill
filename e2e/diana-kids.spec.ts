import { test, expect } from "@playwright/test";

test.describe("diana-kids page", () => {
  test("shows password form before content", async ({ page }) => {
    await page.goto("/diana-kids");
    await expect(page.getByPlaceholder("パスワード")).toBeVisible();
    await expect(page.getByRole("button", { name: /入る/ })).toBeVisible();
    // Content should not be visible
    await expect(page.getByText("4つのお約束")).not.toBeVisible();
  });

  test("rejects wrong password", async ({ page }) => {
    await page.goto("/diana-kids");
    await page.getByPlaceholder("パスワード").fill("wrongpass");
    await page.getByRole("button", { name: /入る/ }).click();
    await expect(page.getByText("パスワードが違います")).toBeVisible();
  });

  test("shows content with correct password", async ({ page }) => {
    await page.goto("/diana-kids");
    await page.getByPlaceholder("パスワード").fill("diana2006");
    await page.getByRole("button", { name: /入る/ }).click();
    await expect(page.getByText("4つのお約束")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Wing/ })
    ).toBeVisible();
  });

  test("is accessible from baystars page", async ({ page }) => {
    await page.goto("/baystars");
    await page.getByRole("link", { name: "diana kids" }).click();
    await expect(page.getByPlaceholder("パスワード")).toBeVisible();
  });
});

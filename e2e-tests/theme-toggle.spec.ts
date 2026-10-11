import { test, expect } from "@playwright/test";

test("Schimbă și păstrează tema întunecată", async ({ page }) => {
  await page.goto("/");
  const themeToggle = page.getByTestId("theme-toggle").first();

  await expect(themeToggle).toHaveAttribute("aria-label", "Activează modul întunecat");
  await themeToggle.click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(themeToggle).toHaveAttribute("aria-label", "Activează modul luminos");

  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(page.getByTestId("theme-toggle").first()).toHaveAttribute("aria-label", "Activează modul luminos");

  await page.getByTestId("theme-toggle").first().click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
});

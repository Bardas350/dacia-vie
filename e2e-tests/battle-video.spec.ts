import { test, expect } from "@playwright/test";

test("Încarcă playerul video doar la cererea vizitatorului", async ({ page }) => {
  // Verify our integration independently of YouTube availability and embed permissions.
  await page.route("https://www.youtube-nocookie.com/**", route => route.fulfill({
    contentType: "text/html",
    body: "<!doctype html><html><body>Player extern</body></html>",
  }));
  await page.goto("/tactici-de-lupta");
  await expect(page.getByRole("heading", { name: "Sistemul de fortificații și apărarea pasivă" })).toBeVisible();
  const falx = page.getByRole("img", { name: "Falx cu lamă curbată și mâner din lemn.", exact: true });
  await falx.scrollIntoViewIfNeeded();
  await expect(falx).toBeVisible();
  const response = await page.request.get((await falx.getAttribute("src"))!);
  expect(response.headers()["content-type"]).toContain("image/");
  const player = page.locator('iframe[title="Material video despre daci — YouTube"]');
  await expect(player).toHaveCount(0);
  await page.getByRole("button", { name: "Încarcă videoclipul" }).click();
  await expect(player).toBeVisible();
  await expect(player).toHaveAttribute("src", "https://www.youtube-nocookie.com/embed/OI9JxXNdgx4?rel=0");
  await expect(page.getByRole("button", { name: "Încarcă videoclipul" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Deschide sursa originală pe YouTube" })).toHaveAttribute("href", "https://youtu.be/OI9JxXNdgx4");
});

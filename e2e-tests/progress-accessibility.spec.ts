import { test, expect } from "@playwright/test";

test("Păstrează progresul temelor citite", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.goto("/originea");
  await page.goto("/");

  await expect(page.getByTestId("learning-progress")).toContainText("Ai explorat 1 din 10 teme");
  await expect(page.getByTestId("learning-progress")).toContainText("10%");
});

test("Permite personalizarea accesibilității", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByTestId("accessibility-toggle").first().click();

  await page.getByRole("button", { name: "Text mai mare" }).click();
  await page.getByRole("button", { name: "Contrast ridicat" }).click();
  await page.getByRole("button", { name: "Mai puțină mișcare" }).click();
  await expect(page.locator("html")).toHaveClass(/text-large/);
  await expect(page.locator("html")).toHaveClass(/high-contrast/);
  await expect(page.locator("html")).toHaveClass(/reduce-motion/);

  await page.getByRole("button", { name: "Resetează preferințele" }).click();
  await expect(page.locator("html")).not.toHaveClass(/text-large/);
  await expect(page.locator("html")).not.toHaveClass(/high-contrast/);
  await expect(page.locator("html")).not.toHaveClass(/reduce-motion/);
});

test("Permite reluarea întrebărilor greșite", async ({ page }) => {
  await page.goto("/test");
  await page.getByRole("button", { name: "Începe testul", exact: true }).click();
  await page.getByRole("button", { name: "B Lumea iliriană" }).click();
  await page.getByRole("button", { name: "Verifică răspunsul" }).click();
  await page.getByRole("button", { name: "Următoarea întrebare" }).click();

  const answers = [
    "Sarmizegetusa Regia",
    "O agrafă metalică pentru haine",
    "Credința în nemurire",
    "Secolul al V-lea î.Hr.",
    "Sarmizegetusa Regia",
    "101–102 d.Hr.",
    "Semințe carbonizate, resturi de animale, vase ceramice și unelte",
    "Limba latină",
    "Brățările dacice din aur și coiful de aur de la Coțofenești",
  ];
  for (let i = 0; i < answers.length; i++) {
    await page.getByRole("button", { name: answers[i], exact: false }).click();
    await page.getByRole("button", { name: "Verifică răspunsul" }).click();
    await page.getByRole("button", { name: i === answers.length - 1 ? "Vezi rezultatul" : "Următoarea întrebare" }).click();
  }

  await expect(page.getByText("90% răspunsuri corecte", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Reia întrebările greșite" }).click();
  await expect(page.getByText("Întrebarea 1 din 1", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "A Lumea tracică" }).click();
  await page.getByRole("button", { name: "Verifică răspunsul" }).click();
  await expect(page.getByText("Ai răspuns corect!", { exact: true })).toBeVisible();
});

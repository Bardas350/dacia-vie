import { test, expect } from "@playwright/test";

test("Explorează zece teme cu imagini distincte, inclusiv arta și religia unificată", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("#teme").getByRole("link");
  await expect(cards).toHaveCount(10);
  const images = cards.getByRole("img", { name: /^Reconstituire artistică/ });
  await expect(images).toHaveCount(10);
  const paths = await images.evaluateAll(elements => elements.map(element => element.getAttribute("src")));
  expect(new Set(paths).size).toBe(10);
  for (const path of paths) {
    expect(path).toBeTruthy();
    const response = await page.request.get(path!);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("image/");
  }
  await cards.filter({ has: page.getByRole("heading", { name: "Artă", exact: true }) }).click();
  await expect(page).toHaveURL(/\/arta$/);
  await expect(page.getByRole("heading", { name: "Ceramica: utilitate și expresie" })).toBeVisible();
  await page.goto("/zei");
  await expect(page).toHaveURL(/\/religie$/);
  await expect(page.getByRole("heading", { name: "Zei și religie", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Zalmoxis", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sanctuarele de la Sarmizegetusa", exact: true })).toBeVisible();
});

test("Finalizează testul cu o întrebare despre fiecare dintre cele zece teme", async ({ page }) => {
  await page.goto("/test");
  await page.getByRole("button", { name: "Începe testul", exact: true }).click();
  const answers = [
    "Lumea tracică",
    "Sarmizegetusa Regia",
    "O agrafă metalică pentru haine",
    "Credința în nemurire",
    "Vase ceramice, fibule și brățări",
    "Agricultura, creșterea animalelor și metalurgia",
    "101–102 și 105–106 d.Hr.",
    "Porumbul",
    "Stratul latin",
    "Nu; textul și realitatea povestită trebuie diferențiate",
  ];
  for (let i = 0; i < answers.length; i++) {
    await expect(page.getByText(`Întrebarea ${i + 1} din 10`, { exact: true })).toBeVisible();
    if (i === 4) {
      await expect(page.getByRole("heading", { name: "Ce obiecte ne ajută să cunoaștem arta și meșteșugul dacic?" })).toBeVisible();
    }
    await page.getByRole("button", { name: answers[i], exact: false }).click();
    await page.getByRole("button", { name: "Verifică răspunsul" }).click();
    await expect(page.getByText("Ai răspuns corect!", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: i === 9 ? "Vezi rezultatul" : "Următoarea întrebare" }).click();
  }
  await expect(page.getByRole("heading", { name: "Un explorator atent!" })).toBeVisible();
  await expect(page.getByText("100% răspunsuri corecte", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: "Recitește tema", exact: false })).toHaveCount(10);
});

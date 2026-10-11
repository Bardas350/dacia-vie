import { test, expect } from "@playwright/test";

test("Explorează zece teme cu imagini distincte, inclusiv arta și religia unificată", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("#teme").getByRole("link");
  await expect(cards).toHaveCount(10);
  await expect(cards.last().getByRole("heading")).toHaveText("Artă");
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
  for (const name of ["Brățară spiralată din aur cu motive decorative.", "Coiful de aur de la Coțofenești, vedere frontală.", "Instrument de suflat cu protomă animală, tip carnyx."]) {
    const photo = page.getByRole("img", { name, exact: true });
    await photo.scrollIntoViewIfNeeded();
    await expect(photo).toBeVisible();
    const response = await page.request.get((await photo.getAttribute("src"))!);
    expect(response.headers()["content-type"]).toContain("image/");
  }
  await expect(page.locator("article figcaption")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Ceramică, sculptură și motive decorative" })).toBeVisible();
  await page.goto("/zei");
  await expect(page).toHaveURL(/\/religie$/);
  await expect(page.getByRole("heading", { name: "Zei și religie", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Zalmoxis și credința în nemurire", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sanctuare, ceremonii și ritualuri", exact: true })).toBeVisible();
});

test("Finalizează testul cu o întrebare despre fiecare dintre cele zece teme", async ({ page }) => {
  await page.goto("/test");
  await page.getByRole("button", { name: "Începe testul", exact: true }).click();
  const answers = [
    "Lumea tracică",
    "Sarmizegetusa Regia",
    "O agrafă metalică pentru haine",
    "Credința în nemurire",
    "Secolul V î.Hr.",
    "Sarmizegetusa Regia",
    "101–102 d.Hr.",
    "Semințe carbonizate, resturi de animale, vase ceramice și unelte",
    "Stratul latin",
    "Vase ceramice, fibule și brățări din aur și argint",
  ];
  for (let i = 0; i < answers.length; i++) {
    await expect(page.getByText(`Întrebarea ${i + 1} din 10`, { exact: true })).toBeVisible();
    if (i === 9) {
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
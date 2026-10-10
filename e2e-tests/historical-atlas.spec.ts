import { test, expect } from "@playwright/test";

test("Parcurge capitolele până la artă și consultă atlasul istoric", async ({ page }) => {
  await page.goto("/originea");
  await expect(page.getByRole("heading", { name: "Rădăcinile și Scindarea Tracilor" })).toBeVisible();
  const photos = page.locator('article img[src^="/assets/origine-"]');
  await expect(photos).toHaveCount(2);
  for (const src of await photos.evaluateAll(elements => elements.map(e => e.getAttribute("src")))) {
    const response = await page.request.get(src!);
    expect(response.headers()["content-type"]).toContain("image/");
  }
  await page.getByRole("link", { name: "Continuă cu Răspândire geografică" }).click();
  await expect(page).toHaveURL(/\/raspandire-geografica$/);
  const atlas = page.locator("#harta");
  const stages = [
    ["Tracii", "traci"],
    ["Dacii și geții", "daci-geti"],
    ["Dacia sub Burebista", "burebista"],
    ["Dacia sub Decebal", "decebal"],
  ];
  for (const [name, file] of stages) {
    const button = atlas.getByRole("button", { name: new RegExp(name) });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    const map = atlas.getByRole("img", { name: `Hartă istorică orientativă — ${name}`, exact: true });
    await expect(map).toHaveAttribute("src", `/assets/harta-${file}.jpeg`);
    const response = await page.request.get(`/assets/harta-${file}.jpeg`);
    expect(response.headers()["content-type"]).toContain("image/");
  }
  await atlas.getByRole("button", { name: "Mărește harta", exact: true }).click();
  await expect(atlas.getByText("150%", { exact: true })).toBeVisible();
  await atlas.getByRole("button", { name: "Micșorează harta", exact: true }).click();
  await expect(atlas.getByText("100%", { exact: true })).toBeVisible();
  const destinations = ["Vestimentație", "Zei și religie", "Obiceiuri", "Tactici de luptă", "Gastronomie", "Vocabular", "Legende", "Artă"];
  for (const title of destinations) {
    await expect(page.getByTestId("topic-transition")).toBeVisible();
    await page.getByRole("link", { name: `Continuă cu ${title}`, exact: true }).click();
    await expect(page.getByRole("heading", { level: 1, name: title, exact: true })).toBeVisible();
  }
  await expect(page.getByText("Tema 10 / 10", { exact: false })).toBeVisible();
  await expect(page.getByTestId("topic-transition")).toHaveCount(0);
});

import { test, expect } from "@playwright/test";

test.setTimeout(120000);

test("Descarcă documentul Word complet", async ({ page }) => {
  await page.goto("/surse");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Descarcă documentul Word" }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("dacia-vie-document-complet.docx");
});

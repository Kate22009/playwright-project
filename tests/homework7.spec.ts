import { test, expect } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("https://warsawsneakerstore.com/", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(3000);
  const link = await page.locator("#cmpbntyestxt");
  link.click();
  await page.locator(".header__logo").isVisible();
  const element = await page.waitForSelector(
    '//span[normalize-space()="30 dni na zwrot"]',
    { timeout: 60000 }
  ); // Increase timeout to 60 seconds
  await element.click();
  const elementExists = await page.waitForSelector(
    "h1.landing-page__heading-title",
    { state: "attached" }
  );
  expect(elementExists).not.toBeNull();
  const url = page.url();
  await expect(url).toBe("https://warsawsneakerstore.com/zwroty-i-wymiany");
  await page.locator("#footer-language-button").click();
  // Wait for the language link to appear
  const englishLink = await page.waitForSelector('a.language-select__link[title="English"]');

  if (englishLink) {
    await englishLink.click();
  } else {
    console.error('English link not found');
  }
  
  const returnUrl = page.url();
  await expect(returnUrl).toBe("https://warsawsneakerstore.com/en/returns"); 
});

test("Sale banner test", async ({ page }) => {
  await page.goto("https://warsawsneakerstore.com/", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(3000);
  const link = await page.locator("#cmpbntyestxt");
  link.click();
  await page.locator(".header__logo").isVisible();

  // Click the get started link.
  await page.locator('#top-banner').click();
  const url = page.url();
  await expect(url).toBe("https://warsawsneakerstore.com/products/flags=73");

});
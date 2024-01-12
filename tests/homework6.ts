import { test, expect } from "@playwright/test";

test("Verify page title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
});

test("Veriy successful login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "test@gmail.com");
  await page.fill("input[name=password]", "password");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  //  await expect(page).toHaveTitle('Swag Labs')
});

test("Verify Logout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Login
  await page.fill("#user-name", "test@gmail.com");
  await page.fill("input[name=password]", "password");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  // Logout
  await page.waitForSelector('.bm-burger-button');
  await page.locator('//div[@class="bm-burger-button"]//button').click();
  await page.locator("#logout_sidebar_link").click();
  await expect(page).toHaveTitle("Swag Labs");
});

test("navigation testing", async ({page}) => {
  await page.goto('https://www.apple.com/');
  await page.locator('//a[@aria-label="Mac"]//span[@class="globalnav-link-text-container"]').click();
  const url = page.url();
  await expect(url).toBe('https://www.apple.com/mac/');
});

test('Search Functionality', async ({ page }) => {
  await page.goto('https://ek.ua/');
  await page.getByPlaceholder('Поиск товаров').click();
  await page.getByPlaceholder('Поиск товаров').fill('iphone');
  await page.getByPlaceholder('Поиск товаров').press('Enter');
 
  await page.waitForSelector('.hst'); // Replace with actual selector
  const element = await page.waitForSelector('.hst')
   // Get the text content from the located element
  const elementText = await element.textContent();
  console.log(element)
  const expectedText = 'iphone';
  // Compare the extracted text with the expected value
  await expect(elementText).toBe(expectedText);    
});
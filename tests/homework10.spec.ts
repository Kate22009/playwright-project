import { test, expect } from "@playwright/test";
const LoginPage = require("..\\pages\\loginPage.js");
const RegisterPage = require("..\\pages\\registerPage.js");

test("has title", async ({ page }) => {
  // Navigate to the home page
  await page.goto("./");
  //  Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(`
 PandaZzz - מותג האונליין הגדול בישראל למוצרי שינה – פנדה
`);
});

test("has announcement bar", async ({ page }) => {
  // Navigate to the home page
  await page.goto("./");
  // Wait for the '.announcement-bar' element to appear on the page
  const announcementBar = await page.waitForSelector(".announcement-bar");
  // Check if the announcement bar element exists
  expect(announcementBar).toBeTruthy();
});

test("has correct link to 100 nights page", async ({ page }) => {
  await page.goto("./");
  // Check if   
  await page
    .locator(
      `//ul[@class='inline-list toolbar__menu']//a[contains(text(),'100 לילות')]`
    )
    .click();
  const expectedPath =
    "pages/100-%D7%9C%D7%99%D7%9C%D7%95%D7%AA-%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F";
  const expectedURL = `./${expectedPath}`;
  await expect(page).toHaveURL(expectedURL);
});

test("account can be created for email with @ ", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const timestamp = new Date().getTime(); // Get current timestamp
  const uniqueEmail = `testuser_${timestamp}@example.com`;
  console.log(uniqueEmail)
  await registerPage.signin(uniqueEmail);

});

test("account can not be created with no email", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const emptyEmail = ""
  await registerPage.signin(emptyEmail);
  const errorElement = await page.locator("div.errors ul li").first();
  const errorText = await errorElement.textContent();
  console.log('Error Message:', errorText);
  // Assertion 
  expect(errorText.trim()).toBe('שדה אימייל לא יכול להיות ריק.');
 
});

test("user can log in", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = "testkate22@gmail.com"
  await loginPage.login(email);

});

test("user can not log in with invalid password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = "invalid@gmail.com"
  await loginPage.login(email);
  const errorElement = await page.locator("div.errors ul li").first();
  const errorText = await errorElement.textContent();
  console.log('Error Message:', errorText);
  // Assertion for the test
  expect(errorText.trim()).toBe('פרטי התחברות שגויים, נא לבדוק אם שם המשתמש ו/או הססמא תקינים.');
});
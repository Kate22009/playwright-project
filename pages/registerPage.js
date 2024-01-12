class RegisterPage {

    constructor(page) {
        this.page = page;
    }

    async signin(email) {
        await this.page.goto("./account/register");
        // Fill in the registration form
        await this.page.waitForSelector('#FirstName');
        await this.page.locator('#FirstName').type("John");
        await this.page.locator('#LastName').type("Doe");
        await this.page.locator('#Email').type(email);
        await this.page.locator('#CreatePassword').type("test123");
        await this.page.locator("//input[@type='submit']").click();
    }
}

module.exports = RegisterPage;  
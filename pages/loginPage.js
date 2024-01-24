class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(email) {
        await this.page.goto("./account/login?return_url=%2Faccount");
        await this.page.locator('#CustomerEmail').type(email);
        await this.page.locator('#CustomerPassword').type("test123");
        await this.page.locator("button[class='btn btn--full']").click();
    }
}

module.exports = LoginPage;  

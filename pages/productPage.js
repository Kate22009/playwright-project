class ProductPage {

    constructor(page) {
        this.page = page;
    }

    async navigateToProductpage(url) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });

    }

    async addToBasket() {
        await this.page.locator("//button[contains(@class,'btn btn--full btn-extra')]")
            .click()
    }

}

module.exports = ProductPage;  

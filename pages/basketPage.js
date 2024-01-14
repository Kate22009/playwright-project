class BasketPage {

    constructor(page) {
        this.page = page;
    }

    async getProductName() {
        const element = await this.page.locator("div[id='CartDrawer'] form .ajaxcart__product-name");
        const innerText = await element.innerText();
        return innerText;
    }
}
module.exports = BasketPage;  

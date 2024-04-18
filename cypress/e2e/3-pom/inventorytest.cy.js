import LoginPage from "../../page-objects/pages/LoginPage";
import InventoryPage from "../../page-objects/pages/InventoryPage";
import ItemPage from "../../page-objects/pages/ItemPage";

describe("Item Page", () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const itemPage = new ItemPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");
    });

    it("Перевірка інформації на сторінці товару", () => {
        inventoryPage.clickCartItem(0);
        itemPage.getItemName().should("exist");
        itemPage.getItemDescription().should("exist");
        itemPage.getItemPrice().should("exist");
    });

    it("Перевірка з'явлення кнопок 'Add to cart' та 'Remove'", () => {
        inventoryPage.clickCartItem(0);
        itemPage.getAddToCartButtonText().should("exist");
        itemPage.clickAddToCartButton();
        itemPage.getRemoveButton().should("exist");
        itemPage.clickRemoveButton();
        itemPage.getAddToCartButton().should("exist");
    });
});

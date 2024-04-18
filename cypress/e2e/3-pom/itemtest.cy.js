import LoginPage from "../../page-objects/pages/LoginPage";
import InventoryPage from "../../page-objects/pages/InventoryPage";

describe("Inventory Page", () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");
    });

    it("Провірка наявності UI елементів", () => {
        inventoryPage.getBurgerMenu().should("exist");
        inventoryPage.getCartIcon().should("exist");
        inventoryPage.getSortDropdown().should("exist");
    });

    it("Перевірка кількості опцій у дропдауні сортування", () => {
        inventoryPage.getSortDropdownOptions().should("have.length", 4);
    });

    it("Перехід на сторінку корзини після кліку на іконку корзини", () => {
        inventoryPage.goToCartPage();
        cy.url().should("include", "cart.html");
    });

    it("Перехід на сторінку товару після кліку на айтем", () => {
        inventoryPage.clickCartItem(0);
        cy.url().should("include", "inventory-item.html?id=4");
    });
});


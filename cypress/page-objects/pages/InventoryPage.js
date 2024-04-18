class InventoryPage {
    getBurgerMenu() {
        return cy.get("#react-burger-menu-btn");
    }

    getCartIcon() {
        return cy.get(".shopping_cart_link");
    }

    getSortDropdown() {
        return cy.get(".product_sort_container");
    }

    getSortDropdownOptions() {
        return this.getSortDropdown().find("option");
    }

    getCartItem(index) {
        return cy.get('[data-test="inventory-item-name"]').eq(index);
    }

    clickCartItem(index) {
        this.getCartItem(index).click();
    }

    goToCartPage() {
        this.getCartIcon().click();
    }
}

export default InventoryPage;

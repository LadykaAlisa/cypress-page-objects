class ItemPage {
    getItemName() {
        return cy.get(".inventory_details_name");
    }

    getItemDescription() {
        return cy.get(".inventory_details_desc");
    }

    getItemPrice() {
        return cy.get(".inventory_details_price");
    }

    getAddToCartButton() {
        return cy.get('[data-test="add-to-cart"]');
    }

    getRemoveButton() {
        return cy.get('[data-test="remove"]');
    }

    getAddToCartButtonText() {
        return cy.contains("Add to cart");
    }

    clickAddToCartButton() {
        this.getAddToCartButton().click();
    }

    clickRemoveButton() {
        this.getRemoveButton().click();
    }
}

export default ItemPage;

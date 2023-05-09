class ShopPage{
    getProductName(){
        return cy.get("h4.card-title a")
    }
    getAddToCartButton(){
        return cy.get("button.btn.btn-info")
    }
    getcheckoutButton(){
        return cy.get("a.nav-link.btn.btn-primary")
    }
}
export default ShopPage
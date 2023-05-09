class CheckoutPage{
    getTotal(){
        return cy.get("tr td:nth-child(4) strong")
    }

    getGrandTotal(){
        return cy.get("h3 strong")
    }

    getCheckoutFinalButton(){
        return cy.get("button.btn.btn-success")
    }

    getCountryInput(){
        return cy.get("#country")
    }

    getCountrySuggesstion(){
        return cy.get("div.suggestions a")
    }

    getTermsAndConditionCheckbox(){
        return cy.get("#checkbox2")
    }

    getPurchaseButton(){
        return cy.get("input[type='submit']")
    }
    getOrderPlacedSuccessMessage(){
        return cy.get(".alert.alert-success")
    }

}
export default CheckoutPage
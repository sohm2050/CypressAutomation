import ShopPage from "../e2e/webUIAutomation/pageObjects/ShopPage"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
var shopPage = new ShopPage
Cypress.Commands.add('selectProduct',(productName) =>{
shopPage.getProductName().each(($el,index,$list)=>{
    var mobileName = $el.text()
    if(mobileName == productName){
        shopPage.getAddToCartButton().eq(index).click()
    }
})

})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import HomePage from "../pageObjects/HomePage"
import ShopPage from "../pageObjects/ShopPage"
import CheckoutPage from "../pageObjects/CheckoutPage"
describe('Test Suite', function(){
    var home
    var shop
    var checkout
    before('Setup',function(){
        cy.fixture('testData').then(function(data){
            this.data = data
        });
        home = new HomePage
        shop = new ShopPage
        checkout = new CheckoutPage
    });

    it('Test Home Page', function(){
        
        cy.visit(Cypress.env('url')+"/angularpractice/")
        home.getName().type(this.data.name)
        home.getEmail().type(this.data.email)
        home.getPassword().type(this.data.password)
        home.getCheckbox().check().should('be.checked')
        home.getGender().select(this.data.gender)
        home.getEmploymentStatus().check(this.data.employmentStatusValue)

        home.getEmploymentStatus().each(($el,index,$list)=>{
            home.getEmploymentStatus().eq(index).next().then(function(radioButton){
                const radioName = radioButton.text()
                if(radioName==this.data.employmentStatus){
                    cy.wrap($el).click()
                }
            })

        })


        home.getDateOfBirth().type(this.data.dob)
        home.getSubmitButton().click()
        home.getTwoWayBinding().should('have.value',this.data.name)
        home.getSuccessMessage().should('be.visible')


    })

    
})
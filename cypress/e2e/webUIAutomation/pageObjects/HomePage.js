class HomePage{

    getName(){
        return cy.get("input[name='name']:nth-child(2)")
    }
    getEmail(){
        return cy.get("input[name='email']")
    }
    getPassword(){
        return cy.get('#exampleInputPassword1')
    }
    getCheckbox(){
        return cy.get('#exampleCheck1')
    }
    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }
    getEmploymentStatus(){
        return cy.get("input[type='radio']")
    }
    getDateOfBirth(){
        return cy.get("input[type='date']")
    }
    getSubmitButton(){
        return cy.get(".btn.btn-success")
    }
    getTwoWayBinding(){
        return cy.get("input[name='name']:nth-child(1)")
    }
    getSuccessMessage(){
        return cy.get("div.alert.alert-success")
    }
    getShopLink(){
        return cy.get(":nth-child(2)>.nav-link")
    }

}
export default HomePage
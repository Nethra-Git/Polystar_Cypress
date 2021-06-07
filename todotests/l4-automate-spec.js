/// <reference types="cypress" />

describe('todo actions', () =>{
    it('should login after entering email and password',()=>{
        cy.visit('https://www.linkedin.com/') 
        cy.get('[action-type="ACCEPT"]').click()
        //cy.contains('Sign in').click()
        cy.get('.nav__button-secondary').click()


        //cy.get('#session_key').type('qa001.polystar@gmail.com')       
        //cy.get('#session_password').type('Test123!')
        //cy.get('.sign-in-form__submit-button').click()
        //cy.contains('Sign in').click()

        cy.get("input[id='username']").clear().type("qa001.polystar@gmail.com")
        cy.get("input[id='password']").clear().type("Test123!")
        cy.get('.btn__primary--large').click()
    })

    it('should logout from the page',() =>{
        //cy.contains('Sign in').click()
        cy.get('#ember32').click()
        cy.contains('Sign Out').should('be.visible').click()
        cy.contains('Sign in').should('be.visible')
    })


})
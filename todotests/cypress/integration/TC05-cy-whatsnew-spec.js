/// <reference types="Cypress" />
 
describe('to check subscribe newsletter function', () => {
  
    it('users can subscribe newsletter on page', () => {   
        cy.visit('https://www.cypress.io/whats-new')
        cy.scrollTo('bottom')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("input[id='input-footer-email']").type('qa001.polystar@gmail.com')
        cy.get('button[type="submit"]').click()
        cy.contains('Thanks for submitting the form').should('be.visible')
        cy.reload()
       
    })
  
    it('check for negative scenario with no email id', () => {
        cy.get('button[type="submit"]').dblclick()
        cy.contains('Please complete this required field').should('be.visible')
    })
  
    it('check for negative scenario with invalid email id', () => {   
        //cy.get('#onetrust-accept-btn-handler').click()
        cy.get("input[id='input-footer-email']").type('qa001polystargmail.com')
        cy.get('button[type="submit"]').click()
        cy.contains('Email must be formatted correctly.').should('be.visible')
    })
   
  
})
  
 
 
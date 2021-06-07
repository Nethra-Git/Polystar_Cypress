/// <reference types="Cypress" />
 
describe('scroll section by section feature', () => {
  
    it('should scroll section by section', () => {
        cy.visit('https://www.cypress.io/features')
        cy.get('#onetrust-accept-btn-handler').click()
   
        //cy.get(':nth-child(1) > .col-lg-5 > h3').scrollIntoView().should('be.visible')
        cy.contains('Setting up tests').scrollIntoView().should('be.visible')
        cy.wait(3000)
        cy.get(':nth-child(2) > .col-lg-5 > h3').scrollIntoView()
        cy.wait(3000)
        cy.get(':nth-child(3) > .col-lg-5 > h3').scrollIntoView().should('be.visible')
        cy.wait(3000)
        cy.get('.mb-0 > .col-lg-5 > h3').scrollIntoView()
        cy.wait(3000)
        cy.contains('Get Started').scrollIntoView().should('be.visible')
        cy.wait(4000)
  
    })
   
  
})
  
 
 
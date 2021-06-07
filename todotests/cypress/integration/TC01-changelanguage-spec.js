/// <reference types="cypress" />
before(() => {
    cy.setCookie('lang',"{'domain':'https://www.linkedin.com/', 'secure':'true','value':'v=2&lang=sv-SE'}");
  });
  
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('lang')
  });

describe('to change language cookie', () =>{
    it('should navigate to the linkedin page', () => {
        cy.visit('https://www.linkedin.com/') 
        cy.contains('Logga in').should('be.visible') 

    })
})
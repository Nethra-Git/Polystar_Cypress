/// <reference types="cypress" />

export class LoginPage {
    navigate(link) {
      cy.visit(link)
    }

    acceptCookies() {
        cy.get('[action-type="ACCEPT"]').click()
    }
  
    openSignInScreen() {
        cy.get('.nav__button-secondary').click()
    }
  
    login(email, password) {
      cy.get("input[id='username']").clear().type(email)
      cy.get("input[id='password']").clear().type(password)
      //cy.get('.btn__primary--large').click({force: true})
      //cy.get('.login__form_action_container').click()
      cy.contains('My Network').should('be.visible')
      cy.wait(4000)
      cy.get('.msg-overlay-bubble-header').click()
    }

    loginfail(email, password) {
      cy.get("input[id='username']").clear().type(email)
      cy.get("input[id='password']").clear().type(password)
      //cy.get('.btn__primary--large').click()
      //cy.get('#error-for-password')
      cy.contains('That’s not the right password.').should('be.visible')
      
    }

    logout() {
        //cy.get('#ember32').click()
        cy.get('.global-nav__primary-items>li').eq(5).click()
        cy.contains('Sign Out').should('be.visible').click()
    }

}
/// <reference types="cypress" />

export class JobSearchPage {
    navigate(link) {
      cy.visit(link)
    }

    gotoSearchJob() {
      cy.get('#ember23').click()
      //cy.get('#jobs-search-box-keyword-id-ember238').type('tester')
      cy.get('.jobs-search-box__text-input').type('tester')
      //cy.get('#jobs-search-box-location-id-ember238').type('stockholm{enter}')
    
    }


}
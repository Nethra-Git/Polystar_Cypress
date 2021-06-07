/// <reference types="cypress" />
import { LoginPage } from '../page-objects/LoginScreen'
import { JobSearchPage } from '../page-objects/JobSearchPage'

describe('Todo Job page and messaging actions', function (){
    context('when we want to run Job search', function(){
        const loginPage = new LoginPage()
        const jobSearchPage = new JobSearchPage()
        const emailAddress = "qa001.polystar@gmail.com"
    
        /*before(() =>{
            cy.visit('https://www.linkedin.com/jobs')
            cy.get('[action-type="ACCEPT"]').click()
            cy.get('.nav__button-secondary').click()
            cy.getCookies()
        })*/
    
        /*beforeEach(() => {
            Cypress.Cookies.preserveOnce()
          });*/
        
    
        it('To do Job page actions', () => {
            cy.visit('https://www.linkedin.com/jobs')
            cy.get('[action-type="ACCEPT"]').click()
            cy.get('.nav__button-secondary').click()
            cy.getCookies()
            loginPage.login(emailAddress,"Test123!{enter}")
            // To minimize mesage window
            //cy.get('.msg-overlay-bubble-header').click()
            //cy.get('.global-nav__primary-items>li').eq(2).click()
            cy.get('.jobs-search-box__input-icon.jobs-search-box__keywords-label')
            .type('Tester')
            cy.get('.jobs-search-box__input.jobs-search-box__input--location')
            .clear()
            .type('Stockholm{enter}')
            cy.get('.jobs-search-results-list__title-heading')
            .contains('Tester in Stockholm').should('be.visible')
            cy.wait(2000)
            cy.get('.global-nav__primary-items>li').eq(0).click()
            cy.get('.global-nav__primary-items>li').eq(3).click()
            //> .scrollable
            //cy.get('.msg-connections-typeahead__top-fixed-section')
            //.select('Tobias Karlsson', { force: true })
            cy.get('.msg-form__contenteditable').type('Hello, Test message 1?')
            cy.get('.msg-form__send-button').click({force: true})
        })
        after(function(){
            Cypress.Cookies.preserveOnce()
        })
    
        /*it('To send message to a connections', () => {
            //cy.visit('https://www.linkedin.com/messaging/thread/new/')
            cy.get('[action-type="ACCEPT"]').click()
            //cy.get('.main__sign-in-link').click()
            cy.get('.global-nav__primary-items>li').eq(3).click()
            cy.wait()
        })*/

    })
 

})
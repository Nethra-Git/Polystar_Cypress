/// <reference types="cypress" />
import { LoginPage } from '../page-objects/LoginScreen'

describe('Todo actions', () => {
    const loginPage = new LoginPage()
    const emailAddress = "qa001.polystar@gmail.com"

    before(() =>{
        cy.visit('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')
        //cy.visit('https://www.linkedin.com/')
    })
 
    /*it('should accept cookies and go to sign in page', () => {
        loginPage.acceptCookies()
        loginPage.openSignInScreen()
    })*/

    /*it('failed login', () => {
        loginPage.loginfail(emailAddress,"Test13!{enter}")
    })*/
 
    it('should login', () => {
        loginPage.login(emailAddress,"Test123!{enter}")
    })

    it('should logout', () => {
        loginPage.logout()
    })


})
/// <reference types="cypress" />
import LoginPage from "./pages/LoginPage.js"

describe("Login", () => {

  const UL = new LoginPage()
  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of tests,
    // we include it in our before function so that it runs before test
    cy.visit("https://www.planradar.com/login?redirect=/dr/1285447/projects/1285448/details")
})
  it("login valid", () => {
    //this line to read test dat from json file
    cy.fixture('data').as('data')
    cy.get('@data').then(input => {
    UL.Login(input.Email,input.Password)
    //this line we use it to ensure user is logged in to his/her accoount also credentials was correctly by checking url
    cy.url().should('include', '/dr')
    })
  })


})

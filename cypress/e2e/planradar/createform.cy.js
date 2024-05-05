/// <reference types="cypress" />
import LoginPage from "./pages/LoginPage.js"
import FormPage from "./pages/FormPage.js"

describe("Login", () => {

    const UL = new LoginPage()
    const FP = new FormPage()
    before(() => {
      cy.visit("https://www.planradar.com/login?redirect=/dr/1285447/projects/1285448/details")
      cy.fixture('data').as('data')
      cy.get('@data').then(input => {
      UL.Login(input.Email,input.Password)
  })
    })
  
    it("create form", () => {
        //next three lines used to define needed data to create form because form name is mandatory field to create form
        const FormName = "construction form"
        const FormDescription = "This form is meant to be used for all construction task tickets"
        const ElementDefaultValue = 'enter ticket title'
        //this line used to call method from form page class
        FP.createF(FormName,FormDescription,ElementDefaultValue)
        //this line we make an assertion to make sure that the form is created
        cy.get('.ReactVirtualized__Grid__innerScrollContainer').should('contain',FormName)
    
    })
  
  })
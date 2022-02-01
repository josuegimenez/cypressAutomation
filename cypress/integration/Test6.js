/// <reference types="Cypress" />

describe('My Sixth Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('#opentab').invoke('removeAttr','target').click()

cy.url().should('include',"rahulshettyacademy")
cy.go("back")
})
})
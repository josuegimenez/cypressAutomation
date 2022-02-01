/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Iframes Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded("#courses-iframe")
cy.iframe().find("[href*='mentor']").eq(0).click()


})
})
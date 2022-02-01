/// <reference types="Cypress" />

describe('My Fourth Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get("#displayed-text").should('be.visible');

cy.get('#hide-textbox').click()
cy.get("#displayed-text").should('not.be.visible');
cy.get('[value="radio2"]').check().should('be.checked');



})
})
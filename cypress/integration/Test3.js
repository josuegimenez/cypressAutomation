/// <reference types="Cypress" />

describe('My Third Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#checkBoxOption1').check().should("be.checked").and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
cy.get("[id*='checkBoxOption']").check(); //te selecciona todo los checkboxes que contengan ese texto
cy.get('select').select('Option2').should('have.value','option2');

cy.get('#autocomplete').type('ind')
cy.get("[class='ui-menu-item-wrapper']").each(option=>{
    if(option.text()==("India"))
    {cy.wrap(option).click()}
})
cy.get('#autocomplete').should('have.value','India')



})
})
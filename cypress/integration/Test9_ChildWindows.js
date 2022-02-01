/// <reference types="Cypress" />



describe('My Eight Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// cy.get('#opentab').invoke('attr', 'href')
cy.get('#opentab').then(el=>{
    const url= el.prop('href')
    cy.log(url)
    cy.visit(url)
})


})
})
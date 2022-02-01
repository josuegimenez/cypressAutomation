/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
// import { data } from 'cypress/types/jquery';

describe('Framework Test Suite', function(){

    let testData;
    before(() => {

        cy.fixture('example').then(data=>{
    
            testData=data;
        })
          })
    
it('My First Test Case', function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("form div [name='name']").type(testData.name)
    cy.get("#exampleFormControlSelect1").select(testData.gender)
    
cy.get("[name='name']:nth-child(1)").should('have.value',testData.name)



cy.get("[name='name']:nth-child(2)").then(e=>{
    const minLength= e.prop('minLength')
    expect(minLength).to.equal(2)
})
//alternativa a lo de arriba sería:
cy.get("[name='name']:nth-child(2)").should('have.attr','minlength','2')

cy.get("#inlineRadio3").should('be.disabled')

cy.get(".navbar-nav li:nth-child(2)").click()

cy.selectProduct("iphone")


})
})
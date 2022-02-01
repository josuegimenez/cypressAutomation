
/// <reference types="Cypress" />

describe('My Third Test Suite', function(){
    it('My First Test Case', function(){
        // failOnStatusCode: false

        // cy.visit(failOnStatusCode: false,
        //     )

// cy.visit('www.amazon.es')
// cy.get('#a-autoid-0').click()
// cy.get('.nav-search-field').type('The Happiness Hypothesis')
// cy.get("#nav-search-submit-button").click()
// cy.wait(2000)
// cy.get('[data-index="6"]').click()
// // cy.get("[data-cel-widget='search_result_0']").click()
// cy.log("link de la portada:" )

// const autor=cy.get('.author > span.a-declarative > .a-link-normal').then(texto=>{texto.text()})
// cy.log("Autor: " +autor)




//NOTION
cy.visit("https://www.notion.so/7dbf95702a004dd5b0db3b3f80b67669?v=b24649d5ae684ef78c1cadfabeeedbca",{failOnStatusCode: false})
cy.get('#notion-email-input-1').type("bonsaide8pisos@gmail.com")
cy.get('div[role="button"]').contains('email').click()
cy.get('#notion-password-input-2').type("70veces7")
cy.get('[style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; border-radius: 3px; height: 32px; padding: 0px 12px; font-size: 14px; line-height: 1.2; border: 1px solid rgba(55, 53, 47, 0.16); margin-top: 6px; margin-bottom: 12px; width: 100%;"]').click
cy.get('div[role="button"]').contains('password').click()
cy.get('[style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: rgb(46, 170, 220); align-self: stretch; box-shadow: rgba(55, 53, 47, 0.16) 1px 0px 0px inset; border-top-right-radius: 3px; border-bottom-right-radius: 3px;"]').click()
cy.get(':nth-child(2) > [style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: 100%;"] > [style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;"] > [style="margin-left: 8px; margin-right: 14px; min-width: 0px; flex: 1 1 auto;"] > :nth-child(1) > .notranslate').click()
})
})
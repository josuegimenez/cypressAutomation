/// <reference types="Cypress" />



describe('My Third Test Suite', function(){
it('My First Test Case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


cy.get("tr td:nth-child(2)").each((row,index)=>
    {
    if(row.text().includes("Master Selenium")){
        const valor=row.next().text()
        expect(valor).to.equal("25")

        

    }
    })

// cy.get("[class='ui-menu-item-wrapper']").each(option=>{
//     if(option.text()==("India"))
//     {cy.wrap(option).click()}
// })
// cy.get('#autocomplete').should('have.value','India')



})
})
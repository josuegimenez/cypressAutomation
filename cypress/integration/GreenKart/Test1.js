describe('My First Test Suite', function(){
it('My First Test Case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)
    
    // cy.get('.products').find('.product').should('have.length',4)

    // cy.get('.products').find('.product').contains("CART").each().click()
    cy.get('.products').as('productosLocator')
    cy.get('@productosLocator').find('.product').each((product) => {
        
        const textVeg=product.find('h4.product-name').text();
        if(textVeg.includes("Cauliflower")) {
            cy.wrap(product).find('button').click()}
    })

    // cy.get("[class*='brand']").then(logo=>{cy.log(logo.text())})
    

    cy.get("[class*='brand']").should('contains.text','GREEN')
    
    
    cy.log("hola Josu de cypress").then(()=>{console.log("hola Josu!")})

    // cy.get('.products').find('.product').contains("Carrot").parent().contains("CART").click()


})

it('My Second Test Case', function(){
    
})


})
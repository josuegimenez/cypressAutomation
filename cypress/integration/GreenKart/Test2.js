describe('My Second Test Suite', function(){
it('My First Test Case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
    cy.get('.search-keyword').type("ca"); cy.wait(2000)
    
    cy.get('.products').as('productosLocator')
    cy.get('@productosLocator').find('.product').each((product) => { 
        const textVeg=product.find('h4.product-name').text();
            if(textVeg.includes("Cash")) {cy.wrap(product).find('button').click()}
    })
    cy.get('[alt="Cart"]').click()


    
    cy.contains('CHECKOUT').click()
    //------alternativa
//    cy.get('button').each((button)=>{
//        if(button.text().includes('CHECKOUT'))button.click()
//    })//text().includes('PROCEED TO CHECKOUT').click();

cy.contains('Place').click()



})
})
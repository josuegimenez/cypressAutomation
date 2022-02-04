class Checkout
{
   
    getCheckoutButton(){
    // return cy.get("button[class='btn btn-success']")
    return cy.contains("Checkout")
}
}
export default Checkout
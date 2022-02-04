class Products
{
    getCheckoutTab(){
        return cy.get("a[class='nav-link btn btn-primary']")
    }

}
export default Products
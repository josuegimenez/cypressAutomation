class HomePage
{
    getEditBox()
    {
        return cy.get("form div [name='name']")
    }
    getGender()
    {
        return cy.get("#exampleFormControlSelect1")
    }
    getTwoWayDataByName()
    {
        return cy.get("[name='name']:nth-child(1)")
    }
    getEntrepeneur(){
        return cy.get("#inlineRadio3")
    }
    funcionlinea33()
    {
    return cy.get("[name='name']:nth-child(2)")
    }
    getShopTab()
    {
        return cy.get(".navbar-nav li:nth-child(2)")
    }
}

export default HomePage;
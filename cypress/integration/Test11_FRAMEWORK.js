/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import { home } from 'ospath';
import HomePage from './pageObjects/HomePage'
import Products from './pageObjects/Products'
import Checkout from './pageObjects/Checkout'
// import { data } from 'cypress/types/jquery';

describe('Framework Test Suite', function(){

    let testData;
    //El before es un hook, que lo que hace es ejecutar este código antes de todos los tests
    before(() => {

        //Pillo los datos del file example que está en la carpeta fixtures, se usa cy.fixture para ello
        cy.fixture('example').then(data=>{ 
            testData=data;
        })
          })
    
it('My First Test Case', function(){

    const homePage=new HomePage()
    const product=new Products()
    const checkout=new Checkout()
    cy.visit(Cypress.env("url")+"/angularpractice/")

    homePage.getEditBox().type(testData.name) //pones el nombre (del fichero "example.json") en el form que apunta el selector
    homePage.getGender().select(testData.gender) //poner el valor de gender del fichero example en el dropdown (select) del selector select1
    homePage.getTwoWayDataByName().should('have.value',testData.name)//Assertion: compruebas que lo que pusimos arriba está en esta caja
//cy.get("[name='name']:nth-child(1)").should('have.value',testData.name) 


//Comprobamos que el mínimo número de carácteres sea 2
//Opción 1
/*cy.get("[name='name']:nth-child(2)").then(e=>{
    const minLength= e.prop('minLength')
    expect(minLength).to.equal(2)
})*/
//Opción 2: alternativa a lo de arriba sería:
homePage.getEditBox().should('have.attr','minlength','2')
//cy.get("[name='name']:nth-child(2)").should('have.attr','minlength','2')


//Assertion de que un radio button no está seleccionado
homePage.getEntrepeneur().should('be.disabled')

//Click en SHOP
homePage.getShopTab().click()

//selecciona el iphone, pero no entiendo muy bien por qué? --> el selectProduct es un custom method, lo creamos en support/commands.js
//cómo se hace la conexión? creo que se añade de manera automática a la lista de métodos cuando se añade un método en commands-js
//--Hemos sustituído este método por el de abajo, donde selecciona automáticamente todos los elementos que le metamos al array de product en example.json
//--cy.selectProduct("iPhone")

//Tengo el array testData.product (que es un array) y por cada elemento lo recorro y le hago el selectProduct. No hay que preocuparse si no te acuerdas del foreach, todo se busca en google
testData.product.forEach(element => cy.selectProduct(element))
product.getCheckoutTab().click()
var sum_price=0
 cy.get("td:nth-child(4) strong").each((price)=>{sum_price=sum_price+Number(price.text().split(" ")[1])})
 .then(function(){console.log(sum_price)})

cy.get("td:nth-child(5) strong").then(function(el){
    let total= Number(el.text().split(" ")[1])
    expect(total).to.equal(sum_price)
})
    

checkout.getCheckoutButton().click()

cy.get("#country").type("India")
cy.get(".suggestions ul li a").click()
cy.get("#checkbox2").click({force:true}) //ponemos el force:true porque si no da un error raro de que está cubierto por otro elemento. de esta manera obviamos el warning y clickamos de todas maneras
cy.get("input[value='Purchase']").click()

cy.get(".alert").should("contains.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
})
})
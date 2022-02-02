/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
// import { data } from 'cypress/types/jquery';

describe('Framework Test Suite', function(){

    let testData;
    //El before es un hook, que lo que hace es ejecutar este código antes de todos los tests
    before(() => {

        //Pillo los datos del file example que está en la carpeta fixtures, se usa cy.fixture para ello
        cy.fixture('example').then(data=>{ 
            this.testData=data;
        })
          })
    
it('My First Test Case', function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("form div [name='name']").type(testData.name) //pones el nombre (del fichero "example.json") en el form que apunta el selector
    cy.get("#exampleFormControlSelect1").select(testData.gender) //poner el valor de gender del fichero example en el dropdown (select) del selector select1
    
cy.get("[name='name']:nth-child(1)").should('have.value',testData.name) //Assertion: compruebas que lo que pusimos arriba está en esta caja


//Comprobamos que el mínimo número de carácteres sea 2
//Opción 1
cy.get("[name='name']:nth-child(2)").then(e=>{
    const minLength= e.prop('minLength')
    expect(minLength).to.equal(2)
})
//Opción 2: alternativa a lo de arriba sería:
cy.get("[name='name']:nth-child(2)").should('have.attr','minlength','2')


//Assertion de que un radio button no está seleccionado
cy.get("#inlineRadio3").should('be.disabled')

//Click en SHOP
cy.get(".navbar-nav li:nth-child(2)").click()

//selecciona el iphone, pero no entiendo muy bien por qué? --> el selectProduct es un custom method, lo creamos en support/commands.js
//cómo se hace la conexión? creo que se añade de manera automática a la lista de métodos cuando se añade un método en commands-js
//--Hemos sustituído este método por el de abajo, donde selecciona automáticamente todos los elementos que le metamos al array de product en example.json
//--cy.selectProduct("iPhone")

//Tengo el array testData.product (que es un array) y por cada elemento lo recorro y le hago el selectProduct. No hay que preocuparse si no te acuerdas del foreach, todo se busca en google
testData.product.forEach(element => cy.selectProduct(element))


})
})
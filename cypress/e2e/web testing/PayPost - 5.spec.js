/// <reference types="Cypress" />
let mainDomainUrl,width
describe('FE WEB: [All Page] Restrict the layout to the mobile mode',()=> {
    beforeEach(() => {
        mainDomainUrl = "https://sg-order.flash-coffee.xyz/"
    })
    it('set the height = 200px for the product image on the product list',() =>{
        cy.visit(mainDomainUrl)
        cy.get('.rounded-lg').contains('Place Pickup Order').click()
        cy.wait(2000)
        cy.get('.font-sans').contains('DEV AMK Hub').click()
        cy.get('.rounded').invoke('outerHeight').should('eq', 200);
    })
    it('set fixed width=672px or 42rem to all screen',() =>{
        cy.visit(mainDomainUrl)
        cy.get('html').invoke('width').should('be.lessThan',673)
    })  
})
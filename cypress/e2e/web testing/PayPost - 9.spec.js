/// <reference types="Cypress" />

const { url } = require("inspector")

let mainDomainUrl,testUrl

describe('Add logic for The category dropdown changeable when scroll',()=>{
    beforeEach(() => {
        mainDomainUrl = "https://sg-order.flash-coffee.xyz"
    })
    it('click dropdown will open category list',() =>{
        cy.visit('https://sg-order.flash-coffee.xyz')
        cy.get('.rounded-lg').contains('Place Pickup Order').click()
        cy.wait(2000)
        cy.get('.font-sans').contains('DEV AMK Hub').click()
        cy.get('.font-druk').contains('Snacks').scrollIntoView({ duration: 3000 })
        cy.url().then(url => {
            cy.get('body > div.h-full > div.p-4.bg-color-neutral-wo-00.sticky.top-0 > div > li').click()
          });
         //testUrl= cy.url()
        //cy.get('body > div.h-full > div.p-4.bg-color-neutral-wo-00.sticky.top-0 > div > li').click()
        cy.get('body').then($body => {
            if ($body.find('li').html) {
              return 'li';
            }
            //return '.popup';
          })
          .then(selector => {
            cy.get(selector);
          });
    })
    it('the selected categories should be in Accent/04 color and font-weight : 600px',() =>{
        //cy.visit(testUrl)
        cy.go('back')
        cy.get('body').then($body => {
            if ($body.find('li').html){
                return'li';
            }
        }).then(selector => {
            cy.get(selector).find('Span').contains('Signatures Lattes').click()
            cy.get(selector).find('Span').contains('Signatures Lattes').should('have.class','font-sans text-fz-15 leading-5 tracking-ls-min-04 whitespace-pre-wrap text-color-accent-04 font-semibold')
        })
    })
})
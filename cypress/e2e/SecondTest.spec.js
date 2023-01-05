/// <reference types="Cypress" />
describe('link need to be clicked',()=>{
    it('scroll to other categories',()=>{
        //cy.visit('https://web-prototype-consumer.fly.dev/')
        cy.visit('https://web-prototype-consumer.fly.dev/store-menus/898d12dc-b4a4-11ec-9298-0ad64c6be1ec?categoryId=%22edd82c03-1a12-4cfb-8924-f780ac596a2d%22')
        //cy.get('body > div > div.px-6.mt-4 > button').click()
        cy.wait(2000)
        cy.get('#CategorySectionf1f5b651-6724-48e5-a36a-6449da590574 > div.grid.grid-cols-2.gap-3').scrollIntoView()
     })
    it.only('click categories drop down list',()=>{
        cy.clearCookies()
        cy.visit('https://sg-order.flash-coffee.xyz/')
        cy.get('.rounded-lg').contains('Place Pickup Order').click()
        cy.wait(2000)
        cy.get('.font-sans').contains('DEV AMK Hub').click()
        //cy.get('.font-druk').contains('PICK UP')
        cy.get('.font-druk').contains('Snacks').scrollIntoView({ duration: 5000 })
        cy.get('body > div.h-full > div.p-4.bg-color-neutral-wo-00.sticky.top-0 > div > li').click()
        cy.get('.font-sans').contains('Signatures Lattes').click()
        cy.get('body > div > div.p-4.bg-color-neutral-wo-00.sticky.top-0 > div > li > div.flex.items-center > span').should('have.text','Signatures Lattes')
    })
    it('max width= 672',() =>{
        cy.visit('https://sg-order.flash-coffee.xyz/')
        cy.get('html').should('have.css', 'max-width', '672px')
    })
    it('product images height 200 px',() =>{
        cy.clearCookies()
        cy.visit('https://sg-order.flash-coffee.xyz/')
        cy.get('.rounded-lg').contains('Place Pickup Order').click()
        cy.wait(2000)
        cy.get('.font-sans').contains('DEV AMK Hub').click()
        cy.get('#CategorySectionf1f5b651-6724-48e5-a36a-6449da590574 > div.grid.grid-cols-2.gap-3 > div:nth-child(1) > img').invoke('outerHeight').should('eq', 200);
    })
    it('to check if there is a specific css',() => {
        cy.go('back')
        cy.get('body').then($body => {
            if ($body.find('li').html){
                return'li';
            }
        }).then(selector => {
            cy.get(selector).each(($li, index, $lis) => {
                return 'something else'
            })
            .then(($lis) => {
                expect($lis.find('span')).to.have.class('font-sans text-fz-15 leading-5 tracking-ls-min-04 whitespace-pre-wrap text-color-accent-04 font-semibold')
            })
        })
    })

})
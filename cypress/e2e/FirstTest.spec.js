/// <reference types="Cypress" />
describe('The first suite',()=>{
    it('first test',()=>{
        cy.visit('localhost:4200')
        cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-1.ng-star-inserted > a > span').click()
        cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-1.ng-star-inserted > ul > li.menu-item.ng-tns-c7-2.ng-tns-c7-1.ng-star-inserted > a > span').click()
        cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-components > ngx-stepper > nb-card > nb-card-body > nb-stepper > div.step-content > button:nth-child(3)').click()
        cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-components > ngx-stepper > nb-card > nb-card-body > nb-stepper > div.step-content > button:nth-child(3)').click()
        cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-components > ngx-stepper > nb-card > nb-card-body > nb-stepper > div.step-content > button:nth-child(2)').click()
    })
   // it('second test',()=>{

   // })
    //it('third test',()=>{

    //})
})
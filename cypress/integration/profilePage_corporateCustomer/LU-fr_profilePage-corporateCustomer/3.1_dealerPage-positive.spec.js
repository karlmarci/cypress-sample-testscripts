import { createYield } from "typescript";
// <references types = "Cypress" />
import Chance from 'chance';
const number = chance.string({length:5, pool:'1234567890'})
const name = chance.name()
const street = chance.street()
const zip = chance.zip()
const city = chance.city()
describe('STIHL preg dealer', function(){
    beforeEach(()=>{
        cy.fixture('products').then((products)=>{
            localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products))
            localStorage.setItem('local.app.v5.0.0_app.lang', '"LU_fr"')
            localStorage.setItem('local.app.v5.0.0_app.country', '"LU"')
            localStorage.setItem('local.app.v5.0.0_productPagePassed', '1')
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T112 */
    it('Access dealer page', function(){
        cy.visit('/dealer')
    })
    it('Clicking [Select dealer manually]', function(){
        cy.get('[data-cy=select-manually-btn]').click()
        cy.get('.modal')
            .should('be.visible')
    })
    it('Create a new dealer manually', function(){
        cy.get('[data-cy=dealer-name-modal]').type(name)
            .should('have.value', name)
        cy.get('[data-cy=dealer-street-modal]').type(street)
            .should('have.value', street)
        cy.get('[data-cy=dealer-zip-modal]').type(zip)
            .should('have.value',zip)
        cy.get('[data-cy=dealer-city-modal]').type(city)
            .should('have.value', city)
        cy.get('[data-cy=dealer-number-modal]').type(number)
            .should('have.value', number)
    })
    it('Clicking [Set Dealer]', function(){
        cy.get('[data-cy=set-dealer-btn]').click()
        cy.get('[data-cy=add-info-btn]')
            .should('not.have.attr', 'disabled')
    })
    it('Clicking [Add personal infomation]', function(){
        cy.get('[data-cy=add-info-btn]').click()
        cy.url().should('include', '/profile')
    })
})
/// <reference types="Cypress" />

describe('Product Module', () => 
{
    /*
    PREG-T31
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T31
    */

    it('Validate serial number & date of purchase textfield', () => 
    {
        cy.selectCountryLanguage_BeFr()
        cy.visit('/product')

        const date = Cypress.moment().format('DD.MM.YYYY')
        cy.get('[data-cy=serial-no-txt').type('1-11-111-111')
            .should('have.value', '1-11-111-111')
        cy.get('[data-cy=serial-date-txt]').type(date)
            .should('have.value', date)
    })

    it('Click Choose Dealer', () => 
    {
        cy.get('[data-cy=choose-dealer-btn]').click()
        cy.url().should('include', '/#/dealer')
    })

})
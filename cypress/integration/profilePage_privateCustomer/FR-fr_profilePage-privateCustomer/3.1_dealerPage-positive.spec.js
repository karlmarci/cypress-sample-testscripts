/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Dealer Module', () => 
{
    const name = chance.name();
    const street = chance.street();
    const number = chance.string({length: 3, pool: '1234567890'});
    const zip = chance.zip();
    const city = chance.city();

     /*
    PREG-T112
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T112
    */

    it('Add personal Information', () => 
    {
        cy.selectCountryLanguage_FRfr()
        cy.fixture('products').then((products) => 
        {
            localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products));
            localStorage.setItem('local.app.v5.0.0_productPagePassed', 1);
        })

        cy.visit('/dealer').scrollTo("bottom")

        cy.get('[data-cy=select-manually-btn]').click()
        cy.get('[data-cy=dealer-modal]').should('be.visible')

        cy.addDealer(name,
            street,
            number,
            zip,
            city)
            
        cy.get('[data-cy=dealer-name-modal]').should('have.value',name)
        cy.get('[data-cy=dealer-street-modal]').should('have.value',street)
        cy.get('[data-cy=dealer-number-modal]').should('have.value',number)
        cy.get('[data-cy=dealer-zip-modal]').should('have.value',zip)
        cy.get('[data-cy=dealer-city-modal]').should('have.value',city)

        cy.get('[data-cy=set-dealer-btn]').click()
        cy.get('[data-cy=dealer-modal]').should('not.be.visible')

        cy.get('[data-cy=add-info-btn]').click()
        cy.url().should('include', '/#/profile')
    })
})
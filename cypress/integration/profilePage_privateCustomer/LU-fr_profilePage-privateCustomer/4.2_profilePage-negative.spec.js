/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Negative Scenarios', () => 
  {
    beforeEach(() => {

      cy.selectCountryLanguage_LUfr()

      cy.fixture('products').then((products) => 
    {
      localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products));
      localStorage.setItem('local.app.v5.0.0_productPagePassed', 1);
    })

      cy.fixture('LU/dealers-fr').then((dealers) => 
    {
      localStorage.setItem('local.app.v5.0.0_dealer', JSON.stringify(dealers));
      localStorage.setItem('local.app.v5.0.0_dealerPagePassed', 1);
    })

      cy.visit('/profile')
    })

      /*
      PREG-T347
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T347
      */

      it('Show Required Field Validation Message', () =>
    {
        cy.get('[data-cy=private-chckbx]').click()
        cy.get('[data-cy=pick-interest-disabled-btn]').click()

        cy.get('[class="error"]')
          .should('be.visible')  
    })

      /*
      PREG-T331
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T331
      */
    
      it('Show Customer Type Validation Message', () => 
    {
      cy.get('[data-cy=fname-txt]').type(chance.name())
      cy.get('[data-cy=title-ddl]').select('M.')
      cy.get('[data-cy=customer-error-message]')
        .should('be.visible')
    })

      /*
      PREG-T261
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T261
      */

      it('Enter An Invalid B-day Date', () => 
    {
      cy.get('[data-cy=private-chckbx]').click()
      cy.get('[data-cy=bday-txt]').type(chance.birthday({string:true}))
      cy.get('[class="error date-error"]')
        .should('be.visible')
    })

      it('Enter Future B-day Date', () => 
    {
      cy.get('[data-cy=private-chckbx]').click()
      cy.get('[data-cy=bday-txt]').type(Cypress.moment().add(10, 'days').calendar())
      cy.get('[class="error date-error"]')
        .should('be.visible')
    })

      /*
      PREG-T15
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T15
      */

      it('Enter An Invalid E-mail Address', () => 
    {
      cy.get('[data-cy=private-chckbx]').click()
      cy.get('[data-cy=email-txt]').type(chance.email({domain: 'example.com'}))
      cy.get('[data-cy=email-error-message]')
        .should('be.visible')
    })

  })

 
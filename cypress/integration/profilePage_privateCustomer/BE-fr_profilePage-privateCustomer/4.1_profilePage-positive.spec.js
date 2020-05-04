/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

    const fname = chance.string({length:160, pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'});
    const lname = chance.string({length:160, pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'});
    const street = chance.string({length:60, pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'});
    const number = chance.string({length: 10, pool: '1234567890'});
    const zip = chance.string({length: 10, pool: '1234567890'});
    const city = chance.string({length:40, pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'});
    const email = chance.email({domain: 't-online.de'});
    const address = chance.string({length:40, pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'});
    const title = ['0','1','2']
    const telno = chance.string({length:12, pool: '1234567890'})
    const mobno = chance.string({length:12, pool: '1234567890'})
    const date = Cypress.moment().format('DD.MM.YYYY')

    describe('Profile Module', () => 
  {
    /*
        This code blocks is for Profile Page with Private Customer(BE_fr)
    */

    beforeEach(()  => {
      cy.selectCountryLanguage_BeFr()
      cy.fixture('products').then((products) => 
      {
        localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products));
        localStorage.setItem('local.app.v5.0.0_productPagePassed', 1);
      })

      cy.fixture('BE/dealers-fr').then((dealers) => 
      {
        localStorage.setItem('local.app.v5.0.0_dealer', JSON.stringify(dealers));
        localStorage.setItem('local.app.v5.0.0_dealerPagePassed', 1);
      })

      cy.visit('/profile')    
    })

    /*
    PREG-T301
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T301
    */

      it('Hover Question Icon', () =>
    {
        cy.get('[data-cy=private-icon]')
           .trigger('mouseover')
            .should('be.visible')
    })

    /*
    PREG-T3
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T3

    PREG-T4
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T4

    PREG-T7
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T7

    PREG-T8
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T8

    PREG-T9
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T9

    PREG-T10
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T10

    PREG-T11
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T11

    PREG-T298
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T298
    */

      it('Entry Text Fields', () => 
    {
        cy.get('[data-cy=fname-txt]').type(fname)
        cy.wrap(fname)
          .should('not.have.length.lessThan', fname.length)

        cy.get('[data-cy=lname-txt]').type(lname)
          cy.wrap(lname)
            .should('not.have.length.lessThan', lname.length)
            
        cy.get('[data-cy=zip-txt]').type(zip)
          cy.wrap(zip)
            .should('not.have.length.lessThan', zip.length)
            
        cy.get('[data-cy=email-txt]').type(email)
          .should('have.value', email)

        cy.get('[data-cy=street-txt]').type(street)
          cy.wrap(street)
            .should('not.have.length.lessThan', street.length)

        cy.get('[data-cy=number-txt]').type(number)
          cy.wrap(number)
            .should('not.have.length.greaterThan',number.length)

        cy.get('[data-cy=city-txt]').type(city)
          cy.wrap(city)
            .should('not.have.length.lessThan', city.length)

        cy.get('[data-cy=address-txt]').type(address)
         cy.wrap(address)
           .should('not.have.length.lessThan', address.length)

        cy.get('[data-cy=calendar-icon]').click()
        cy.get('.markcurrday').click()
        cy.get('[data-cy=bday-txt]')
          .should('have.value', date)
    })

    /*
      PREG-T1
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T1

      PREG-T12
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T12

      PREG-T16
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T16

      PREG-T18
      https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T18
    */

      it('Entry Dropdown Fields', () =>
    {
        const country = ['BE', 'BG', 'DK', 'DE', 'EE', 'FI', 'FR', 'GR', 'EN', 'GP','IE','IT','LV','LT','LU','MT','NL','AT','PL','PT','RO','SE','SK','SI','ES','CZ','HU','CY']
        const listnumber = ['+30', '+31', '+32', '+33', '+34', '+36', '+39','+40','+43','+44','+45','+46','+48','+49','+351','+352','+353','+356','+357','+358','+359','+371','+372','+386','+420','+421','+590','+7012']

        cy.wrap(title).each(title=>
          {
            cy.get('[data-cy=title-ddl] > option[value="' + title + '"]')
              .should('exist')
          })

        cy.wrap(country).each(country=>
          {
            cy.get('[data-cy=select-language-ddl] > option[value="' + country + '"]')
              .should('exist')
          })

        cy.wrap(listnumber).each(listnumber=>
          {
            cy.get('[data-cy=select-telephone-ddl] > option[value="' + listnumber + '"]')
              .should('exist')
          })

        cy.wrap(listnumber).each(listnumber=>
          {
            cy.get('[data-cy=select-mobile-ddl] > option[value="' + listnumber + '"]')
              .should('exist')
          })

        /*
          Other assertions for dropdown fields
        */

        cy.get('[data-cy=title-ddl]').find('option')
          .should('have.length', title.length)

        cy.get('[data-cy=select-language-ddl]').find('option')
          .should('have.length', country.length)

        cy.get('[data-cy=select-telephone-ddl]').find('option')
          .should('have.length', listnumber.length)

        cy.get('[data-cy=select-mobile-ddl]').find('option')
          .should('have.length', listnumber.length)

        cy.get('[data-cy=telephone-no-txt]').type(telno)
          cy.wrap(telno)
            .should('not.have.length.lessThan', telno.length)

        cy.get('[data-cy=mobile-no-txt]').type(mobno)
          cy.wrap(mobno)
            .should('not.have.length.lessThan', mobno.length)
    })

    /*
    PREG-T39
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T39
    */

      it('Profile to Dealer Page', () => 
    {
      cy.get('[data-cy=transl-back]').click({force:true})
      cy.url().should('include', '/#/dealer')
    })

     /*
    PREG-T38
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T38
    */

      it('Clicking Pick Your Interests',() => 
    {
      cy.get('[data-cy=private-chckbx]').click()
        .should('have.class', 'profile-option consumer')  

      cy.get('[data-cy=title-ddl]').select('M.')
      
      cy.addCustomer(
        chance.name(),
        chance.last(),
        chance.zip(),
        email)

      cy.get('[data-cy=transl-pick-interest]').click({force:true})
      cy.url().should('include', '/#/interest')
      cy.get('[data-cy=review-register-btn]').click()
      
    }) 
       
  })


 
/// <reference types="Cypress" />

describe('STIHL preg profile translations', () => 
{   
    beforeEach(() => {

      cy.selectCountryLanguage_FRfr()

      cy.fixture('products').then((products) => 
      {
        localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products));
        localStorage.setItem('local.app.v5.0.0_productPagePassed', 1);
      })

      cy.fixture('FR/dealers-fr').then((dealers) => 
      {
        localStorage.setItem('local.app.v5.0.0_dealer', JSON.stringify(dealers));
        localStorage.setItem('local.app.v5.0.0_dealerPagePassed', 1);
      })

      cy.visit('/profile')    
    })  

    /*
    PREG-T159
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T159

    PREG-T286
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T286
    */

   it('Check Translations', () =>
   {
       cy.readFile('src/assets/i18n/FR_fr.json').then((json) => 
       {
         cy.get('[data-cy=profile-header]').then((test) => {
           var link = "<a href='http://www.stihl.fr/mentions-legales.aspx' target='_blank'><u>protection des données personnelles</u></a>";
           var link2 = '<a href="http://www.stihl.fr/mentions-legales.aspx" target="_blank"><u>protection des données personnelles</u></a>';   
             expect(test.html()).to.equal(json['profile_page_description_text'].replace(link, link2));
         });
   
         cy.get('[data-cy=transl-customer]').contains(json['customer_type'])
         cy.get('[data-cy=transl-private]').contains(json['PRIVATE CUSTOMER'])
         cy.get('[data-cy=transl-corporate]').contains(json['CORPORATE CUSTOMER'])
         cy.get('[data-cy=transl-title]').contains(json['Title'])
         cy.get('[data-cy=transl-fname]').contains(json['First name'])
         cy.get('[data-cy=transl-lname]').contains(json['Last name'])
         cy.get('[data-cy=transl-bday]').contains(json['Birthday'])
         cy.get('[data-cy=transl-country]').contains(json['Country'])
         cy.get('[data-cy=transl-street]').contains(json['Street'])
         cy.get('[data-cy=transl-zip]').contains(json['Zip'])
         cy.get('[data-cy=transl-city]').contains(json['City'])
         cy.get('[data-cy=transl-address]').contains(json['Address line 2'])
         cy.get('[data-cy=transl-email]').contains(json['E-Mail'])
         cy.get('[data-cy=transl-telephone]').contains(json['Telephone'])
         cy.get('[data-cy=transl-mobile]').contains(json['Mobile phone'])
         cy.get('[data-cy=transl-pick-interest]').contains(json['Pick your Interests'])
         cy.get('[data-cy=transl-back]').contains(json['Back'])

         cy.get('[data-cy=private-icon]')
           .trigger('mouseover')
         cy.get('#tooltip-0').contains(json['profile_consumer_infobox'])

         cy.get('[data-cy=corporate-icon]')
           .trigger('mouseover')
         cy.get('#tooltip-1').contains(json['profile_commercial_infobox'])
       })
   })
})

  
   
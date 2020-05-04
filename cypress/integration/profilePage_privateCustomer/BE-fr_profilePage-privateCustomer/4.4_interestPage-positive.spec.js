/// <reference types="Cypress" /> 

import { NouisliderModule, NouisliderComponent } from "ng2-nouislider";

    describe('Interest Page', () =>
    {
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

            cy.fixture('BE/profile-fr').then((profile) => 
            {
                localStorage.setItem('local.app.v5.0.0_user', JSON.stringify(profile));
                localStorage.setItem('local.app.v5.0.0_profilePagePassed', 1);
            })
      
            cy.visit('/interest')    
          })

        it('Test', () => 
        {
          const a = document.getElementById('data-cy=test-slider')

         
            //cy.get('[data-cy=test-slider] > .noUi-target > .noUi-base > .noUi-origin > .noUi-handle-lower')
            cy.get('[data-cy=test-slider]')
            .invoke('attr', 'aria-valuetext', 100)
            .trigger('mouseover')
            //.invoke('val', 1)
            //.trigger('mouseover')
            //.trigger('mousemove',{pageX: 95, pageY: 782})
            //.trigger('change', {force:true})
            .click()
        })
    })
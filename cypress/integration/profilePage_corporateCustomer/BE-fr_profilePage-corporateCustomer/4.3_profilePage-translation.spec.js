// <references styles="Cypress"/>
describe('STIHL preg profile translations', function(){
    beforeEach(()=>{
        cy.fixture('products').then((products)=>{
            localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products))
            localStorage.setItem('local.app.v5.0.0_app.lang', '"BE_fr"')
            localStorage.setItem('local.app.v5.0.0_app.country', '"BE"')
            localStorage.setItem('local.app.v5.0.0_productPagePassed', '1')
        cy.fixture('BE/dealers-fr.json').then((dealer)=>{
            localStorage.setItem('local.app.v5.0.0_dealer', JSON.stringify(dealer))
            localStorage.setItem('local.app.v5.0.0_dealerPagePassed', '1')
            })
        cy.accessProfileCorpCus()
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T203 */
    it('Check Profile page translations', function(){
        cy.readFile('src/assets/i18n/BE_fr.json').then((json)=>{
            cy.get('[data-cy=profile-header]').then((header) => {
                var re = new RegExp('<br/>', 'g')
                expect(header.html()).to.equal(json['profile_page_description_text'].replace(re, '<br>'))
              })
            cy.get('[data-cy=profile-headline]').contains(json['Please enter your personal data'])
            cy.get('[data-cy=transl-customer]').contains(json['customer_type'])
            cy.get('[data-cy=transl-corporate]').contains(json['CORPORATE CUSTOMER'])
            cy.get('[data-cy="trnsl-company"]').contains(json['Company'])
            cy.get('[data-cy="trnsl-companyID"]').contains(json['Company ID'])
            cy.get('[data-cy="trnsl-title"]').contains(json['Title'])
            cy.get('[data-cy="trnsl-slc-title"]').contains(json['Select your title'])
            cy.get('[data-cy="trnsl-fName"]').contains(json['First name'])
            cy.get('[data-cy="trnsl-lName"]').contains(json['Last name'])
            cy.get('[data-cy="trnsl-bDay"]').contains(json['Birthday'])
            cy.get('[data-cy="trnsl-country"]').contains(json['Country'])
            cy.get('[data-cy="trnsl-street"]').contains(json['Street'])
            cy.get('[data-cy="trnsl-number"]').contains(json['Number'])
            cy.get('[data-cy="trnsl-zip"]').contains(json['Zip'])
            cy.get('[data-cy="trnsl-city"]').contains(json['City'])
            cy.get('[data-cy="trnsl-addLine2"]').contains(json['Address line 2'])
            cy.get('[data-cy="trnsl-tele"]').contains(json['Telephone'])
            cy.get('[data-cy="mobile"]').contains(json['Mobile phone'])
            cy.get('[data-cy="hint-text"]').contains(json['Informations are required to continue in the product registration.'])
            cy.get('[data-cy=transl-back]').contains(json['Back'])
            cy.get('[data-cy="transl-pick-interest"]').contains(json['Add personal information'])
        })
    })
})
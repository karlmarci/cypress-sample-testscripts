//<references styles="Cypress"/>
import Chance from 'chance'
const invBday = chance.string({length:30, pool:'abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const invEmail = chance.string({length:30, pool:'abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const invBdayFormat = chance.string({length:10, pool:'1234567890'})
const date = Cypress.moment().add(10, 'days').calendar();

describe('STIHL preg profile (negative)', function(){
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
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T299 */
    it('Typing symbols in birthday textfields', function(){
        cy.visit('/profile')
        cy.get('[data-cy=btn-corp-customer]').click()
        cy.get('[data-cy="typ-bday"]').type(invBday)
        .get('[data-cy="typ-bday"]')
            .should('have.value', '')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T262 */
    it('Typing invalid birthday format in textfields', function(){
        cy.visit('/profile')
        cy.get('[data-cy=btn-corp-customer]').click()
        cy.get('[data-cy="typ-bday"]').type(invBdayFormat)
        cy.readFile('src/assets/i18n/BE_fr.json').then(($json)=>{
            cy.get('[class="error date-error"]').contains($json['invalid_date_value'])
                .should('be.visible')
        })
    })
    it('Entering future date in birthday fields', function(){
        cy.visit('/profile')
        cy.get('[data-cy=btn-corp-customer]').click()
        cy.get('[data-cy="typ-bday"]').type(date)
            .get('[class="error date-error"]')
                .should('be.visible')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T55 */
    it('Enter invalid email address', function(){
        cy.visit('/profile')
        cy.get('[data-cy=btn-corp-customer]').click()
        cy.get('[data-cy="typ-email"]').type(invEmail)
        cy.get('[data-cy=pick-interest-disabled-btn]').click({force:true})
        cy.readFile('src/assets/i18n/BE_fr.json').then(($json)=>{
            cy.get('[class="error"]').contains($json['Please enter a valid email address.'])
                .should('be.visible')
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T365 */
    it('Click [Pick your interest] with incomplete form', function(){
        cy.visit('/profile')
        cy.get('[data-cy=btn-corp-customer]').click()
        cy.get('[data-cy=pick-interest-disabled-btn]').click({force:true})
        cy.get('[class="error"]')
            .should('be.visible')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T331*/
    it('Enter values in input fields', function(){
        cy.visit('/profile')
        cy.get('[data-cy="typ-fname"]').type(chance.name())
        cy.get('[data-cy="ddl-title"]').select('1')
        cy.readFile('src/assets/i18n/BE_fr.json').then(($json)=>{
            cy.get('[class="profile-warning"]').contains($json['Please set your customer kind'])
                .should('be.visible')
        })
    })
})
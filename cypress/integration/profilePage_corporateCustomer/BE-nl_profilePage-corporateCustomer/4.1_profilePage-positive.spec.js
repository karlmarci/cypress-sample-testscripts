// <references styles = "Cypress" />
import Chance from 'chance';
const company = chance.string({length:22, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const companyID = chance.string({length:22, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const fName = chance.string({length:162, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const lName = chance.string({length:162, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const bDay = '01.08.2019'
const title = ['1', '2']
const country = ['BE', 'BG', 'DK', 'DE', 'EE', 'FI', 'FR', 'GR', 'EN', 'GP','IE','IT','LV','LT','LU','MT','NL','AT','PL','PT','RO','SE','SK','SI','ES','CZ','HU','CY']
const street = chance.string({length:62, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const number = chance.string({length:12, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const zip = chance.string({length:12, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const city = chance.string({length:42, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const address2 = chance.string({length:42, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const email = chance.email({domain: 'ffuf.de'})
const teleCode = ['+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+43','+44','+45','+46','+48','+49','+351','+352','+353','+356','+357','+358','+359','+371','+372','+386','+420','+421','+590', '+7012']
const tele = chance.string({length:32, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const mobile = ['+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+43','+44','+45','+46','+48','+49','+351','+352','+353','+356','+357','+358','+359','+371','+372','+386','+420','+421','+590', '+7012']
const mobileNum = chance.string({length:32, pool:'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
const date = Cypress.moment().format('DD.MM.YYYY')

describe('STIHL preg profile', function(){
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T333 */
    beforeEach(()=>{
        cy.fixture('products').then((products)=>{
            localStorage.setItem('local.app.v5.0.0_products', JSON.stringify(products))
            localStorage.setItem('local.app.v5.0.0_app.lang', '"BE_nl"')
            localStorage.setItem('local.app.v5.0.0_app.country', '"BE"')
            localStorage.setItem('local.app.v5.0.0_productPagePassed', '1')
        cy.fixture('dealer_nl').then((dealer_nl)=>{
            localStorage.setItem('local.app.v5.0.0_dealer', JSON.stringify(dealer_nl))
            localStorage.setItem('local.app.v5.0.0_dealerPagePassed', '1')
            })
        cy.accessProfileCorpCus()
        })
    })
    it('Access profile page', function(){
        cy.visit('/profile')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T65 */
    it('Clicks [Corporate customer] and [Back] to dealer page', function(){
        cy.get('[data-cy=btn-corp-customer]').click()
            .get('[data-cy=transl-back]').click()
            .url()
                .should('include', '/dealer')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T302 */
    it('Hover to (?) Icon in Corporate customer', function(){
        cy.get('[data-cy=corporate-icon]').trigger('mouseover')
            .get('[role="tooltip"]').should('be.visible')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T41
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T42*/
    it('Title dropdown test', function(){
        cy.get('[data-cy="ddl-title"]').find('option')
            .should('have.length', 3)
        cy.wrap(title).each(title=>{
            cy.get('[data-cy="ddl-title"]').select(title)
                .should('have.value', title)
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T45 */
    it('Selecting Bday by clicking from calendar', function(){
        cy.get('[data-cy=btn-calendar]').click()
            .get('.markcurrday').click()
            .get('[data-cy=typ-bday]')
                .should('have.value', date)
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T46 */
    it('Clear birthday fields by clicking [X]', function(){
        cy.get('[data-cy=typ-bday]').type(bDay)
            .get('[data-cy=btn-calendar-x]').click()
            .get('[data-cy=typ-bday]')
                .should('have.value', '')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T52
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T323
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T53 */
    it('Country dropdown test', function(){
        cy.get('[data-cy="ddl-country"]').find('option')
            .should('have.length', country.length)
        cy.wrap(country).each(country=>{
            cy.get('[data-cy="ddl-country"]').select(country)
                .should('have.value', country)
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T56
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T198 */
    it('Telephone number dropdown test', function(){
        cy.get('[data-cy="ddl-telephone-code"]').find('option')
            .should('have.length', teleCode.length)
        cy.wrap(teleCode).each((teleCode)=>{
            cy.get('[data-cy="ddl-telephone-code"]').select(teleCode)
                .should('have.value', teleCode)
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T58
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T199 */
    it('Mobile number dropdown test', function(){
        cy.get('[data-cy="ddl-mobile-number"]').find('option')
            .should('have.length', mobile.length)
        cy.wrap(mobile).each((mobile)=>{
            cy.get('[data-cy="ddl-mobile-number"]').select(mobile)
                .should('have.value', mobile)
        })
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T287 */
    it('Check hint text if visible', function(){
        cy.get('[class="hint-text"]')
            .should('be.visible')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T67
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T68
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T43 
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T44
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T47
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T48
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T325
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T50
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T330
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T51
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T49
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T54
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T57
    https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T59
    */
    it('Entering valid data in "Corporate customer"', function(){
        cy.get('[data-cy=typ-company]').type(company)
            .wrap(company)
            .get('[data-cy=typ-company]')
            .should('have.length.not.gt', 40)
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-companyID"]').type(companyID)
            .wrap(companyID)
            .get('[data-cy="typ-companyID"]')   
            .should('have.length.not.gt', 20)
        cy.get('[data-cy="ddl-title"]').select('1')
            .get('[data-cy="ddl-title"]')
            .should('have.value', '1')
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-fname"]').type(fName)
            .wrap(fName)
            .get('[data-cy="typ-fname"]')
            .should('have.length.not.gt', 160)
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-lname"]').type(lName)
            .wrap(lName)
            .get('[data-cy="typ-fname"]')
            .should('have.length.not.gt', 160)
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-bday"]').type(bDay)
            .get('[data-cy="typ-bday"]')
            .should('have.value', bDay)
        cy.get('[data-cy="typ-street"]').type(street)
            .wrap(street)
            .get('[data-cy="typ-street"]')
            .should('have.length.not.gt', 60)
        cy.get('[data-cy="typ-number"]').type(number)
            .wrap(number)
            .get('[data-cy="typ-number"]')
            .should('have.length.not.gt', 10)
        cy.get('[data-cy="typ-zip"]').type(zip)
            .wrap(zip)
            .get('[data-cy="typ-zip"]')
            .should('have.length.not.gt', 10)
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-city"]').type(city)
            .wrap(city)
            .get('[data-cy="typ-city"]')
            .should('have.length.not.gt', 40)
        cy.get('[data-cy="typ-add2"]').type(address2)
            .wrap(address2)
            .get('[data-cy="typ-add2"]')
            .should('have.length.not.gt', 40)
        cy.get('[data-cy="typ-email"]').type(email)
            .get('[data-cy="typ-email"]')
            .should('have.value', email)
            .and('have.attr', 'required')
        cy.get('[data-cy="typ-telephone"]').type(tele)
            .wrap(tele)
            .get('[data-cy="typ-telephone"]')
            .should('have.length.not.gt', 30)
        cy.get('[data-cy="typ-mobile-number"]').type(mobileNum)
            .wrap(mobileNum)
            .get('[data-cy="typ-mobile-number"]')
            .should('have.length.not.gt', 30)
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T64 */
    it('Click [Pick your interest] with filled-out form', function(){
        cy.fillProfileCorpCus(company, companyID, fName, lName, bDay, street, number, zip, city, address2, email, tele, mobileNum)
        cy.get('[data-cy=transl-pick-interest]').click()
        cy.url().should('include', '/interest')
    })

})
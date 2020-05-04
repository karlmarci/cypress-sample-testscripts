// <reference styles = "Cypress" />
describe('STIHL preg product', function(){
    const serial = "1-11-111-111"
    const date = "01.07.2019"
    beforeEach(()=>{
        localStorage.setItem('local.app.v5.0.0_app.lang', '"BE_nl"')
        localStorage.setItem('local.app.v5.0.0_app.country', '"BE"')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T31 */
    it('Access product page', function(){
        cy.visit('/product')
    })
    it('Type valid serial number', function(){
        cy.get('[data-cy=serial-no-txt]').type(serial)
            .should('have.value', serial)
    })
    it('Type a valid date', function(){
        cy.get('[data-cy=serial-date-txt]').type(date)
            .should('have.value', date)
    })
    it('Clicking [Choose dealer]', function(){
        cy.get('[data-cy=choose-dealer-btn]').click()
            .url().should('include', '/dealer')
    })
})
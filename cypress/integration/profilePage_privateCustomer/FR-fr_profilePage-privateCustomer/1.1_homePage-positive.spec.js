/// <reference types="Cypress" />
   
  /*
    This code block covers all test cases of Start Page
  */
 
describe('Home Module', () => 
{
  /*
  v.1.0
  PREG-T100
  https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T100
  PREG-T101
  https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T101
  */

 it('Selecting a Language (per Country)', function() 
 {
   cy.visit('/')
   cy.get('[data-cy=country-ddl]').select('4: FR').wait(1000)
     .should('have.value', '4: FR')
   cy.get('[data-cy=language-ddl]').select('Français').wait(1000)
     .should('have.value','FR_fr')
 })

 /*
 PREG-T276
 https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T276
 */

 it('View links', () =>
 {
   cy.get('.start-link').eq(0).click({force:true})
     .should('have.attr','href','http://www.stihl.fr/conditions-de-garantie.aspx')
   cy.wait(2000)
   cy.get('.start-link').eq(1).click({force:true})
     .should('have.attr','href','http://www.stihl.fr/mentions-legales.aspx')
 })
 
 /*
 PREG-T103
 https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T103
 */

 it('Start registration', () =>
 {
   cy.get('[data-cy=start-register-btn]').click()
   cy.url().should('include', '/#/product')
 })
})

  





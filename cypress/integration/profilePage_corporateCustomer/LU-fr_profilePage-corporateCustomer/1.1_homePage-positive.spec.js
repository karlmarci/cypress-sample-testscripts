describe('STIHL preg home', function(){
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T95*/
    it('Access preg website', function(){
        cy.visit('/#/')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T100*/
    it('Selecting a country (LU)', function(){
        cy.get('[data-cy=country-ddl]').select('7: LU')
            .should('have.value', '7: LU')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T101 */
    it('Selecting a language (fr)', function(){
        cy.get('[data-cy=language-ddl]').select('LU_fr')
            .should('have.value', 'LU_fr')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T1033 */
    it('Clicking [Start your registration]', function(){
        cy.get('[data-cy=start-register-btn]').click()
            .url().should('include', '/product')
    })
})

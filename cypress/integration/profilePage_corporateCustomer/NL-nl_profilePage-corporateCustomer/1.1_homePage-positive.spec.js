describe('STIHL preg home', function(){
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T95*/
    it('Access preg website', function(){
        cy.visit('/#/')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T100*/
    it('Selecting a country (NL)', function(){
        cy.get('[data-cy=country-ddl]').select('8: NL')
            .should('have.value', '8: NL')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T101 */
    it('Selecting a language (nl)', function(){
        cy.get('[data-cy=language-ddl]').select('NL_nl')
            .should('have.value', 'NL_nl')
    })
    /*https://feilfeilfeil.atlassian.net/projects/PREG?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.kanoah.test-manager__main-project-page#!/testCase/PREG-T1033 */
    it('Clicking [Start your registration]', function(){
        cy.get('[data-cy=start-register-btn]').click()
            .url().should('include', '/product')
    })
})

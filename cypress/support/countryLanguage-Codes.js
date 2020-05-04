Cypress.Commands.add('selectCountryLanguage_BeFr', () => 
{
    localStorage.setItem('local.app.v5.0.0_app.country', '"BE"')
    localStorage.setItem('local.app.v5.0.0_app.lang', '"BE_fr"')
})

Cypress.Commands.add('selectCountryLanguage_BeNl', () => 
{
    localStorage.setItem('local.app.v5.0.0_app.country', '"BE"')
    localStorage.setItem('local.app.v5.0.0_app.lang', '"BE_nl"')
})

Cypress.Commands.add('selectCountryLanguage_NLnl', () => 
{
    localStorage.setItem('local.app.v5.0.0_app.country', '"NL"')
    localStorage.setItem('local.app.v5.0.0_app.lang', '"NL_nl"')
})

Cypress.Commands.add('selectCountryLanguage_FRfr', () => 
{
    localStorage.setItem('local.app.v5.0.0_app.country', '"FR"')
    localStorage.setItem('local.app.v5.0.0_app.lang', '"FR_fr"')
})

Cypress.Commands.add('selectCountryLanguage_LUfr', () => 
{
    localStorage.setItem('local.app.v5.0.0_app.country', '"LU"')
    localStorage.setItem('local.app.v5.0.0_app.lang', '"LU_fr"')
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



// Cypress.Commands.add('getCompanyDummy', function(){
//     //import Chance from 'chance';
//     const company = chance.string({length:30, pool:'abcdefghijklmnopqrstuvwxyz!@#$%^&*()'})
// })
//BE_fr Corporate Customer
Cypress.Commands.add('accessProfileCorpCus', function(){
    cy.visit('/profile')
    cy.get('[data-cy=btn-corp-customer]').click()
})

Cypress.Commands.add('fillProfileCorpCus', function(company, companyID, fName, lName, bDay, street, number, zip, city, address2, email, tele, mobileNum){
    cy.get('[data-cy=typ-company]').type(company)
    cy.get('[data-cy="typ-companyID"]').type(companyID)
    cy.get('[data-cy="ddl-title"]').select('1')
    cy.get('[data-cy="typ-fname"]').type(fName)
    cy.get('[data-cy="typ-lname"]').type(lName)
    cy.get('[data-cy="typ-bday"]').type(bDay)
    cy.get('[data-cy="typ-street"]').type(street)
    cy.get('[data-cy="typ-number"]').type(number)
    cy.get('[data-cy="typ-zip"]').type(zip)
    cy.get('[data-cy="typ-city"]').type(city)
    cy.get('[data-cy="typ-add2"]').type(address2)
    cy.get('[data-cy="typ-email"]').type(email)
    cy.get('[data-cy="typ-telephone"]').type(tele)
    cy.get('[data-cy="typ-mobile-number"]').type(mobileNum)
})
Cypress.Commands.add('fillProfileCorpCusFR', function(company, companyID, fName, lName, bDay, street, number, zip, city, address2, email, tele, mobileNum){
    cy.get('[data-cy=typ-company]').type(company)
    cy.get('[data-cy="typ-companyID"]').type(companyID)
    cy.get('[data-cy="ddl-title"]').select('1')
    cy.get('[data-cy="typ-fname"]').type(fName)
    cy.get('[data-cy="typ-lname"]').type(lName)
    cy.get('[data-cy="typ-bday"]').type(bDay)
    cy.get('[data-cy="typ-street"]').type(street)
    cy.get('[data-cy="typ-zip"]').type(zip)
    cy.get('[data-cy="typ-city"]').type(city)
    cy.get('[data-cy="typ-add2"]').type(address2)
    cy.get('[data-cy="typ-email"]').type(email)
    cy.get('[data-cy="typ-telephone"]').type(tele)
    cy.get('[data-cy="typ-mobile-number"]').type(mobileNum)
})
//BE_fr Corporate Customer

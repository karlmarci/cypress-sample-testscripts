Cypress.Commands.add('addDealer', (name,street,number,zip,city) => {
    cy.get('[data-cy=dealer-name-modal]').type(name)
    cy.get('[data-cy=dealer-street-modal]').type(street)
    cy.get('[data-cy=dealer-number-modal]').type(number)
    cy.get('[data-cy=dealer-zip-modal]').type(zip)
    cy.get('[data-cy=dealer-city-modal]').type(city)
})

Cypress.Commands.add('addCustomer', (fname,lname,zip,email) => 
{
    cy.get('[data-cy=fname-txt]').type(fname)
    cy.get('[data-cy=lname-txt]').type(lname)
    cy.get('[data-cy=zip-txt]').type(zip)
    cy.get('[data-cy=email-txt]').type(email)
})

Cypress.Commands.add('addCustomerFr', (fname,lname,street,zip,city,email) => 
{
    cy.get('[data-cy=fname-txt]').type(fname)
    cy.get('[data-cy=lname-txt]').type(lname)
    cy.get('[data-cy=zip-txt]').type(zip)
    cy.get('[data-cy=email-txt]').type(email)
    cy.get('[data-cy=street-txt]').type(street)
    cy.get('[data-cy=city-txt]').type(city)
})

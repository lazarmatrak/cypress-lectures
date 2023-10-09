/// <reference types="cypress" />


describe('Intercept GET request',()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests');
    })
    it('Intercepts GET request',()=>{
        cy.intercept({
            method:'GET',
            url:'**/comments/*',
        }).as('getComment');

        cy.get('.network-btn').click();
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf',[200, 304])
    });
})
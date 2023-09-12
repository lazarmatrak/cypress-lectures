/// <reference types="cypress" />

describe('Network Requests',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });
    it('User is on localhost:4200',()=>{
        cy.url().should('contain','localhost:4200');
    });

    it('GET request',()=>{
        cy.intercept({
            method: 'GET',
            url: Cypress.env('baseUrl')
        })
    })
})
/// <reference types="cypress" />

describe('Intercept practice',()=>{

    it('Intercept a request',()=>{
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.get('.network-btn').click();
        cy.wait('@getComment').then(interceptedRequest=>{
            let responseBody = interceptedRequest.response.body;
            cy.wrap(responseBody).should('have.property','name').and('equal','id labore ex et quam laborum');
        })
    });

    it('Stub response to PUT comments',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests');
        let message = 'GRESKA';
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
          }, {
            statusCode: 404,
            body: { error: message },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
          }).as('putComment')
          
          // we have code that puts a comment when
          // the button is clicked in scripts.js
          cy.get('.network-put').click()
          
          cy.wait('@putComment');
          
          // our 404 statusCode logic in scripts.js executed
          cy.get('.network-put-comment').should('contain', message)
    });

    it.only('Modify request',()=>{
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1',(req)=>{
            
            req.headers['x-content-type'] = 'whatever';
            console.log(req.headers);
        })
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.get('.network-btn').click();
    })
})
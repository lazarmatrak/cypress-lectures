/// <reference types="cypress" />

describe("Intercept GET request", () => {
  let message = 'Unable to find comments';
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("Intercepts GET request and mock response", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      {
        body: {
          postId: 1,
          id: 1,
          name: "Lazar",
          email: "laki@gmail.com",
          body: "My stubbed response",
        },
      }
    ).as("getComment");

    cy.get(".network-btn").click();
    cy.wait("@getComment")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304]);
  });

  it('Intercept POST request',()=>{
    cy.intercept({
      url:'/comments',
      method:'POST'
    }).as('postComment');

    cy.get('.network-post').click();
    cy.wait('@postComment').should(({request,response})=>{
      // console.log(request);

      expect(request.body).to.include("email");
      expect(request.headers).to.have.property('content-type');
      expect(request.headers).to.have.property('origin','https://example.cypress.io');


      console.log(response);
      expect(response.statusCode).to.equal(201);
    });
  });

  it('Intercept PUT request',()=>{
    cy.intercept({
      url:'**/comments/*',
      method:'PUT',
      },{
        statusCode:404,
        body:{error:message},
        delay:500
      }).as('putComment');
      cy.get('.network-put').click();
      cy.wait('@putComment');
      cy.get('.network-put-comment').should('contain',message);
  });



  // it.only("Intercepts GET request 2", () => {
  //   cy.intercept(
  //     {
  //       method: "GET",
  //       url: "**/comments/*",
  //     }
  //   ).as("getComment");

  //   cy.get(".network-btn").click();
  //   cy.wait("@getComment").then(({request,response})=>{
  //     // console.log(request);
  //     console.log(request.headers['sec-ch-ua']);
  //     console.log(response.headers['content-type']);
  //   })
  // });
  
});

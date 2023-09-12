/// <reference types="cypress" />

describe("Network Requests", () => {
  // beforeEach(()=>{
  //     cy.visit(Cypress.env('baseUrl'));
  // });
  // it('User is on localhost:4200',()=>{
  //     cy.url().should('contain','localhost:4200');
  // });

  it("GET request", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("baseUrl"),
    }).then((res) => {
      let body = res.body;
      body.forEach(($item) => {
        cy.wrap($item).its("post").as("post");
        cy.get("@post").each(($post) => {
          console.log($post.id);
        });
        cy.wrap($item).should("have.property", "post");
        cy.wrap($item).should("have.property", "comments");
        cy.wrap($item).should("have.property", "author");
      });
    });
  });
});

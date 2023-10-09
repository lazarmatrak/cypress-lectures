/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("API Challenge", () => {
  it("Creates a comment", () => {
    cy.request({
      url: "http://localhost:3000/comments",
      method: "POST",
      body: {
        id: Math.floor(Math.random() * 10) + 1,
        body: `${faker.lorem.paragraph(2)}`,
        postId: Math.floor(Math.random() * 1000) + 1,
      },
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.equal(201);
    });
  });

  it("Get comments", () => {
    cy.request({
      url: "http://localhost:3000/comments",
      method: "GET",
    }).then((res) => {
      let body = JSON.parse(JSON.stringify(res.body));
      console.log(body);
    });
  });
});

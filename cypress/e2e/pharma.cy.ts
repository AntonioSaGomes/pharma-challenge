/// <reference types="cypress" />

describe("Visiting posts while unauthenticated", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/posts");
  });
  it("should redirect me to login page", () => {
    cy.get(".login-btn").should("have.text", "Login");

    cy.url().should("be.equal", "http://localhost:3000/");
  });
});

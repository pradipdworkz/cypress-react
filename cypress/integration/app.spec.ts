/// <reference types="cypress" />

describe("App test", () => {
    it("should validate a tag", () => {
        cy.visit("http://localhost:3000")
        cy.get('a').contains('Learn React');
    })
})
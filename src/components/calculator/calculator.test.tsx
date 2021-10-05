import { mount } from '@cypress/react';
import Calculator from './index';

describe("Calculator Component", () => {
    it("Should have count to 0 initially", () => {
        mount(<Calculator />)
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
    })

    it("Should increase/decrease the count value when press button", () => {
        mount(<Calculator />)
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
        cy.get("[data-cy='button-component']").last().click({ force: true })
        cy.get("[data-cy='calculator-count-h1']").should('contain', '1')
        cy.get("[data-cy='button-component']").first().click({ force: true })
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
    })

    it("Should change color to red when value is less than 10", () => {
        mount(<Calculator />)
        Array(10).fill("").map(() => {
            cy.get("[data-cy='button-component']").first().click({ force: true })
        })
        cy.get("[data-cy='calculator-count-h1']").should('have.class', 'red')
    })

    it("Should change color to green when value is greater than 10", () => {
        mount(<Calculator />)
        Array(10).fill("").map(() => {
            cy.get("[data-cy='button-component']").last().click({ force: true })
        })
        cy.get("[data-cy='calculator-count-h1']").should('have.class', 'green')
    })
})
import { mount } from '@cypress/react';
import Calculator from './index';

describe("Calculator Component", () => {
    it("initially count should have 0", () => {
        mount(<Calculator />)
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
    })

    it("increase the count value when press + button", () => {
        mount(<Calculator />)
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
        cy.get("[data-cy='button-component']").last().click({ force: true })
        cy.get("[data-cy='calculator-count-h1']").should('contain', '1')
        cy.get("[data-cy='button-component']").first().click({ force: true })
        cy.get("[data-cy='calculator-count-h1']").should('contain', '0')
    })
})
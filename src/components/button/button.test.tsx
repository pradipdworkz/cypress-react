import { mount } from '@cypress/react';
import Button from './index';

describe("Button Component", () => {
    it("button should contain text", () => {
        let value = 1
        const props = {
            title: "-",
            onclick: () => {
                value = value + 1
            }
        }
        mount(<Button {...props} />)
        cy.get("[data-cy='button-component']").should('contain', props.title)
    })
})
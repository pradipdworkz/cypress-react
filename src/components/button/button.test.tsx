import { mount } from '@cypress/react';
import Button from './index';

describe("Button Component", () => {
    it("button should contain text", () => {
        const props = {
            title: "-",
            onclick: () => { }
        }
        mount(<Button {...props} />)
        cy.get("[data-cy='button-component']").should('contain', props.title)
    })
})
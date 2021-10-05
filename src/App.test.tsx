import { mount } from '@cypress/react';
import App from './App';

describe("App Component", () => {
  it("app should mount properly", () => {
    mount(<App />)
    cy.get("[data-cy='main-app']").should("exist")
  })
})

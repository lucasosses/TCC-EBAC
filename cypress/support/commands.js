import objetos from './page_objects/objetos';

Cypress.Commands.add('visitHome', () => {
    cy.visit('/');
})
// Seguir para pagaina de Login /minha-conta
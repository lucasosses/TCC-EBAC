Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#username').type(usuario);
  cy.get('#password').type(senha, { log: false });
  cy.get('.woocommerce-form > .button').click();
});

Cypress.Commands.add('visitHome', () => {
  cy.visit('/');
});

Cypress.Commands.add('visitLogin', () => {
  cy.get('.icon-user-unfollow').click();
});

Cypress.Commands.add('visitProdutos', () => {
  cy.get('#primary-menu > .menu-item-629 > a').click();
});

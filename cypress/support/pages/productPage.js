export class ProductPage {
  acessarProdutoPorIndex(index) {
    cy.get('.products .product').eq(index).click();
  }

  definirTamanho() {
    cy.get('.button-variable-item-L').click();
  }

  definirCor() {
    cy.get('.button-variable-item-Red').click();
  }

  definirQuantidade(qtd) {
    cy.get('.input-text').clear().type(qtd);
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click();
  }

  validarMensagemDeSucesso() {
    cy.get('.woocommerce-message').should('contain', 'carrinho');
  }

  validarMensagemDeErro() {
    cy.get('.woocommerce-error, .woocommerce-message')
      .should('contain', 'Quantidade máxima permitida é 10');
  }
}
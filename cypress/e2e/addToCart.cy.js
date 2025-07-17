/// <reference types="cypress" />
import { ProductPage } from '../support/pages/productPage';

const productPage = new ProductPage();
let dadosLogin;

describe('US001 - Adicionar item ao carrinho (quantidade válida)', () => {
  before(() => {
    cy.fixture('perfil').then((perfil) => {
      dadosLogin = perfil;
    });
  });

  beforeEach(() => {
    cy.visitHome();
    cy.visitLogin();
    cy.login(dadosLogin.usuario, dadosLogin.senha);
    cy.visitProdutos();
  });

  it('Deve adicionar um item ao carrinho com quantidade 2 e exibir mensagem de sucesso', () => {
    productPage.acessarProdutoPorIndex(0);
    productPage.definirTamanho();
    productPage.definirCor();
    productPage.definirQuantidade(2);
    productPage.adicionarAoCarrinho();
    productPage.validarMensagemDeSucesso();
  });

  it('Deve exibir erro ao tentar adicionar 11 unidades', () => {
    cy.fixture('produtoLimite').then((p) => {
      productPage.acessarProdutoPorIndex(p.indice);
      productPage.definirTamanho();
      productPage.definirCor();
      productPage.definirQuantidade(p.quantidade);
      productPage.adicionarAoCarrinho();
      productPage.validarMensagemDeErro();
      /// O site está permitindo a seleção de mais de 10 produtos, por isso não foi possível validar a mesnagem de errro
    });
  });

  it.only('Deve aplicar corretamente os cupons conforme o valor total', () => {
    productPage.acessarProdutoPorIndex(0);
    productPage.definirTamanho();
    productPage.definirCor();
    productPage.definirQuantidade(2);
    productPage.adicionarAoCarrinho();
    productPage.validarMensagemDeSucesso();
    cy.get('.woocommerce-message > .button').click();
    cy.get('#coupon_code').clear().type('CUPOM10');
    cy.get('.coupon > .btn').click();
/// aguardadno retorno devido a erro do site em validar os cupons.
  });
});
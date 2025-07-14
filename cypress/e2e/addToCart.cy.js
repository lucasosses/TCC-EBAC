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

  it.only('Deve exibir erro ao tentar adicionar 11 unidades', () => {
    cy.fixture('produtoLimite').then((p) => {
      productPage.acessarProdutoPorIndex(p.indice);
      productPage.definirTamanho();
      productPage.definirCor();
      productPage.definirQuantidade(p.quantidade); // 11
      productPage.adicionarAoCarrinho();
      productPage.validarMensagemDeErro();        // 🛑 valida erro
    });
  });
});
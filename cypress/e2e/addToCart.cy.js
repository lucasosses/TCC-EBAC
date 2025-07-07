/// <references type="cypress" />

import objetos from "../support/page_objects/objetos";

context('Adicionar um produto ao carrinho com quantidade igual a 2', () => {

    before(() => {
        cy.fixture('perfil').then((perfil) => {
            dadosLogin = perfil;
        });
    });

    beforeEach(() => {
        cy.visitHome();
    });
});



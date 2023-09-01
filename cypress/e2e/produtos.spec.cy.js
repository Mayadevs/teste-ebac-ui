/// <reference types="cypress" />


describe('Página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('.product-block.grid')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click();

        cy.get('.button-variable-item-M').click();
        cy.get('.button-variable-item-Purple').click();
        cy.get('.input-text').clear().type(2);
        cy.get('.single_add_to_cart_button').click();
    });
});




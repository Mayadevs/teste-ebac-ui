/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    })

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName();
        let sobrenomeFaker = faker.name.lastName();
        let emailFaker = faker.internet.email();

        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type('!teste@teste$');
        cy.get(':nth-child(4) > .button').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account a').click();
        cy.get('#account_first_name').clear().type(nomeFaker); // Adicionei .clear() para garantir que o campo esteja vazio antes de inserir o nomeFaker.
        cy.get('#account_last_name').clear().type(sobrenomeFaker); // Adicionei .clear() para garantir que o campo esteja vazio antes de inserir o sobrenomeFaker.
        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });
});

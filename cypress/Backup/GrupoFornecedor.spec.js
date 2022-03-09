<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("Testar o Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password)
      .clear()
      .type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ timeout: 20000 });
    cy.contains("Selecionar...").click({ timeout: 10000 });
    cy.contains("DEMONSTRAÇÃO").click({ timeout: 10000 });
    cy.contains("SELECIONAR FILIAL").click({ timeout: 10000 });
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    cy.get(loc.menu.navigator).click(); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click(); //locators
  });
  it("listagem - Criar, abrir, Ler e voltar - Grupo de Fornecedor", () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click();
    cy.get(loc.integracao.grupoFornecedor).click();
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 10000 });
    cy.wait(1000);
    //verifica acentuação
    cy.get(".panel").should("contain", "Descrição");
    cy.get(".panel").should("contain", "Últ. Atualização");
    //adicionar
    cy.get(loc.integracao.adicionar).click();
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should(
      "contain",
      "Cadastrar"
    );
    cy.get("#descricao").clear().type("Athos Teste");

    cy.get("#btn-salvar > span.ng-scope").click();
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
    //abrir e ler
    cy.contains("Athos Teste", { matchCase: false }).dblclick();
    cy.get('[label="Identificação"] > .panel-body').should("contain", "ATHOS", {
      matchCase: false,
    });

    //voltar
    cy.get(".pull-right > .md-button > span.ng-scope").click();
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
  });

  it("listagem - Editar, abrir e Ler- Grupo de Fornecedor", () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click();
    cy.get(loc.integracao.grupoFornecedor).click();
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 10000 });
    cy.wait(1000);

    //editando...
    cy.contains("Athos Teste", { matchCase: false }).click();
    cy.get("#btn-editar > span.ng-scope").click({ timeout: 10000 });

    cy.get("#descricao").clear().type("TESTE EDITADO");
    cy.get(".md-raised > span.ng-scope").click();
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
    //abrir e ler
    cy.contains("TESTE EDITADO", { matchCase: false }).dblclick();
    cy.get('[label="Identificação"] > .panel-body').should(
      "contain",
      "TESTE EDITADO",
      { matchCase: false }
    );
  });
  it("Abrir - Editar, cancelar edição e Excluir - Grupo de Fornecedor", () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click();
    cy.get(loc.integracao.grupoFornecedor).click();
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 10000 });
    cy.wait(1000);

    //editando...
    cy.contains("TESTE EDITADO", { matchCase: false }).dblclick();
    cy.wait(2000);
    cy.get('[ng-click="ctrl.editarCadastro()"] > .fa').click();
    cy.wait(2000);
    cy.get('[ng-click="ctrl.voltarListagem()"] > .ng-scope').click();
    // //exluir
    cy.wait(2000);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click();
    cy.get(".swal2-cancel").click();
    cy.wait(2000);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click();
    cy.get(".swal2-confirm").click();
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
  });
  it("listagem - Criar, e Excluir - Grupo de Fornecedor", () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click();
    cy.get(loc.integracao.grupoFornecedor).click();
    cy.get(loc.menu.caminho).should("contain", "Grupo de Fornecedor");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 10000 });
    cy.wait(1000);
    //verifica acentuação
    cy.get(".panel").should("contain", "Descrição");
    cy.get(".panel").should("contain", "Últ. Atualização");

    cy.get(loc.integracao.adicionar).click();
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should(
      "contain",
      "Cadastrar"
    );
    cy.get("#descricao").clear().type("BASICO");
    cy.get("#btn-salvar > span.ng-scope").click();
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
    cy.wait(1000);
    cy.contains("BASICO", { matchCase: false }).click();
    cy.get("#btn-excluir > span.ng-scope").click();
    cy.wait(1000);

    cy.get(".swal2-confirm").click();
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
  });
});

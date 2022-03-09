///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("GRUD -  solicitacao Compras", () => {
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);
  });

  it("Login", () => {
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password)
      .clear()
      .type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ force: true });
    cy.wait(2000);

    //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
   cy.contains("Selecionar...").click({ force: true });
   cy.contains("CONTROLE DE QUALIDADE AUTOMAÇÃO").click({ force: true });
   cy.contains("SELECIONAR FILIAL").click({ force: true });
    cy.wait(5000);
    cy.get("[class=ng-binding]").should("contain", "Inicio");

   
  });
  it("Criar - Solicitação Compra", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.solicitacaoCompras).click({ force: true });
      cy.wait(5000);
     // cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(1000);
      } else {
   
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.compras.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.compras.solicitacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(1000);
      } 

    //adicionar
    cy.get(loc.menu.adicionar2).click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(500);

    // descrição
    cy.get('#cmpComprador > .ui-select-match > .form-control').click()
    cy.wait(500);
    cy.get('#cmpComprador > .ui-select-search').type("PADRAO")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    //cy.get('.select2-chosen.ng-binding').click()
   // cy.wait(500);
    cy.get('.select2-chosen.ng-binding').type("ESMERILHADEIRA ANGULAR BOSCH")
    cy.wait(500);
    cy.get('#ui-select-choices-row-8-0 > .select2-result-label').click()
    cy.wait(500);
    cy.get('#quantidade').type("10")
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-search').type("alta")
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.get('#observacao').type("teste")
    cy.get('.margin-top-28 > .md-accent > .ng-scope').click()
    cy.wait(500)
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click()
    cy.wait(500)
    //salvar

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
  });




  it("Ler e Excluir - Solicitação compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.solicitacaoCompras).click({ force: true });
      cy.wait(5000);
     // cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
      } else {
   
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.compras.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.compras.solicitacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    
    cy.contains("ESMERILHADEIRA ANGULAR BOSCH").dblclick();

    // descrição
  cy.get(loc.compras.Corpo).should('contain','ESMERILHADEIRA ANGULAR BOSCH')
    cy.wait(500);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true });
    //salvar
    cy.get('.swal2-confirm').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });


  });
  it("Criar - SOLICITAÇÃO COMPRA - PRODUTO SEM CADASTRO", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.solicitacaoCompras).click({ force: true });
      cy.wait(5000);
     // cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(1000);
      } else {
   
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.compras.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.compras.solicitacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(1000);
      } 

    //adicionar
    cy.get(loc.menu.adicionar2).click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(500);

    // descrição
    cy.get('#cmpComprador > .ui-select-match > .form-control').click()
    cy.wait(500);
    cy.get('#cmpComprador > .ui-select-search').type("PADRAO")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    cy.get('.md-label > .ng-binding').click()
    cy.get('.col-md-6 > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get('.col-md-6 > .form-group > .ui-select-container > .ui-select-search').type("UNID")
    cy.get('#ui-select-choices-row-9-0 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    cy.get('#produtoDescricao').type("ESMERILHADEIRA ANGULAR BOSCH")
      cy.wait(500);
    cy.get('#quantidade').type("10")
    cy.get('#valorUnitario').type("5000")
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-search').type("alta")
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.get('#observacao').type("teste")
    cy.get('.margin-top-28 > .md-accent > .ng-scope').click()
    cy.wait(500)
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click()
    cy.wait(500)
    //salvar

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
  });


  it("Ler e Excluir - Solicitação compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.solicitacaoCompras).click({ force: true });
      cy.wait(5000);
     // cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
      } else {
   
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.compras.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.compras.solicitacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    
    cy.contains("ESMERILHADEIRA ANGULAR BOSCH").dblclick();

    // descrição
  cy.get(loc.compras.Corpo).should('contain','ESMERILHADEIRA ANGULAR BOSCH')
    cy.wait(500);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true });
    //salvar
    cy.get('.swal2-confirm').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });


  });
});

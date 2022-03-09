///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("GRUD -  comprador", () => {
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);
  });

  it.skip("Login", () => {
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
  it("Criar - Grupo Comprador", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.comprador).click({ force: true });
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
        cy.get(loc.compras.comprador).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //adicionar
    cy.get(loc.menu.adicionar2).click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should(
      "contain",
      "Cadastrar"
    );
    cy.wait(1500);

    // descrição
    cy.get("#nome").type("PAULO SALOMAO");
    cy.wait(500);
    cy.get('#cmpGrupoComprador > .ui-select-match > .form-control').type("PADRAO")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    cy.get('#intColaborador > .ui-select-match > .form-control').type("SALOMÃO")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);

    //salvar
    cy.get("#btn-salvar > span.ng-scope").click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
  });

  it("Editar - Grupo comprador", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.comprador).click({ force: true });
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
        cy.get(loc.compras.comprador).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    
    cy.contains("PAULO SALOMAO").dblclick();
    cy.wait(200)
    cy.get('[ng-click="ctrl.editarCadastro()"]').click({ force: true });
    cy.wait(500);
    // descrição
    // descrição
    cy.get("#nome").clear().type("MARIO BROS");
    cy.wait(500);

    cy.get('#cmpGrupoComprador > .ui-select-match > .form-control').type("GERENTE")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    cy.get('#intColaborador > .ui-select-match > .form-control').type("MARIO")
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(500);
    //salvar
    cy.get(".md-raised > span.ng-scope").click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click();

    
    
  });



  it("Ler e Excluir - Grupo comprador", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.comprador).click({ force: true });
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
        cy.get(loc.compras.comprador).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    cy.wait(2500);
    cy.contains("MARIO BROS").dblclick();

    // descrição
  cy.get(loc.compras.Corpo).should('contain','MARIO BROS')
    cy.wait(500);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true });
    //salvar
    cy.get('.swal2-confirm').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });


  });


});

///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("GRUD -  cotacaoCompras", () => {
  beforeEach(() => {
    cy.viewport(1440,900)
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
  it("Criar - cotacao Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.cotacaoCompras).click({ force: true });
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
        cy.get(loc.compras.cotacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //adicionar
    cy.get(loc.menu.adicionar2).click({ timeout: 10000 });
  //  cy.get('.btn-group.ng-scope > .md-raised > span.ng-scope').click()
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(1500);

    // descrição
    cy.get('#observacao').type("EMBALAR COM CUIDADO")
    cy.get('.ui-select-match > .form-control').click()
    cy.get('#cmpComprador > .ui-select-search').type("PADRAO")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get('#dataValidade').type("01122099")
 
    cy.wait(500);
  
    cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("PARAFUSADEIRA")
    cy.contains("PARAFUSADEIRA").click({ force: true });
    
    cy.wait(1000);
    cy.get('#quantidade').type("10")
    //cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').click()
    cy.get('.margin-top-28 > .md-accent').click()
    //cy.get('.col-md-12 > .form-group > .ui-select-container > .ui-select-dropdown > .search-container > .ui-select-search').type("VINHO")
    cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("VINHO")
    cy.wait(500);
   
      cy.contains("VINHO GALIOTO").click({ force: true });
      cy.get('#quantidade').type("5")
      cy.wait(500);
      cy.get('.margin-top-28 > .md-accent > .ng-scope').click()


    //salvar
    cy.get("#btn-salvar > span.ng-scope").click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    //cy.get(loc.menu.fechaaviso2).click({ timeout: 10000 });

    cy.wait(500);
    cy.contains("PADRAO").dblclick();
    cy.wait(200)
    cy.get(loc.compras.Corpo).should('contain','PADRAO')
    cy.get(loc.compras.Corpo).should('contain','PREPARADA')
    cy.get(loc.compras.Corpo).should('contain','EMBALAR COM CUIDADO')
    //cy.get(loc.compras.Corpo).should('contain','VINHO')
    cy.get(loc.compras.Corpo).should('contain','PARAFUSADEIRA')

  });





  it("Editar - cotacao Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.cotacaoCompras).click({ force: true });
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
        cy.get(loc.compras.cotacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    
    cy.contains("PADRAO").dblclick();
    cy.wait(200)
    cy.get('[ng-click="ctrl.editarCadastro()"]').click({ force: true });
    cy.wait(500);
    // descrição
    // descrição
    cy.get('#observacao').clear().type("CAIXA FRAGIL")
    cy.get('.ui-select-match > .form-control').click()
    cy.get('#cmpComprador > .ui-select-search').clear().type("PAULO")
    cy.contains("PAULO").click({ force: true });
    cy.wait(500);
    //cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get('#dataValidade').type("01122029")
 
    cy.wait(500);
  
    //cy.get('.col-md-8 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("PARAFUSADEIRA")
    cy.get('.select2-chosen.ng-binding').type("PARAFUSADEIRA")
    cy.contains("PARAFUSADEIRA").click({ force: true });
    
    cy.wait(1000);
    cy.get('#quantidade').type("10")
    cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').click()
    cy.get('.col-md-12 > .form-group > .ui-select-container > .ui-select-dropdown > .search-container > .ui-select-search').type("CERVEJA SKOL")
    cy.wait(500);
   
      cy.contains("CERVEJA SKOL").click({ force: true });
      cy.wait(500);
      cy.get('.margin-top-28 > .md-accent > .ng-scope').click()


    //salvar
    cy.get(".col-md-24 > .pull-right > .md-raised > span.ng-scope").click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });

    cy.wait(500);
    cy.contains("PAULO").dblclick();
    cy.wait(200)
    cy.get(loc.compras.Corpo).should('contain','PAULO')
    cy.get(loc.compras.Corpo).should('contain','PREPARADA')
    cy.get(loc.compras.Corpo).should('contain','CAIXA FRAGIL')
    cy.get(loc.compras.Corpo).should('contain','CERVEJA SKOL')
    cy.get(loc.compras.Corpo).should('contain','PARAFUSADEIRA')
    cy.wait(500);
    //salvar
    cy.get('[ng-click="ctrl.editarCadastro()"]').click()
    cy.get('.col-md-24 > .pull-right > .md-raised').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click();

    
    
  });



  it("Ler e Excluir -  cotacao Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.cotacaoCompras).click({ force: true });
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
        cy.get(loc.compras.cotacaoCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...
    cy.wait(2500);
    cy.contains("PAULO").dblclick();

    // descrição
  cy.get(loc.compras.Corpo).should('contain','PAULO')
    cy.wait(500);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true });
    //salvar
    cy.get('.swal2-confirm').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });


  });


});

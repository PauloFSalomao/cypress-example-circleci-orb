///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("GRUD -  ordemCompras", () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
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
  it("Criar - ordem de Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.ordemCompras).click({ force: true });
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
        cy.get(loc.compras.ordemCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //adicionar
    cy.get(loc.menu.adicionar2).click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(1500);

    // descrição
    cy.get('#estArmazem > .ui-select-match > .form-control').type("DEPOSITO INTERNO");
    cy.wait(500);
    cy.contains("DEPOSITO INTERNO").click();
    cy.get('#cmpComprador > .ui-select-match > .form-control').type("PADRAO")
    cy.contains("PADRAO").click();
    cy.wait(500);
    cy.get('#documentoDataEmissao').type("12122021")
    cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("bosch")
    cy.contains("BOSCH").click();
    cy.get('#informacaoComplementar').type("informacaoComplementar")
    cy.get('#informacaoComplementar').clear().type("PRODUTO FRAGIL")

    cy.get(':nth-child(1) > .col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("VINHO")
    cy.contains("VINHO").click();
    cy.get('#itemQuantidade').type("10")
    cy.get('#produtoCodigoFornecedor').type("123123")
    cy.get('#itemValorUnitario').type("111")
    cy.get('#impostoIcmsSt').type("111")
    cy.get('#impostoIpi').type("111")
    cy.get('#itemValorFrete').type("111")
    cy.get('#itemValorAcrescimo').type("111")
    cy.get('#itemValorDesconto').type("111")

    cy.get('.margin-top-28 > .pull-right > .md-accent > .ng-scope').click()
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "14,43")
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "1,11")
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "11,10")
 

    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click({ force: true });

    cy.get('#finMeiopagamento > .ui-select-match > .form-control').type("DINHEIRO")
    cy.contains("DINHEIRO").click();

    cy.get('#prazoParcelas').type("1")
    cy.get('.col-md-4 > .pull-right > div > .md-raised > span.ng-scope').click()
    cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click()

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
    cy.contains("PADRAO").dblclick();
    cy.wait(200)
    cy.get(loc.compras.Corpo).should('contain','PADRAO')
    
    cy.get(loc.compras.Corpo).should('contain','AGUARDANDO')
    cy.get(loc.compras.Corpo).should('contain','VINHO GALIOTO')
    cy.get(loc.compras.Corpo).should('contain','BOSCH')
    cy.get(loc.compras.Corpo).should('contain','DEPOSITO INTERNO')
    cy.get(loc.compras.Corpo).should('contain','14,43')
    cy.get(loc.compras.Corpo).should('contain','PRODUTO FRAGIL')
  
  });

  it("Editar - ordem de Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.ordemCompras).click({ force: true });
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
        cy.get(loc.compras.ordemCompras).click({ force: true });
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
    cy.get('#estArmazem > .ui-select-match > .form-control').type("MOSTRUARIO");
    cy.wait(500);
    cy.contains("MOSTRUARIO").click();
    cy.get('#cmpComprador > .ui-select-match > .form-control').type("PAULO")
    cy.contains("PAULO").click();
    cy.wait(500);
    cy.get('#documentoDataEmissao').type("22122021")
    cy.get('#informacaoComplementar').type("informacaoComplementar")
    cy.get('#informacaoComplementar').clear().type("PRODUTO ENCAIXOTADO")
    cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > [ng-hide="$select.isEmpty()"]').type("BLACK")
    cy.contains("BLACK").click();


    cy.get(':nth-child(1) > .col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("CERVEJA")
    cy.contains("CERVEJA").click();
    cy.get('#itemQuantidade').type("10")
    cy.get('#produtoCodigoFornecedor').type("123123")
    cy.get('#itemValorUnitario').type("111")
    cy.get('#impostoIcmsSt').type("111")
    cy.get('#impostoIpi').type("111")
    cy.get('#itemValorFrete').type("111")
    cy.get('#itemValorAcrescimo').type("111")
    cy.get('#itemValorDesconto').type("111")

    cy.get('.margin-top-28 > .pull-right > .md-accent > .ng-scope').click()
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "28,86")
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "2,22")
    cy.get('[name="ordemCompra"] > .panel > .panel-body').should("contain", "22,20")
 

    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click({ force: true });

    cy.get('#finMeiopagamento > .ui-select-match > .form-control').type("DINHEIRO")
    cy.contains("DINHEIRO").click();

    cy.get('#prazoParcelas').type("1")
    cy.get('.col-md-4 > .pull-right > div > .md-raised > span.ng-scope').click()
    cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click()

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
    cy.contains("PAULO").dblclick();
    cy.wait(200)
    cy.get(loc.compras.Corpo).should('contain','PAULO')
    
    cy.get(loc.compras.Corpo).should('contain','AGUARDANDO')
    cy.get(loc.compras.Corpo).should('contain','CERVEJA')
    cy.get(loc.compras.Corpo).should('contain','BLACK')
    cy.get(loc.compras.Corpo).should('contain','MOSTRUARIO')
    cy.get(loc.compras.Corpo).should('contain','28,86')
    cy.get(loc.compras.Corpo).should('contain','PRODUTO ENCAIXOTADO')

    
    
  });



  it("Ler e Excluir - ordem de Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.ordemCompras).click({ force: true });
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
        cy.get(loc.compras.ordemCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 


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
  it("Ler e Excluir - ordem de Compras", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.ordemCompras).click({ force: true });
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
        cy.get(loc.compras.ordemCompras).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    //editando...

    cy.contains("PADRAO").dblclick();

    // descrição
  cy.get(loc.compras.Corpo).should('contain','PADRAO')
    cy.wait(500);
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true });
    //salvar
    cy.get('.swal2-confirm').click({ force: true });
    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });


  });

});

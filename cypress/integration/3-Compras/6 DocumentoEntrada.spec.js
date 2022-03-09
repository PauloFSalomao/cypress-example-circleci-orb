///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context("GRUD -  Documento de Entrada", () => {
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
  it("Criar - Documento de Entrada", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
    cy.get('#main').click(300, 30)
    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    cy.wait(500);
    //seleciona cliente no menu
    cy.get(loc.compras.icone).click({ force: true });
    cy.wait(1000);
    cy.get(loc.compras.documentoEntrada).click({ force: true });
    cy.wait(5000);
    cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
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
      cy.get(loc.compras.documentoEntrada).click({ force: true });
      cy.wait(5000);
      cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    } 

    
    cy.contains('Adicionar').click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(1000);

    // descrição

    cy.get('#content').click(1000, 45) //fechar alerta vermelho


    cy.get('#fisOperacao > .ui-select-match > .form-control').type("COMPRA - FORA")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get('.col-md-11 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("BOSCH")
     cy.wait(500);
    cy.get(".md-list-item-text > .layout-column").click()
    cy.wait(500);
    cy.get('#documentoModelo').type("55")
    cy.get('#documentoSerie').type("69")
    cy.get('#documentoNumero').type(faker.random.number()) 
    cy.get('#documentoDataEmissao').type("01102021")
    cy.get('#documentoDataHoraEntrada').clear().type("01102021")
    cy.get('#nfeChave').type("29211007790381000107550040000157921752000004") 
    cy.wait(500);
    cy.get('.col-md-7 > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get('.col-md-7 > .form-group > .ui-select-container > .ui-select-search').type("se aplica")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get(':nth-child(4) > .col-md-13 > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get(':nth-child(4) > .col-md-13 > .form-group > .ui-select-container > .ui-select-search').type("Transporte Próprio por conta do Remetente")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
  
  
    cy.get('.col-md-11 > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get('.col-md-11 > :nth-child(1) > .form-group > .ui-select-container > .ui-select-search').type("N")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);



    cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("FURADEIRA")
    cy.get(".text-truncate > .ng-binding").click()
    cy.get('#itemQuantidade').clear().type("1")

    cy.get('#itemValorUnitario').type("10000")
    cy.get('#itemCfop').type("2102")
    //ADICIOANR 
    cy.get('.col-md-24 > .pull-right > .md-raised > span.ng-scope').click()
    cy.wait(500);
    cy.get('#informacaoComplementar').type("teste0")
    cy.get('#informacaoFisco').type("teste1")
    cy.get('#informacaoComplementar').clear().type("teste3")
    cy.get('#informacaoFisco').clear().type("teste4")
    cy.wait(500);


    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click();
    cy.wait(500);   
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click()
    cy.wait(500);
    cy.get('#finMeiopagamento > .ui-select-search').type("Dinheiro")
    cy.wait(500);
    cy.get(".ui-select-highlight").click()
    cy.wait(500);
    cy.get('.margin-top-28 > .pull-right > .md-accent > span.ng-scope').click({ timeout: 10000 });
    cy.wait(500);
    cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click({ timeout: 10000 });
    cy.wait(500);

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    //cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });
        //LEr dados salvos
    cy.contains("BOSCH LTDA").dblclick();

    cy.get(loc.compras.Corpo).should('contain','BOSCH LTDA')
    cy.get(loc.compras.Corpo).should('contain','29211007790381000107550040000157921752000004')
    cy.get(loc.compras.Corpo).should('contain','01/10/2021')
    cy.get(loc.compras.Corpo).should('contain','FURADEIRA DE IMPACTO BOSCH GSB')
    cy.get(loc.compras.Corpo).should('contain','2.102')
    cy.get(loc.compras.Corpo).should('contain','100')
    cy.get(loc.compras.Corpo).should('contain','DINHEIRO')
    


  });

  it("Editar - Documento de Entrada", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.compras.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.compras.documentoEntrada).click({ force: true });
      cy.wait(5000);
      cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
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
        cy.get(loc.compras.documentoEntrada).click({ force: true });
        cy.wait(5000);
        cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);

      } 

    //editando...

    cy.contains("BOSCH LTDA").dblclick();
    cy.wait(200)
    cy.get('[ng-click="ctrl.editarCadastro()"]').click({ force: true });
    cy.wait(500);
    // descrição
    //cy.contains('Adicionar').click({ timeout: 10000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(1000);

    // descrição

    cy.get('#content').click(1000, 45) //fechar alerta vermelho


    cy.get('#fisOperacao > .ui-select-match > .form-control').type("COMPRA - FORA")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get('.col-md-11 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("BOSCH")
     cy.wait(500);
    cy.get(".md-list-item-text > .layout-column").click()
    cy.wait(500);
    cy.get('#documentoModelo').type("55")
    cy.get('#documentoSerie').type("69")
    cy.get('#documentoNumero').type(faker.random.number()) 
    cy.get('#documentoDataEmissao').type("01102021")
    cy.get('#documentoDataHoraEntrada').clear().type("01102021")
    cy.get('#nfeChave').type("29211007790381000107550040000157921752000004") 
    cy.wait(500);
    cy.get('.col-md-7 > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get('.col-md-7 > .form-group > .ui-select-container > .ui-select-search').type("se aplica")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
    cy.get(':nth-child(4) > .col-md-13 > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get(':nth-child(4) > .col-md-13 > .form-group > .ui-select-container > .ui-select-search').type("Transporte Próprio por conta do Remetente")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);
  
  
    cy.get('.col-md-11 > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').click()
    cy.get('.col-md-11 > :nth-child(1) > .form-group > .ui-select-container > .ui-select-search').type("N")
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .text-truncate").click()
    cy.wait(500);



    cy.get('.col-md-12 > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("FURADEIRA")
    cy.get(".text-truncate > .ng-binding").click()
    cy.get('#itemQuantidade').clear().type("1")

    cy.get('#itemValorUnitario').type("200000")
    cy.get('#itemCfop').type("2102")
    //ADICIOANR 
    cy.get('.col-md-24 > .pull-right > .md-raised > span.ng-scope').click()
    cy.wait(500);
    cy.get('#informacaoComplementar').type("teste0")
    cy.get('#informacaoFisco').type("teste1")
    cy.get('#informacaoComplementar').clear().type("teste3")
    cy.get('#informacaoFisco').clear().type("teste4")
    cy.wait(500);


    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click();
    cy.wait(500);   
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click()
    cy.wait(500);
    cy.get('#finMeiopagamento > .ui-select-search').type("Dinheiro")
    cy.wait(500);
    cy.get(".ui-select-highlight").click()
    cy.wait(500);
    cy.get('.margin-top-28 > .pull-right > .md-accent > span.ng-scope').click({ timeout: 10000 });
    cy.wait(500);
    cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click({ timeout: 10000 });
    cy.wait(500);

    cy.get(loc.menu.aviso).should("contain", "sucesso");
    cy.wait(500);
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 });

    
    
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
      cy.get(loc.compras.documentoEntrada).click({ force: true });
      cy.wait(5000);
      cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
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
        cy.get(loc.compras.documentoEntrada).click({ force: true });
        cy.wait(5000);
        cy.get(loc.menu.caminho).should("contain", "Documento de entrada");
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

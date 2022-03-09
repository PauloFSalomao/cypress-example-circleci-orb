///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Grupo Clientes', () => {

  beforeEach(() => {
    cy.visit(loc.ambiente.demo);



  })

  it('Login', () => {


    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.contains('ACESSAR').click({ force: true })
    cy.wait(2000)

    //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
    cy.contains('Selecionar...').click({ force: true })
    cy.contains('CONTROLE DE QUALIDADE AUTOMAÇÃO').click({ force: true })
    cy.contains('SELECIONAR FILIAL').click({ force: true })
    cy.wait(2000)
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators 
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators





  })
  it('listagem - Criar, abrir, Ler e voltar - Grupo de Cliente', () => {
    //abrir a navigator bar
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
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
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    }

    cy.get(loc.integracao.adicionar).click({ force: true })
    cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
    cy.get('.form-group > .form-control').clear().type("SALOMAO Teste")
    cy.get('.ui-select-match > .form-control').type('10% ESPECIAL', '{enter}')
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.get('#btn-salvar > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 })
    cy.get(loc.menu.caminho).should('contain', 'Grupo de Cliente')
    //abrir e ler
    cy.contains("SALOMAO Teste", { matchCase: false }).dblclick()
    cy.get('[label="Identificação"] > .panel-body').should('contain', 'SALOMAO', { matchCase: false })
    cy.get('[label="Identificação"] > .panel-body').should('contain', '10% ESPECIAL', { matchCase: false })
    //voltar
    cy.get('.pull-right > .md-button > span.ng-scope').click()
    cy.get(loc.menu.caminho).should('contain', 'Grupo de Cliente')
  })

  it('listagem - Editar, abrir e Ler- Grupo de Cliente', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
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
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    }
    //editando...
    cy.contains("SALOMAO Teste", { matchCase: false }).click()
    cy.get('#btn-editar > span.ng-scope').click({ timeout: 10000 })
    cy.get('.ui-select-match > .form-control').type('ATACADO')
    cy.contains('ATACADO').click()
    cy.get('.form-group > .form-control').clear().type('TESTE EDITADO')
    cy.get('.md-raised > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 })
    //abrir e ler
    cy.contains("TESTE EDITADO", { matchCase: false }).dblclick()
    cy.get('[label="Identificação"] > .panel-body').should('contain', 'TESTE EDITADO', { matchCase: false })
    cy.get('[label="Identificação"] > .panel-body').should('contain', 'ATACADO', { matchCase: false })
  })
  it('Abrir - Editar, cancelar edição e Excluir - Grupo de Cliente', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //    cy.get(loc.menu.caminho).should("contain", "");
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
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //     cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    }

    //editando...
    cy.contains("TESTE EDITADO", { matchCase: false }).dblclick()
    cy.wait(2000)
    cy.get('[ng-click="ctrl.editarCadastro()"] > .fa').click()
    cy.wait(2000)
    cy.get('[ng-click="ctrl.voltarListagem()"] > .ng-scope').click()
    // //exluir
    cy.wait(2000)
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click()
    cy.get('.swal2-cancel').click()
    cy.wait(2000)
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click()
    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 })

  })
  it('listagem - Criar, e Excluir - Grupo de Cliente', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //   cy.get(loc.menu.caminho).should("contain", "");
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
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.grupoCliente).click({ force: true });
      cy.wait(5000);
      //       cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    }

    cy.get(loc.integracao.adicionar).click()
    cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
    cy.get('.form-group > .form-control').clear().type("BASICO")
    cy.get('#btn-salvar > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 })
    cy.wait(1000)
    cy.contains("BASICO", { matchCase: false }).click()
    cy.get('#btn-excluir > span.ng-scope').click()
    cy.wait(1000)

    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({ timeout: 10000 })



  })


})
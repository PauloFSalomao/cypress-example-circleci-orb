///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Clientes', () => {
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);   
    
    
  })
  
  it('Login', () =>{
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.contains('ACESSAR').click({ force: true })
    cy.wait(2000)
   
 
   //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
    cy.contains('Selecionar...').click({timeout: 10000})
     cy.contains('CONTROLE DE QUALIDADE AUTOMAÇÃO').click({timeout: 10000})
     cy.contains('SELECIONAR FILIAL').click({timeout: 10000})
     cy.get("[class=ng-binding]").should("contain", "Inicio");
   //abrir a navigator bar
   // cy.get(loc.menu.navigator).click()//locators 
   // cy.wait(500)
   // cy.get(loc.menu.fixar).click()//locators
  
  })

it('Abrir - Editar, cancelar edição e Excluir - Cliente', () => {
  if (cy.get('#navigation-menu').should("be.visible")) {
    cy.get('#main').click(300, 30)
    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    cy.wait(500);
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click({ force: true });
    cy.wait(1000);
    cy.get(loc.integracao.cliente).click({ force: true });
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
      cy.get(loc.integracao.cliente).click({ force: true });
      cy.wait(5000);
    //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    } 
    
    //editando...
    cy.contains("SALOMAO ATUALIZADO",{ matchCase: false }).dblclick()
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
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
 
 })
 it('listagem - Criar, e Excluir - Cliente', () => {
  if (cy.get('#navigation-menu').should("be.visible")) {
    cy.get('#main').click(300, 30)
    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    cy.wait(500);
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click({ force: true });
    cy.wait(1000);
    cy.get(loc.integracao.cliente).click({ force: true });
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
      cy.get(loc.integracao.cliente).click({ force: true });
      cy.wait(5000);
    //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    } 
 
    cy.get(loc.integracao.adicionar).click()
    cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
    cy.get('#razaoSocial').clear().type("BASICO")
    cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('PADRAO')
    cy.get(loc.menu.selecionaItem).click({timeout: 10000})
    cy.wait(1000)
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Consumidor')
    cy.get(loc.menu.selecionaItem).click({timeout: 10000})
    cy.wait(1000)
    cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Não Contribuinte')
    cy.get(loc.menu.selecionaItem).click({timeout: 10000})
    cy.wait(1000)
    cy.get('#pfCpf').type("23505986593")
    cy.wait(1000)
    cy.get('#btn-salvar > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
    cy.wait(1000)
    cy.contains("BASICO",{ matchCase: false }).click()
    cy.get('#btn-excluir > span.ng-scope').click()
    cy.wait(1000)
    
    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
    
   
    
 })  
})  
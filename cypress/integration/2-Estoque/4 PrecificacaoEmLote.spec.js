///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('ESTOQUE - Precificação de produtos em lote | Possibilidade de alterar em tela "preço de custo"' , () => {
  
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
   cy.contains('Selecionar...').click({ force: true })
    cy.contains('CONTROLE DE QUALIDADE AUTOMAÇÃO').click({ force: true })
    cy.contains('SELECIONAR FILIAL').click({ force: true })
    cy.wait(5000)
     cy.get("[class=ng-binding]").should("contain", "Inicio");
     
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators 
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators
 
  })
     it('Alterar Preço de custo do produto e aplicar alteração em Lote', () => {
      if (cy.get('#navigation-menu').should("be.visible")) {
        cy.get('#main').click(300, 30)
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.estoque.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.estoque.precificacaoEmLote).click({ force: true });
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
          cy.get(loc.estoque.icone).click({ force: true });
          cy.wait(1000);
          cy.get(loc.estoque.precificacaoEmLote).click({ force: true });
          cy.wait(5000);
        //  cy.get(loc.menu.caminho).should("contain", "");
          cy.wait(500);
          //Fechar navigator bar
          cy.get(loc.menu.fixar).click({ force: true });
          cy.wait(2000);
        } 
    
        cy.get('.ui-select-match > .form-control').click()
        cy.get('.ui-select-search').type("formula padr")
        cy.wait(100)
        cy.get('.ui-select-choices-row-inner > .text-truncate').click()
        cy.wait(100)
        cy.get('[style="background: #bbb;"] > span.ng-scope').click()
        cy.get(':nth-child(4) > .form-group > .ui-select-container > :nth-child(1) > .ui-select-search').type("alcoli")
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click()
        cy.get('.md-dialog-content > .layout-align-end-stretch > .md-raised > .ng-scope').click()
        cy.wait(100)
   
//altera preço de custo
cy.get('[ng-repeat="produto in ctrl.produtos | startFrom:(ctrl.currentPage-1)*ctrl.pageSize | limitTo:ctrl.pageSize"][style=""] > :nth-child(5) > .button-mini > .fa').click()
cy.get('#preco').clear().type("12345")
cy.get('.flex-20 > .layout-row > .md-raised').click()
cy.wait(200)
cy.get(':nth-child(2) > :nth-child(5) > .button-mini > .fa').click()
cy.get('#preco').clear().type("12345")
cy.get('.flex-20 > .layout-row > .md-raised').click()
cy.wait(200)

cy.get('[ng-repeat="produto in ctrl.produtos | startFrom:(ctrl.currentPage-1)*ctrl.pageSize | limitTo:ctrl.pageSize"][style=""] > :nth-child(5)').should('contain','123,45')
cy.get(':nth-child(5) > .md-primary > .ng-scope').click()




})



it('Abrir - Ler e Voltar - Cadastro Produto', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.estoque.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.estoque.produto).click({ force: true });
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
        cy.get(loc.estoque.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.estoque.produto).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
  
//editando...
cy.contains("CERVEJA").dblclick({force:true}) 
cy.wait(1000)
cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
cy.get(loc.estoque.Corpo).should('contain','123,45')


cy.get('.col-md-24 > .pull-right > .md-button > span.ng-scope').click({force:true})
cy.get(loc.menu.caminho).should('contain', 'Produto')

})

})
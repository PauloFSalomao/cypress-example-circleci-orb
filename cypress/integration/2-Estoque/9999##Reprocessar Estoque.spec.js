///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Grupo Clientes' , () => {
  
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);   
    
  })
  
  it('Login', () =>{
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.contains('ACESSAR').click({ force: true })
    cy.wait(5000)
    
   //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
   cy.contains('Selecionar...').click({timeout: 10000})
    cy.contains('DEMONSTRAÇÃO').click({timeout: 10000})
    cy.contains('SELECIONAR FILIAL').click({timeout: 10000})
     cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators 
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators
  
  })
     it.only('Reprocessa Estoque - Reservado e Real - todos produtos', () => {
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
    
        
        cy.get(':nth-child(1) > .col-md-16 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("FAQUEIRO INOX")
        cy.get(loc.menu.selecionaItem).click({timeout: 10000})
        cy.wait(1000)
        cy.get(':nth-child(2) > .col-md-16 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("A TODOS OS PRODUTOS")
        cy.get(loc.menu.selecionaItem).click({timeout: 10000})
        cy.wait(1000)

        cy.get('.ml-15 > .ng-scope').click()
        cy.get('.swal2-confirm').click({timeout: 600000})//60segundos
        cy.wait(5000)
        cy.get('#swal2-title').should('contain', "sucesso")
        cy.get('.swal2-confirm').click({timeout: 600000})//60segundos
        cy.wait(1000)
        cy.get(':nth-child(1) > .col-md-16 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("real")
        cy.get(loc.menu.selecionaItem).click({timeout: 10000})
        cy.wait(1000)
        cy.get(':nth-child(2) > .col-md-16 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("todos")
        cy.get(loc.menu.selecionaItem).click({timeout: 10000})
        cy.wait(1000)

        cy.get('.ml-15 > .ng-scope').click()
        cy.get('.swal2-confirm').click({ force: true })//60seguntos
        cy.wait(50000)
        cy.get('#swal2-title').should('contain', "sucesso")
        cy.get('.swal2-confirm').click()
  
    })

        
})
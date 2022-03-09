///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Fornecedor', () => {
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
  it('listagem - Editar - Fornecedor', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.integracao.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.integracao.fornecedor).click({ force: true });
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
        cy.get(loc.integracao.fornecedor).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
     cy.contains("FARMACIA INDIANA",{ matchCase: false }).click()
     cy.wait(1000)
     cy.get('#btn-editar').click()
     cy.wait(1000)

     cy.get(loc.menu.caminho2).should('contain', 'Editar')

     cy.get('#razaoSocial').clear().type("Farmacia Drogazil")
     cy.get('#valorMinimoFaturamento').clear().type("10000000")
     cy.get('#valorMinimoFaturamento').clear().type("50000")



     cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').type("fornecedor")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get('#intFornecedorGrupo > .ui-select-match > .form-control').type("geral")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get(':nth-child(4) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').type("contribuinte icms")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type("capital proprio")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})

     cy.get('#fantasia').clear().type("Drogaria drogazil")
     cy.get('#email').clear().type("drogazil@gmail.com")
     cy.get('#telefone').clear().type("7332631111")
     cy.get('#site').clear().type("www.drogabrasil.com")
     cy.get('#observacao').clear().type("compras")
     cy.get('#observacao').clear().type("Somente no boleto")  

     cy.get('#pjCnpj').clear().type("61585865000151")
     cy.get('#pjInscricaoEstadual').clear().type("123451")
     cy.get('#pjFundacao').clear().type("05041957")

     cy.get(':nth-child(4) > .col-md-24 > .panel > .panel-heading').click({timeout: 5000})
     cy.get('#enderecoCep').clear().type("45985180")
     cy.get('#enderecoLogradouroNumero').clear().type("598")
     cy.wait(200)
     cy.get(':nth-child(5) > .col-md-24 > .panel > .panel-heading').click()
     cy.wait(200)
     cy.get('#financeiroBancoAgencia').clear().type("5239")
     cy.get('#financeiroConta').clear().type("80204")
     cy.get('#financeiroContaOperacao').type("1")
     cy.wait(1000)
    
   //  cy.get('#radio_9 > .md-container > .md-off').click()
     cy.get('#finInstituicaoFinanceira > .ui-select-match > .form-control').type("BANCO DO BRASIL S.A")
     cy.wait(200)
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
   
    //salvar
     cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click()
     cy.get(loc.menu.aviso).should('contain', 'sucesso')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})

})



it('listagem - Ler - Fornecedor', () => {
  if (cy.get('#navigation-menu').should("be.visible")) {
    cy.get('#main').click(300, 30)
    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    cy.wait(500);
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click({ force: true });
    cy.wait(1000);
    cy.get(loc.integracao.fornecedor).click({ force: true });
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
      cy.get(loc.integracao.fornecedor).click({ force: true });
      cy.wait(5000);
    //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    } 
  cy.contains("Farmacia Drogazil",{ matchCase: false }).dblclick()
  cy.wait(2000)
 cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get(loc.integracao.Corpo).should('contain','FARMACIA DROGAZIL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','500',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','DROGARIA DROGAZIL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','www.drogabrasil.com',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Ativo',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','61.585.865/0001-51',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','05/04/1957',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','123451',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','GERAL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Contribuinte ICMS',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','(73) 3263-1111',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','drogazil@gmail.com',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','CAPITAL PROPRIO',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Somente no boleto',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','45.985-180',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Rua Zilda Arns Neumann',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','598',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Centro',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','TEIXEIRA DE FREITAS - BA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Banco do Brasil S.A.',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','5239',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','80204',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Conta corrente',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','111',{ matchCase: false })
 cy.get('.col-md-24 > .pull-right > .md-button').click()
 

})
it('listagem - Ler - Fornecedor', () => {
  if (cy.get('#navigation-menu').should("be.visible")) {
    cy.get('#main').click(300, 30)
    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    cy.wait(500);
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click({ force: true });
    cy.wait(1000);
    cy.get(loc.integracao.fornecedor).click({ force: true });
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
      cy.get(loc.integracao.fornecedor).click({ force: true });
      cy.wait(5000);
    //  cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
    } 
//abrir e ler
   cy.contains("Farmacia Drogazil",{ matchCase: false }).click()

   cy.wait(1000)

   cy.get('#btn-excluir > span.ng-scope').click()
   cy.wait(1000)
   
   cy.get('.swal2-confirm').click()
   cy.get(loc.menu.aviso).should('contain', 'sucesso')
   cy.get(loc.menu.fechaaviso).click({timeout: 10000})


})
})
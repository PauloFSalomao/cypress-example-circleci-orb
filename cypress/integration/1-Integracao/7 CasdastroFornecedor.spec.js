///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Fornecedores', () => {
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
  it('listagem - Criar, e Excluir - Fornecedor', () => {
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
  
     cy.get(loc.integracao.adicionar).click({timeout: 20000})
     cy.get('#razaoSocial').type("Farmacia Indiana")
     cy.get('#valorMinimoFaturamento').type("10000000")
     cy.get('#valorMinimoFaturamento').clear().type("100000")

     //cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-search').click()
     cy.get(':nth-child(3) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').type("fabrica")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get('#intFornecedorGrupo > .ui-select-match > .form-control').type("drogaria")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get(':nth-child(4) > :nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .form-control').type("contribuinte isento de inscrição")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type("DROGARIAS E LABOATORIOS")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})

     cy.get('#fantasia').type("Drogaria Indiana")
     cy.get('#email').type("indianas@gmail.com")
     cy.get('#site').type("www.indiodeana.com")
     cy.get('#telefone').type("7332631122")
     cy.get('#observacao').type("teste")
     cy.get('#observacao').clear().type("Compras somente a vista")
     cy.get('#pjCnpj').type("25102146001060")
     cy.get('#pjInscricaoEstadual').type("123456")
     cy.get('#pjFundacao').type("05041954")

     cy.get(':nth-child(4) > .col-md-24 > .panel > .panel-heading').click({timeout: 5000})
     cy.get('#enderecoCep').type("40391412")
     cy.get('#enderecoLogradouroNumero').type("321")
     cy.wait(200)
     cy.get(':nth-child(5) > .col-md-24 > .panel > .panel-heading').click()
     cy.wait(200)
     cy.get('#radio_10 > .md-container > .md-off').click()
  
     cy.wait(200)
     cy.get('#finInstituicaoFinanceira > .ui-select-match > .form-control').type("BANCO BRADESCO S.A")
     cy.get(loc.menu.selecionaItem).click({timeout: 10000})
     cy.get('#financeiroBancoAgencia').type("1239")
     cy.get('#financeiroConta').type("80047")
     cy.wait(200)
     cy.get('#financeiroContaOperacao').type("1")
     cy.wait(200)
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
//abrir e ler
cy.wait(2000);
cy.contains("FARMACIA INDIANA",{ matchCase: false }).dblclick()
cy.wait(1000)
cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get(loc.integracao.Corpo).should('contain','FARMACIA INDIANA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','www.indiodeana.com',{ matchCase: false })

 cy.get(loc.integracao.Corpo).should('contain','1000',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','DROGARIA INDIANA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Fabricante ',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','25.102.146/0010-60',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','05/04/1954',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','123456',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','DROGARIAS',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Contribuinte Isento de Inscrição no Cadastro',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','(73) 3263-1122',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','indianas@gmail.com',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','DROGARIAS E LABOATORIOS',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Compras somente a vista',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','40.391-412',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Avenida Indiana',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','321',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','São Caetano',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','SALVADOR - BA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Banco Bradesco S.A.',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','1239',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','80047',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Conta corrente',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','123456',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','123456',{ matchCase: false })
 cy.get('.col-md-24 > .pull-right > .md-button').click()
 

})


})
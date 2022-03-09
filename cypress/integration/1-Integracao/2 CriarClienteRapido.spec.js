///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD - Clientes', () => {
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);   
    
    
  })
  
  it('Login', () =>{
	   cy.wait(5000)
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.contains('ACESSAR').click({ force: true })
   
    
    cy.wait(2000)
   //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
   cy.contains('Selecionar...').click({timeout: 50000})
    cy.contains('CONTROLE DE QUALIDADE AUTOMAÇÃO').click({timeout: 50000})
    cy.contains('SELECIONAR FILIAL').click({timeout: 50000})
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators 
     cy.wait(5000)
    // cy.get(loc.menu.fixar).click()//locators
  
  })



  
it('listagem - Criar, e Excluir - Cliente', () => {
	 cy.wait(5000)
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
     cy.get('#radio_7 > .md-container > .md-off').click({ force: true })
     cy.wait(500)
     cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Razão social")
     ///cy.get(':nth-child(1) > .col-md-16 > .form-group').should("contain", "Nome")
     cy.wait(500)
    
     cy.get('#razaoSocial').type("FARMACIA INDIANA")
     cy.get('#pjCnpj').type(`${meuCpf}`)

     

     cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').clear().type('73999035376')
     cy.get('#celular').type('73999035376')
     
     cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('PADRAO')
     cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
     cy.wait(1000)
     cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Consumidor')
     cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
     cy.wait(1000)
     cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Não Contribuinte')
     cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
     cy.wait(1000)
      //grupo empresarial
    // cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type('CAPITAL PROPRIO')
     //cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})

     cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-heading > .panel-title').click({force:true})
     cy.get('.col-md-24 > .form-group > #descricao').type("teste")
     cy.get('#logradouroNumero').type("123")
     cy.get('#cep').type("45990292")
     cy.wait(1000)
     cy.get('#spcObservacao').type("teste")
     cy.contains('Adicionar').click({timeout: 10000})
     cy.get('#observacao').type("teste")
     cy.wait(1000)
     cy.get(loc.menu.salvar).click({timeout: 10000})
     cy.get(loc.menu.aviso).should('contain', 'sucesso')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})
     cy.wait(1000)
     cy.contains("FARMACIA INDIANA",{ matchCase: false }).click()
     cy.get('#btn-excluir > span.ng-scope').click()
     cy.wait(1000)
     
     cy.get('.swal2-confirm').click()
     cy.get(loc.menu.aviso).should('contain', 'sucesso')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})
     
    
     
  })  



  })
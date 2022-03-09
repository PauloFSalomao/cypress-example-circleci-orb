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
it('listagem - Criar -  Cliente', () => {
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
   //adicionar 
   cy.get(loc.integracao.adicionar).click({ force: true })
   cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
  //verificar clica em juridia e verifica razao
//  cy.get('#radio_5 > .md-container > .md-off').click({timeout: 10000})
//  cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Razão social")
// //verificar clica em fisica e verifica nome
//  cy.get('#radio_4 > .md-container > .md-off').click({timeout: 10000})
//  cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Nome")
 //razao social
 cy.get('#razaoSocial').clear().type('SALOMAO TESTE')
 cy.get('#fantasia').clear().type('TESTE-ERP')
 cy.get('#site').clear().type('www.SALOMAOTeste.com.br')
 cy.get('#email').clear().type('SALOMAO@adsoft.com')      
 

 //telefone
 cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').clear().type('73999035376')
 cy.get('#celular').clear().type('73999035376')
 
 cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('PADRAO')
 cy.get(loc.menu.selecionaItem).click({timeout: 10000})
 cy.wait(1000)
 cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Consumidor')
 cy.get(loc.menu.selecionaItem).click({timeout: 10000})
 cy.wait(1000)
 cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Não Contribuinte')
 cy.get(loc.menu.selecionaItem).click({timeout: 10000})
 cy.wait(1000)
  //grupo empresarial
 cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type('CAPITAL PROPRIO')
 cy.get(loc.menu.selecionaItem).click({timeout: 10000})
 cy.wait(1000)
 cy.get('#spcDataInclusao').type('08092021')
 //mensgaem p/ venda,  observção,  spc 
 cy.get('#mensagemVenda').click()
 cy.get('#mensagemVenda').clear().type('SOMENTE AVISTA')
 cy.get('#observacao').click()
 cy.get('#observacao').clear().type('SOMENTE DINHEIRO')
 cy.get('#spcObservacao').click()
 cy.get('#spcObservacao').clear().type('CONSULTADO')
 
 //cpf e dt nascimento
 cy.wait(500)
 cy.get('#pfNascimento').type('20071987')
 cy.get('#pfCpf').type("23505986593")
 //cy.get('[label="Pessoa física"]').click(950, 170) //feminino
 cy.get('#radio_8 > .md-container > .md-off').click({timeout: 10000})//feminino
 cy.get('#pfPai').clear().type('JOAO')
 cy.get('#pfMae').clear().type('MARIA')
 cy.get('#pfIdentidade').type('149828408')
//dados empregaticios
cy.wait(500)
cy.get('[label="Dados empregatícios"] > .panel-heading').click()
cy.get('#pfProfissao').clear().type('Analista-Teste')
cy.get('#pfEmpregador').clear().type('Empresa')
cy.get('#pfAdmissao').clear().type('01072012')
cy.get('#pfRenda').clear().type('700000')
cy.get('[label="Dados empregatícios"] > .panel-body > :nth-child(2) > .col-md-6 > .form-group > .form-control').type('7')
//DADOS DO CÔNJUGE
cy.wait(500)
cy.get('[label="Dados do cônjuge"] > .panel-heading').click()
cy.get('#pfConjuge').clear().type('Luana')
cy.get('#pfConjugeNascimento').clear().type('25021984')
cy.get('#pfConjugeCpf').clear().type(`${meuCpf}`)
cy.get('#pfConjugeIdentidade').clear().type('103334749')
cy.get('#pfConjugeProfissao').clear().type('Administradora')
cy.get('#pfConjugeEmpregador').clear().type('EXXON')
cy.get('#pfConjugeAdmissao').clear().type('20072021')
cy.get('#pfConjugeRenda').clear().type('700000')
       
 //FATURAMENTO
       
 cy.contains('faturamento',{ matchCase: false }).click({timeout: 10000})
 cy.get('#fatTabelavenda > .ui-select-match > .form-control').type('10% ESPECIAL')
 cy.get('.ui-select-choices-row-inner').click()
 cy.wait(500)
 cy.get('#diasInadimplenciaCarencia').clear().type('30')
 cy.get('#Vendedor > .ui-select-match > .form-control').type('LETICIA')
 cy.get(' .ui-select-choices-row-inner > .text-truncate').click()
 cy.get('#creditoLimite').clear().type('200000')
 cy.wait(500)

 //ENDEREÇO
      
 cy.get('[label="Endereço"] > .panel-heading').click({timeout: 10000})
 cy.get('#enderecoComplemento').click({timeout: 10000})
 cy.get('#enderecoComplemento').clear().type('PRINCIPAL')
 cy.get('#enderecoCep').type('45990292')
 cy.wait(200)
 cy.get('#enderecoLogradouroNumero').type('108')
//endereço cobrança
cy.wait(500)
cy.get('[label="Endereço de cobrança"] > .panel-heading').click({timeout: 10000})
cy.get('#cobrancaComplemento').click({timeout: 10000})
cy.get('#cobrancaComplemento').clear().type('CASA')
cy.get('#cobrancaCep').type('21725180')
cy.wait(200)
cy.get('#cobrancaLogradouroNumero').type('208')
 //endereços 2 dois endereços
 cy.wait(500)
 cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-heading').click({timeout: 10000})
 cy.get('#referencia').click({timeout: 10000})
 cy.get('#referencia').clear().type('AVENIDA')
 cy.get('.col-md-24 > .form-group > #descricao').click({timeout: 10000})
 cy.get('.col-md-24 > .form-group > #descricao').clear().type('ENTREGAR-ENCOMENDAS')
 cy.get('#cep').type('45987034')
 cy.wait(200)
 cy.get('#logradouroNumero').type('128')
 cy.get('.margin-top-10 > .btn').click()
 cy.wait(200)

 cy.get('#logradouroNumero').type('9921')
 cy.get('.margin-top-10 > .btn').click()
 cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "ENTREGAR-ENCOMENDAS")


 //REFERENCIAS
cy.wait(500)
cy.get('[datasource="ctrl.referencia"] > .panel > .panel-heading').click()
cy.get('#empresa').type('PROVEDORX')
cy.get(':nth-child(1) > :nth-child(2) > .form-group > .input-group > #telefone').type('77999988888')
cy.wait(500)
cy.get('#cadastro').type('01012014')
cy.get('#compraMedia').type('5000000')
cy.get('#atrasoMedia').type('15')
cy.wait(500)
cy.get(':nth-child(2) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control').type('B')
cy.wait(500)
cy.get('.ui-select-choices-row-inner').click()
cy.wait(500)
cy.get('.margin-top-15 > .btn').click()
cy.get('[datasource="ctrl.referencia"] > .panel > .panel-body').should("contain", "PROVEDORX")
cy.wait(500)
 //salvar
 cy.get(loc.menu.salvar).click({timeout: 10000})
 cy.get('.toast').should("contain", "SUCESSO")
       
})
it('abrir, Visualziar e Ler - Cliente', () => {

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
  //abrir e ler
 cy.contains("SALOMAO TESTE",{ matchCase: false }).dblclick()
 cy.wait(1000)
 cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get(loc.integracao.Corpo).should('contain','SALOMAO TESTE',{ matchCase: false })
 //cy.get(loc.integracao.Corpo).should('contain','574.513.148-98',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Ativo',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','149828408',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','20/jul/1987',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','PADRAO',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Física',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','WWW.SALOMAOTESTE.COM.BR',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','SALOMAO@ADSOFT.COM',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','(73) 99903-5376',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','(73) 99903-5376',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','C - CONSUMIDOR FINAL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','9 - NÃO CONTRIBUINTE',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','CAPITAL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','08/09/2021',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','SOMENTE DINHEIRO',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','CONSULTADO',{ matchCase: false })
//dados empregaticios
 cy.get(loc.integracao.Corpo).should('contain','ANALISTA-TESTE',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','EMPRESA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','01/07/2012',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','R$7.000,00',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','7',{ matchCase: false })
 //faturamento
 cy.get(loc.integracao.Corpo).should('contain','10% ESPECIAL',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','LETICIA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','R$2.000,00',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','30',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
//conjuque
cy.get(loc.integracao.Corpo).should('contain','LUANA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','25/02/1984',{ matchCase: false })
//cy.get(loc.integracao.Corpo).should('contain','927.575.576-02',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','103334749',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','ADMINISTRADORA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','EXXON',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','20/07/2021',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','R$7.000,00',{ matchCase: false })
cy.wait(1000)
//endereço
 cy.get(loc.integracao.Corpo).should('contain','45.990-292',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Rua da Pituba',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','108',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Bela Vista',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','TEIXEIRA DE FREITAS - BA',{ matchCase: false })
//ENDEREÇO DE COBRANÇA
 cy.get(loc.integracao.Corpo).should('contain','21.725-180',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Rua Hélio do Amaral',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','208',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Realengo',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','RIO DE JANEIRO - BA',{ matchCase: false })
//ENDEREÇOS
 cy.get(loc.integracao.Corpo).should('contain','ENTREGAR-ENCOMENDAS',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','45.987-034',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Wilson Guimarães Soares',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','128',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','AVENIDA',{ matchCase: false })
 

 //REFERÊNCIAS
 cy.get(loc.integracao.Corpo).should('contain','PROVEDORX',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','(77) 99998-8888',{ matchCase: false })
 //cy.get(loc.integracao.Corpo).should('contain','01/01/2014',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','50.000,00',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','15',{ matchCase: false })
 cy.get(loc.integracao.Corpo).should('contain','Bom',{ matchCase: false })
 cy.wait(1000)
 //voltar
 cy.get('.col-md-24 > .pull-right > .md-button > .fa').click()
 cy.get(loc.menu.caminho).should('contain', 'Cliente')
 
})

})
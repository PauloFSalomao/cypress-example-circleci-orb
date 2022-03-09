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
 
    cy.wait(5000)
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


  it('Abrir - Editar  Cliente', () => {
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
 cy.contains("SALOMAO Teste",{ matchCase: false }).dblclick()
 cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get('[ng-click="ctrl.editarCadastro()"] > span.ng-scope').click()
 cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Editar')
 cy.wait(2000)

 //verificar clica em juridia e verifica razao
 
cy.get('[label="Identificação"]').click(115,95)
cy.get('[label="Identificação"]').should('contain','Júridica')
cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain","Razão social")


//verificar clica em fisica e verifica nome
cy.get('[label="Identificação"]').click(40,95)
cy.get('[label="Identificação"]').should('contain','Física')
cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Nome")

//razao social
cy.get('#razaoSocial').clear().type('SALOMAO ATUALIZADO')
cy.get('#fantasia').clear().type('TESTE-ERP-ATUALIZADO')
cy.get('#site').clear().type('www.SALOMAOTeste-Atualizado.com.br')
cy.get('#email').clear().type('SALOMAO.udk@gmail.com')      

//telefone
cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').clear().type('73999035577')
cy.get('#celular').clear().type('73999035577')

cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('CLASSE A')
cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
cy.wait(1000)
cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('Revendedor')
cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
cy.wait(1000)
cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('CONTRIBUINTE ICMS')
cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
cy.wait(1000)
cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type('CAPITAL PROPRIO')
cy.get('.ui-select-choices-row-inner > .text-truncate').click({timeout: 10000})
cy.wait(1000)
cy.get('#spcDataInclusao').type('10082021')
//mensgaem p/ venda,  observção,  spc 
cy.get('#mensagemVenda').click()
cy.get('#mensagemVenda').clear().type('DE PREFERENCIA AVISTA')
cy.get('#observacao').click()
cy.get('#observacao').clear().type('DE PREFERENCIA DINHEIRO')
cy.get('#spcObservacao').click()
cy.get('#spcObservacao').clear().type('ESTA CONSULTADO')

//cpf e dt nascimento
cy.wait(500)
cy.get('#pfNascimento').type('21071986')
cy.get('#pfCpf').type('66964774971')
cy.get('[label="Pessoa física"]').click(780, 170) //masculino
cy.get('#radio_10').click({timeout: 10000})//masculino
cy.get('#pfPai').clear().type('MARIO-BROS')
cy.get('#pfMae').clear().type('PRINCESA PEACH') 
cy.get('#pfIdentidade').type('149828408')
//dados empregaticios
cy.wait(500)
cy.get('[label="Dados empregatícios"] > .panel-heading').click()
cy.get('#pfProfissao').clear().type('Analista-Teste-QA')
cy.get('#pfEmpregador').clear().type('KONAMY')
cy.get('#pfAdmissao').clear().type('02082014')
cy.get('#pfRenda').clear().type('800000')
cy.get('[label="Dados empregatícios"] > .panel-body > :nth-child(2) > .col-md-6 > .form-group > .form-control').type('8')
//DADOS DO CÔNJUGE
cy.wait(500)
cy.get('[label="Dados do cônjuge"] > .panel-heading').click()
cy.get('#pfConjuge').clear().type('Maira')
cy.get('#pfConjugeNascimento').clear().type('26021989')
cy.get('#pfConjugeCpf').clear().type('95047140210')
cy.get('#pfConjugeIdentidade').clear().type('496712743')
cy.get('#pfConjugeProfissao').clear().type('Engenheira')
cy.get('#pfConjugeEmpregador').clear().type('SONY')
cy.get('#pfConjugeAdmissao').clear().type('20012020')
cy.get('#pfConjugeRenda').clear().type('90000')
      
//FATURAMENTO
      
cy.contains('faturamento',{ matchCase: false }).click({timeout: 10000})
cy.get('#fatTabelavenda > .ui-select-match > .form-control').type('10% ESPECIAL')
cy.get('.ui-select-choices-row-inner').click()
cy.wait(500)
cy.get('#diasInadimplenciaCarencia').clear().type('30')
cy.get('#Vendedor > .ui-select-match > .form-control').type('LETICIA')
cy.get(' .ui-select-choices-row-inner > .text-truncate').click()
cy.get('#creditoLimite').clear().type('100000')
cy.wait(500)

//ENDEREÇO
     
cy.get('[label="Endereço"] > .panel-heading').click({timeout: 10000})
cy.get('#enderecoComplemento').click({timeout: 10000})
cy.get('#enderecoComplemento').clear().type('BASICO')
cy.get('#enderecoCep').type('45990292')
cy.wait(200)
cy.get('#enderecoLogradouroNumero').type('108')
//endereço cobrança
cy.wait(500)
cy.get('[label="Endereço de cobrança"] > .panel-heading').click({timeout: 10000})
cy.get('#cobrancaComplemento').click({timeout: 10000})
cy.get('#cobrancaComplemento').clear().type('RESIDENCIA')
cy.get('#cobrancaCep').type('21725180')
cy.wait(200)
cy.get('#cobrancaLogradouroNumero').type('208')
//endereços 2 dois endereços
cy.wait(500)
cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-heading').click({timeout: 10000})
cy.get('[ng-show="ctrl.modelo.enderecos.length"] > tbody > :nth-child(1) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
cy.get('#menu_container_6 > .md-menu-small > :nth-child(1) > .md-button > span.ng-scope').click()
cy.wait(1000)
cy.get('#referencia').click({timeout: 10000})
cy.get('#referencia').clear().type('TRAVESSA')
cy.get('.col-md-24 > .form-group > #descricao').click({timeout: 10000})
cy.get('.col-md-24 > .form-group > #descricao').clear().type('COBRANÇA')
cy.get('#cep').type('45987034')
cy.wait(200)
cy.get('#logradouroNumero').type('128')
cy.get('.ng-scope > .btn-primary').click()

cy.wait(200)

cy.get('.margin-top-10 > .btn').click()
cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "TRAVESSA")



// cy.get('[ng-show="ctrl.modelo.enderecos.length"] > tbody > :nth-child(2) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
// cy.get('#menu_container_20 > .md-menu-small > :nth-child(2) > .md-button > [ng-show="!c.desativado && c.id"]').click()


//REFERENCIAS
cy.wait(500)
cy.get('[datasource="ctrl.referencia"] > .panel > .panel-heading').click()

//ADD UM NOVO
cy.get('#empresa').type('SUPERCOMPRA')
cy.get(':nth-child(1) > :nth-child(2) > .form-group > .input-group > #telefone').type('77899988887')
cy.wait(500)
cy.get('#cadastro').type('01012014')
cy.get('#compraMedia').type('4000000')
cy.get('#atrasoMedia').type('15')
cy.get(':nth-child(2) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control').type('B')
cy.get('.ui-select-choices-row-inner').click()
cy.wait(500)
cy.get('.margin-top-15 > .btn').click()
cy.get('[datasource="ctrl.referencia"] > .panel > .panel-body').should("contain", "SUPERCOMPRA")


//EDITA O PRIMEIRO
cy.get('[ng-show="ctrl.modelo.referencias.length"] > tbody > :nth-child(1) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
cy.get('#menu_container_7 > .md-menu-small > :nth-child(1) > .md-button').click()

cy.get('#empresa').type('KINGHOST')
cy.get(':nth-child(1) > :nth-child(2) > .form-group > .input-group > #telefone').type('77999774888')
cy.wait(500)
cy.get('#cadastro').type('01012014')
cy.get('#compraMedia').type('5000000')
cy.get('#atrasoMedia').type('15')
cy.get(':nth-child(2) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control').type('B')
cy.get('.ui-select-choices-row-inner').click()
cy.wait(500)
 
cy.get('.margin-top-15 > .ng-scope > .btn-primary').click()
cy.get('[datasource="ctrl.referencia"] > .panel > .panel-body').should("contain", "KINGHOST")
cy.wait(500)

//REMOVE O SEGUNDO
//cy.get('[ng-show="ctrl.modelo.referencias.length"] > tbody > :nth-child(1) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
//cy.get(':nth-child(2) > [width="80"] > .btn-group > .md-menu > .md-icon-button').click()
//cy.get('#menu_container_12 > .md-menu-small > :nth-child(2) > .md-button').click()
//cy.get('.swal2-confirm').click({timeout: 10000})
//salvar
cy.get('#btn-salvar').click({timeout: 10000})
cy.get('.toast').should("contain", "atualizado")

})
it('Abrir Editado - Visualizar Edição e Ler alteração Cliente', () => {
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
cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
cy.wait(1000)

cy.get(loc.integracao.Corpo).should('contain','SALOMAO ATUALIZADO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','669.647.749-71',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Ativo',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','149828408',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','21/jul/1986',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','CLASSE A',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Física',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','WWW.SALOMAOTESTE-ATUALIZADO.COM.BR',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','SALOMAO.UDK@GMAIL.COM',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','(73) 99903-5577',{ matchCase: false })
//cy.get(loc.integracao.Corpo).should('contain','(73) 99903-5577',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','M - MASCULINO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','R - REVENDEDOR',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','1 - CONTRIBUINTE ICMS',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','CAPITAL PROPRIO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','08/09/2021',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','DE PREFERENCIA DINHEIRO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','ESTA CONSULTADO',{ matchCase: false })
//dados empregaticios
cy.get(loc.integracao.Corpo).should('contain','ANALISTA-TESTE-QA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','KONAMY',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','02/08/2014',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','R$8.000,00',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','8',{ matchCase: false })
//faturamento
cy.get(loc.integracao.Corpo).should('contain','10% ESPECIAL',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','LETICIA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','R$1.000,00',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','30',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','NÃO',{ matchCase: false })
//conjuque
cy.get(loc.integracao.Corpo).should('contain','MAIRA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','26/02/1989',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','950.471.402-10',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','496712743',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','ENGENHEIRA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','SONY',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','20/01/2020',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','R$900,00',{ matchCase: false })
cy.wait(1000)
//endereço
cy.get(loc.integracao.Corpo).should('contain','45.990-292',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Rua da Pituba',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','108108',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Bela Vista',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','TEIXEIRA DE FREITAS - BA',{ matchCase: false })
//ENDEREÇO DE COBRANÇA
cy.get(loc.integracao.Corpo).should('contain','21.725-180',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Rua Hélio do Amaral',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','208208',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Realengo',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','RIO DE JANEIRO - BA',{ matchCase: false })
//ENDEREÇOS
cy.get(loc.integracao.Corpo).should('contain','COBRANÇA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','45.987-034',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Wilson Guimarães Soares',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','128128',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','TRAVESSA',{ matchCase: false })


//REFERÊNCIAS
cy.get(loc.integracao.Corpo).should('contain','PROVEDORX',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','(77) 99998-8888',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','31/12/2013',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','50.000,00',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','15',{ matchCase: false })
cy.get(loc.integracao.Corpo).should('contain','Bom',{ matchCase: false })
cy.wait(1000)
//voltar
cy.get('.col-md-24 > .pull-right > .md-button > .fa').click()
cy.get(loc.menu.caminho).should('contain', 'Cliente')


})



})
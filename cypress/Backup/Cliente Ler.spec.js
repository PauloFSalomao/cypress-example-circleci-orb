///<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('Testar o Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.contains('ACESSAR').click({timeout: 20000})
    cy.contains('Selecionar...').click({timeout: 10000})
    cy.contains('DEMONSTRAÇÃO').click({timeout: 10000})
    cy.get('.ui-select-match-text > .ng-binding').should("contain", 'DEMONSTRAÇÃO')
    cy.contains('SELECIONAR FILIAL').click({timeout: 10000})
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    cy.wait(500)
    cy.get(loc.menu.navigator).click()//locators 
    cy.wait(500)
    cy.get(loc.menu.fixar).click()//locators
 

})
it('listagem - Criar -  Cliente', () => {
   //seleciona cliente no menu
   cy.get(loc.integracao.icone).click()
   cy.get(loc.integracao.cliente).click()
   cy.get(loc.menu.caminho).should('contain', 'Cliente')
   //Fechar navigator bar
   cy.get(loc.menu.fixar).click({timeout: 10000})
   cy.wait(1000)
   //verifica acentuação 
   cy.get('.panel').should('contain', 'Razão social')
   cy.get('.panel').should('contain', 'Código')
   cy.get('.panel').should('contain', 'Últ. Atualização')
   //adicionar 
   cy.get(loc.integracao.adicionar).click()
   cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
  //verificar clica em juridia e verifica razao
 cy.get('#radio_5 > .md-container > .md-off').click()
 cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Razão social")
//verificar clica em fisica e verifica nome
 cy.get('#radio_6 > .md-container > .md-off').click()
 cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Nome")
 //razao social
 cy.get('#razaoSocial').clear().type('ATHOS TESTE')
 cy.get('#fantasia').clear().type('TESTE-ERP')
 cy.get('#site').clear().type('www.AthosTeste.com.br')
 cy.get('#email').clear().type('Athos@adsoft.com')      
 

 //telefone
 cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').clear().type('73999035376')
 cy.get('#celular').clear().type('73999035376')
 
 cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('PADRAO')
 cy.get('#ui-select-choices-row-13-0 > .ui-select-choices-row-inner > .text-truncate').click()
 cy.wait(1000)
 cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('C')
 cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner > .text-truncate').click()
 cy.wait(1000)
 cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('9')
 cy.get('.ui-select-choices-row-inner').click()
 cy.wait(1000)
 cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type('CAPITAL')
 cy.get('.ui-select-choices-row-inner').click()
 cy.wait(1000)
 cy.get('#spcDataInclusao').type('08092021')
 //mensgaem p/ venda,  observção,  spc 
 cy.get('#mensagemVenda').click()
 cy.get('#mensagemVenda').clear().type('SOMENTE AVISTA')
 cy.get('#observacao').click()
 cy.get('#observacao').clear().type('SOMENTE DINHEIRO')
 cy.get('#spcObservacao').click()
 cy.get('#spcObservacao').clear().type('CONSULTADO')
 //grupo empresarial
 cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click({timeout: 10000})
 cy.get('#ui-select-choices-row-14-0 > .ui-select-choices-row-inner').click()
 //cpf e dt nascimento
 cy.wait(500)
 cy.get('#pfNascimento').type('20071987')
 cy.get('#pfCpf').type('57451314898')
 //cy.get('[label="Pessoa física"]').click(950, 170) //feminino
 cy.get('#radio_7 > .md-container > .md-off').click({timeout: 10000})//feminino
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
cy.get('#pfConjugeCpf').clear().type('92757557602')
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
 cy.get('#fatVendedor > .ui-select-match > .form-control').type('LETICIA')
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
 cy.get('#descricao').click({timeout: 10000})
 cy.get('#descricao').clear().type('ENTREGAR-ENCOMENDAS')
 cy.get('#cep').type('45987034')
 cy.wait(200)
 cy.get('#logradouroNumero').type('128')
 cy.get('.margin-top-10 > .btn').click()
 cy.wait(200)
 cy.get('#referencia').click({timeout: 10000})
 cy.get('#referencia').clear().type('RUA-ASFALTADA')
 cy.get('#descricao').click({timeout: 10000})
 cy.get('#descricao').clear().type('REDEBER-ENCOMENDAS')
 cy.get('#cep').type('45986330')
 cy.wait(200)
 cy.get('#logradouroNumero').type('9921')
 cy.get('.margin-top-10 > .btn').click()
 cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "ENTREGAR-ENCOMENDAS")
 cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "REDEBER-ENCOMENDAS")

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
 cy.get('#btn-salvar').click({timeout: 10000})
 cy.get('.toast').should("contain", "sucesso")
       
})
it('abrir, Visualziar e Ler - Cliente', () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click()
    cy.get(loc.integracao.cliente).click()
    cy.get(loc.menu.caminho).should('contain', 'Cliente')
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.wait(1000)
    //verifica acentuação 
    cy.get('.panel').should('contain', 'Razão social')
    cy.get('.panel').should('contain', 'Código')
    cy.get('.panel').should('contain', 'Últ. Atualização')
  //abrir e ler
 cy.contains("Athos Teste",{ matchCase: false }).dblclick()
 cy.wait(1000)
 cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get(loc.integracao.Visualizar).should('contain','ATHOS TESTE',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','574.513.148-98',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Ativo',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','149828408',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','20/jul/1987',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','PADRAO',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Física',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','WWW.ATHOSTESTE.COM.BR',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','ATHOS@ADSOFT.COM',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','(73) 99903-5376',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','(73) 99903-5376',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','F - FEMININO',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','C - CONSUMIDOR FINAL',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','9 - NÃO CONTRIBUINTE',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','CAPITAL',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','08/09/2021',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','SOMENTE DINHEIRO',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','CONSULTADO',{ matchCase: false })
//dados empregaticios
 cy.get(loc.integracao.Visualizar).should('contain','ANALISTA-TESTE',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','EMPRESA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','01/07/2012',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','R$7.000,00',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','7',{ matchCase: false })
 //faturamento
 cy.get(loc.integracao.Visualizar).should('contain','10% ESPECIAL',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','LETICIA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','R$2.000,00',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','30',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
//conjuque
cy.get(loc.integracao.Visualizar).should('contain','LUANA',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','1984-02-25',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','927.575.576-02',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','103334749',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','ADMINISTRADORA',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','EXXON',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','2021-07-20',{ matchCase: false })
cy.get(loc.integracao.Visualizar).should('contain','R$7.000,00',{ matchCase: false })
cy.wait(1000)
//endereço
 cy.get(loc.integracao.Visualizar).should('contain','45.990-292',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Rua da Pituba',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','108',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Bela Vista',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS - BA',{ matchCase: false })
//ENDEREÇO DE COBRANÇA
 cy.get(loc.integracao.Visualizar).should('contain','21.725-180',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Rua Hélio do Amaral',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','208',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Realengo',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','RIO DE JANEIRO - BA',{ matchCase: false })
//ENDEREÇOS
 cy.get(loc.integracao.Visualizar).should('contain','REDEBER-ENCOMENDAS',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','45.987-034',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Wilson Guimarães Soares',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','128',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','AVENIDA',{ matchCase: false })
 
 cy.get(loc.integracao.Visualizar).should('contain','ENTREGAR-ENCOMENDAS',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','45.986-330',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Setor Bahia Sul',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','9921',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','RUA-ASFALTADA',{ matchCase: false })
 //REFERÊNCIAS
 cy.get(loc.integracao.Visualizar).should('contain','PROVEDORX',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','(77) 99998-8888',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','31/12/2013',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','50.000,00',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','15',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','Bom',{ matchCase: false })
 cy.wait(1000)
 //voltar
 cy.get('.col-md-24 > .pull-right > .md-button > .fa').click()
 cy.get(loc.menu.caminho).should('contain', 'Cliente')
 
})
it('Abrir - Editar  Cliente', () => {
   //seleciona cliente no menu
   cy.get(loc.integracao.icone).click()
   cy.get(loc.integracao.cliente).click()
   cy.get(loc.menu.caminho).should('contain', 'Cliente')
   //Fechar navigator bar
   cy.get(loc.menu.fixar).click({timeout: 10000})
   cy.wait(1000)
 
   //editando...
   cy.contains("Athos Teste",{ matchCase: false }).dblclick()
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
  cy.get('#razaoSocial').clear().type('ATHOS ATUALIZADO')
  cy.get('#fantasia').clear().type('TESTE-ERP-ATUALIZADO')
  cy.get('#site').clear().type('www.AthosTeste-Atualizado.com.br')
  cy.get('#email').clear().type('athos.udk@gmail.com')      
  
  //telefone
  cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').clear().type('73999035577')
  cy.get('#celular').clear().type('73999035577')
  
  cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('SERVIÇOS')
  cy.get('#ui-select-choices-row-13-0 > .ui-select-choices-row-inner > .text-truncate').click()
  cy.wait(500)
  cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('R')
  cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner > .text-truncate').click()
  cy.wait(500)
  cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').type('2')
  cy.get('.ui-select-choices-row-inner').click()
  cy.wait(500)
  cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control').type('GRUPO KELLY')
  cy.get('.ui-select-choices-row-inner').click()
  cy.wait(500)
  cy.get('#spcDataInclusao').type('10082021')
  //mensgaem p/ venda,  observção,  spc 
  cy.get('#mensagemVenda').click()
  cy.get('#mensagemVenda').clear().type('DE PREFERENCIA AVISTA')
  cy.get('#observacao').click()
  cy.get('#observacao').clear().type('DE PREFERENCIA DINHEIRO')
  cy.get('#spcObservacao').click()
  cy.get('#spcObservacao').clear().type('ESTA CONSULTADO')
  //grupo empresarial
  cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click({timeout: 10000})
  cy.get('#ui-select-choices-row-14-0 > .ui-select-choices-row-inner').click()
  //cpf e dt nascimento
  cy.wait(500)
  cy.get('#pfNascimento').type('21071986')
  cy.get('#pfCpf').type('66964774971')
  //cy.get('[label="Pessoa física"]').click(780, 170) //masculino
  cy.get('#radio_8 > .md-container > .md-off').click({timeout: 10000})//masculino
  cy.get('#pfPai').clear().type('MARIO-BROS')
  cy.get('#pfMae').clear().type('PRINCESA PEACH') 
  cy.get('#pfIdentidade').type('101255676')
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
  cy.get('#fatVendedor > .ui-select-match > .form-control').type('JOAB')
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
  cy.get('#menu_container_19 > .md-menu-small > :nth-child(1) > .md-button > span.ng-scope').click()
  cy.wait(1000)
  cy.get('#referencia').click({timeout: 10000})
  cy.get('#referencia').clear().type('TRAVESSA')
  cy.get('#descricao').click({timeout: 10000})
  cy.get('#descricao').clear().type('COBRANÇA')
  cy.get('#cep').type('45987034')
  cy.wait(200)
  cy.get('#logradouroNumero').type('128')
  cy.get('.ng-scope > .btn-primary').click()

  cy.wait(200)
  cy.get('#referencia').click({timeout: 10000})
  cy.get('#referencia').clear().type('RUA-PRINCIPAL')
  cy.get('#descricao').click({timeout: 10000})
  cy.get('#descricao').clear().type('ENCOMENDAS')
  cy.get('#cep').type('45986330')
  cy.wait(200)


  cy.get('#logradouroNumero').type('9021')
  cy.get('.margin-top-10 > .btn').click()
  cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "TRAVESSA")
  cy.get('[fields="ctrl.dicionarios[2]"] > :nth-child(1) > :nth-child(1) > .panel > .panel-body').should("contain", "ENCOMENDAS")
  
  cy.get('[ng-show="ctrl.modelo.enderecos.length"] > tbody > :nth-child(2) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
  cy.get('#menu_container_20 > .md-menu-small > :nth-child(2) > .md-button > [ng-show="!c.desativado && c.id"]').click()

 
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
 cy.get('#menu_container_23 > .md-menu-small > :nth-child(1) > .md-button > span.ng-scope').click()
  
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
 cy.get('[ng-show="ctrl.modelo.referencias.length"] > tbody > :nth-child(1) > [width="80"] > .btn-group > .md-menu > .md-icon-button > .fa').click()
 cy.get('#menu_container_24 > .md-menu-small > :nth-child(2) > .md-button > span.ng-scope').click()
  //salvar
  cy.get('#btn-salvar').click({timeout: 10000})
  cy.get('.toast').should("contain", "atualizado")

})
it('Abrir Editado - Visualizar Edição e Ler alteração Cliente', () => {
  //seleciona cliente no menu
  cy.get(loc.integracao.icone).click()
  cy.get(loc.integracao.Cliente).click()
  cy.get(loc.menu.caminho).should('contain', 'Cliente')
  //Fechar navigator bar
  cy.get(loc.menu.fixar).click({timeout: 10000})
  cy.wait(1000)

  //editando...
  cy.contains("Athos Teste",{ matchCase: false }).dblclick()
  cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
  cy.wait(1000)

  cy.get(loc.integracao.Visualizar).should('contain','ATHOS TESTE',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','574.513.148-98',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Ativo',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','149828408',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','20/jul/1987',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','PADRAO',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Física',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','WWW.ATHOSTESTE.COM.BR',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','ATHOS@ADSOFT.COM',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','(73) 99903-5376',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','(73) 99903-5376',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','F - FEMININO',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','C - CONSUMIDOR FINAL',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','9 - NÃO CONTRIBUINTE',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','CAPITAL',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','08/09/2021',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','SOMENTE DINHEIRO',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','CONSULTADO',{ matchCase: false })
 //dados empregaticios
  cy.get(loc.integracao.Visualizar).should('contain','ANALISTA-TESTE',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','EMPRESA',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','01/07/2012',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','R$7.000,00',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','7',{ matchCase: false })
  //faturamento
  cy.get(loc.integracao.Visualizar).should('contain','10% ESPECIAL',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','LETICIA',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','R$2.000,00',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','30',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','NÃO',{ matchCase: false })
 //conjuque
 cy.get(loc.integracao.Visualizar).should('contain','LUANA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','1984-02-25',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','927.575.576-02',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','103334749',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','ADMINISTRADORA',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','EXXON',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','2021-07-20',{ matchCase: false })
 cy.get(loc.integracao.Visualizar).should('contain','R$7.000,00',{ matchCase: false })
 cy.wait(1000)
 //endereço
  cy.get(loc.integracao.Visualizar).should('contain','45.990-292',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Rua da Pituba',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','108',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Bela Vista',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS - BA',{ matchCase: false })
 //ENDEREÇO DE COBRANÇA
  cy.get(loc.integracao.Visualizar).should('contain','21.725-180',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Rua Hélio do Amaral',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','208',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Realengo',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','RIO DE JANEIRO - BA',{ matchCase: false })
 //ENDEREÇOS
  cy.get(loc.integracao.Visualizar).should('contain','REDEBER-ENCOMENDAS',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','45.987-034',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Wilson Guimarães Soares',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','128',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','AVENIDA',{ matchCase: false })
  
  cy.get(loc.integracao.Visualizar).should('contain','ENTREGAR-ENCOMENDAS',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','45.986-330',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','TEIXEIRA DE FREITAS / BA',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Setor Bahia Sul',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Avenida Presidente Getúlio Vargas',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','9921',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','RUA-ASFALTADA',{ matchCase: false })
  //REFERÊNCIAS
  cy.get(loc.integracao.Visualizar).should('contain','PROVEDORX',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','(77) 99998-8888',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','31/12/2013',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','50.000,00',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','15',{ matchCase: false })
  cy.get(loc.integracao.Visualizar).should('contain','Bom',{ matchCase: false })
  cy.wait(1000)
  //voltar
  cy.get('.col-md-24 > .pull-right > .md-button > .fa').click()
  cy.get(loc.menu.caminho).should('contain', 'Cliente')


})
it('Abrir - Editar, cancelar edição e Excluir - Cliente', () => {
   //seleciona cliente no menu
   cy.get(loc.integracao.icone).click()
   cy.get(loc.integracao.Cliente).click()
   cy.get(loc.menu.caminho).should('contain', 'Cliente')
   //Fechar navigator bar
   cy.get(loc.menu.fixar).click({timeout: 10000})
   cy.wait(1000)
   //verifica acentuação 
   cy.get('.panel').should('contain', 'Descrição')
   cy.get('.panel').should('contain', 'Últ. Atualização')
   
   //editando...
   cy.contains("TESTE EDITADO",{ matchCase: false }).dblclick()
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
   //seleciona cliente no menu
   cy.get(loc.integracao.icone).click()
   cy.get(loc.integracao.Cliente).click()
   cy.get(loc.menu.caminho).should('contain', 'Cliente')
   //Fechar navigator bar
   cy.get(loc.menu.fixar).click({timeout: 10000})
   cy.wait(1000)
   //verifica acentuação 
   cy.get('.panel').should('contain', 'Descrição')
   cy.get('.panel').should('contain', 'Últ. Atualização')

   cy.get(loc.integracao.adicionar).click()
   cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
   cy.get('#descricao').clear().type("BASICO")
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
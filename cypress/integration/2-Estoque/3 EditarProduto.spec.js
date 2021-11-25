<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

context('GRUD -  Produto' , () => {
  
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
     it('Editar -  Produto', () => {
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
   cy.contains("PARAFUSADEIRA SOLAR").dblclick({force:true}) 
   cy.wait(1000)

        //adicionar 
        cy.get('[ng-click="ctrl.editarCadastro()"] > span.ng-scope').click({force: true})
        cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Editar')


       //unidade comercial
       cy.get(':nth-child(1) > :nth-child(1) > .panel > .panel-body').click(150, 310 ).click(150, 420 )
        cy.get(':nth-child(1) > :nth-child(1) > .panel > .panel-body').click(150, 250 ).click(150, 400 )
       

       //grupo produto
        cy.get('.col-md-18 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("BOSCH")
        cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner').click({timeout: 10000})

        // unidade comercial
        cy.get('[datasource="ctrl.modelo.estProdutoImposto[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control').type("JOGO")
        cy.get(".ui-select-choices-row-inner > .text-truncate").click()

       
        //nome eam
        cy.get('#descricao').clear().type("Parafusadeira a Bateria 3,6V")
        cy.get('#ean').clear().type("2154785214745")
        cy.get('#codigoAuxiliar').clear().type("951247")
        cy.get('#codigoFabricante').clear().type("852147")
        cy.get('#dicaAplicacao').clear().type("Parede Madeira apenas")
        cy.get('#garantiaTempo').clear().type("45")
        cy.get(':nth-child(2) > .form-group > .ui-select-container > .select2-choice').type("BOSCH LTDA")
        cy.get('.select2-result-label > .ng-binding').click({force:true})

        // preços e custos

        cy.get(':nth-child(3) > .col-md-24 > .panel > .panel-heading > .panel-title').click({force:true})
       cy.get('#precoCompra').clear().type("1100")
       cy.get('#precoCusto').clear().type("1600")
        cy.get('#lucroDesejado').clear().type("3500")
        cy.get('#precoVenda').clear().type("2900")
        cy.get('#cmpFormulaPreco > .ui-select-match > .form-control').type("MARGEM INVERSA")
        cy.wait(500)
        cy.get("#ui-select-choices-row-26-0 > .ui-select-choices-row-inner").click({force:true})
        cy.wait(500)
        cy.get('.row > .col-md-3 > .md-raised > span.ng-scope').click({force:true})
        cy.wait(500)
        //calcualr o preco de venda
        cy.get('h2').should('contain',"Calcular")
        cy.get(':nth-child(9) > :nth-child(2) > .col-md-20 > .form-group > .form-control').type("1600")
        cy.get('[ng-repeat="item in campos"][style=""] > :nth-child(2) > .col-md-20 > .form-group > .form-control').type("3500")
       
        cy.get('[ng-click="ctrl.processaFormula()"]').click()
        cy.wait(500)
        cy.get('.layout-row > .md-accent > span.ng-scope').click({force:true})
        
        //Estoque
        cy.get(':nth-child(4) > .col-md-24 > .panel > .panel-heading > .panel-title').click({force:true})
        cy.get('#estoqueEstArmazem > .ui-select-match > .form-control').click()
        cy.wait(500)
        cy.get('#estoqueEstArmazem > .ui-select-search').type("MOSTRUARIO")
        cy.wait(500)
        cy.get(".ui-select-highlight").click()


        //Endereçamento
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-heading > .panel-title').click({force:true})


        //Classificação Tributaria
        cy.get(':nth-child(6) > :nth-child(1) > .panel > .panel-heading > .panel-title').click({force:true})
        cy.get('#fisGrupoTributacao > .ui-select-match > .form-control').type("TRIBUTADO NORMAL")
        cy.get('.ui-select-choices-row-inner').click()


      //salvar
      cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click({force:true})
      cy.get(loc.menu.aviso).should('contain', 'sucesso')
      cy.get(loc.menu.fechaaviso).click({timeout: 10000})

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
 cy.contains("PARAFUSADEIRA A BATERIA 3,6V").dblclick({force:true}) 
 cy.wait(1000)
 cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
 cy.get(loc.estoque.Corpo).should('contain','PARAFUSADEIRA A BATERIA 3,6V')
 cy.get(loc.estoque.Corpo).should('contain','BOSCH')
 cy.get(loc.estoque.Corpo).should('contain','2154785214745')
 cy.get(loc.estoque.Corpo).should('contain','951247')
 cy.get(loc.estoque.Corpo).should('contain','852147')
 cy.get(loc.estoque.Corpo).should('contain','BLOCO')

 cy.get(loc.estoque.Corpo).should('contain','JOGO')
 cy.get(loc.estoque.Corpo).should('contain','NÃO')
 cy.get(loc.estoque.Corpo).should('contain','BOSCH LTDA')
 cy.get(loc.estoque.Corpo).should('contain','PAREDE MADEIRA APENAS')
 cy.get(loc.estoque.Corpo).should('contain','R$ 52')
 cy.get(loc.estoque.Corpo).should('contain','R$ 16,00')
 cy.get(loc.estoque.Corpo).should('contain','R$ 11,00')
 cy.get(loc.estoque.Corpo).should('contain','35,00%')
 cy.get(loc.estoque.Corpo).should('contain','INVERSA')
 cy.get(loc.estoque.Corpo).should('contain','MOSTRUARIO')
 cy.get(loc.estoque.Corpo).should('contain','TRIBUTADO NORMAL')
 cy.get('.col-md-24 > .pull-right > .md-button > span.ng-scope').click({force:true})
 cy.get(loc.menu.caminho).should('contain', 'Produto')

    })
    it('Abrir - Excluir - Cadastro Produto', () => {
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
    
//EXCLUINDO...
cy.contains("PARAFUSADEIRA A BATERIA 3,6V").dblclick({force:true}) 
cy.wait(1000)
    
cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({ force: true })
cy.get('.swal2-confirm').click()
cy.get(loc.menu.aviso).should('contain', 'sucesso')
cy.get(loc.menu.fechaaviso).click({timeout: 10000})


    })



    
  })
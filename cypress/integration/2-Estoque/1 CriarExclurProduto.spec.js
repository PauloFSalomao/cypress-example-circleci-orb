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
     it('Criar - Cadastro Produto', () => {
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
    
        //adicionar 
        cy.get(loc.menu.adicionar2).click({timeout: 10000})
        cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
        cy.wait(1500)

       //unidade comercial
        cy.get(':nth-child(1) > :nth-child(1) > .panel > .panel-body').click(150, 250 ).click(150, 400 )
        cy.get(':nth-child(1) > :nth-child(1) > .panel > .panel-body').click(150, 310 ).click(150, 420 )
        cy.wait(500)
       //grupo produto
        cy.get('.col-md-18 > .form-group > .ui-select-container > .ui-select-match > .form-control').type("BOSCH")
        cy.wait(500)
        cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner').click({timeout: 10000})
        cy.wait(500)
        // unidade comercial
        cy.get('[datasource="ctrl.modelo.estProdutoImposto[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control').type("UNID")
        cy.wait(500)
        cy.get("#ui-select-choices-row-6-9 > .ui-select-choices-row-inner > .text-truncate").click()
        cy.wait(500)

       
        //nome eam
        cy.get('#descricao').type("Furadeira Silenciosa")
        cy.wait(500)
        cy.get('#ean').type("2154780125487")
        cy.get('#codigoAuxiliar').type("654123")
        cy.get('#codigoFabricante').type("99585854")
        cy.wait(500)
        cy.get('#dicaAplicacao').type("Parede Madeira Concreto")
        cy.get('#garantiaTempo').type("30")
        cy.wait(500)
        cy.get(':nth-child(2) > .form-group > .ui-select-container > .select2-choice').type("BLACK")
        cy.wait(500)
        cy.get('.select2-result-label > .ng-binding').click({force:true})
        cy.wait(500)

        // preços e custos

        cy.get(':nth-child(3) > .col-md-24 > .panel > .panel-heading > .panel-title').click({force:true})
       cy.get('#precoCompra').type("100000")
       cy.get('#precoCusto').type("150000")
        cy.get('#lucroDesejado').type("3000")
        cy.get('#precoVenda').type("200000")
        cy.get('#cmpFormulaPreco > .ui-select-match > .form-control').type("formula padrão")
        cy.get("#ui-select-choices-row-26-0 > .ui-select-choices-row-inner").click({force:true})
        cy.get('.row > .col-md-3 > .md-raised > span.ng-scope').click({force:true})
        //calcualr o preco de venda
        cy.get('h2').should('contain',"Calcular")
        cy.get(':nth-child(9) > :nth-child(2) > .col-md-20 > .form-group > .form-control').type("1500")
        cy.get('[ng-repeat="item in campos"][style=""] > :nth-child(2) > .col-md-20 > .form-group > .form-control').type("3000")
       
        cy.get('[ng-click="ctrl.processaFormula()"]').click()
        cy.wait(500)
        cy.get('.layout-row > .md-accent > span.ng-scope').click({force:true})
        
        //Estoque
        cy.get(':nth-child(4) > .col-md-24 > .panel > .panel-heading > .panel-title').click({force:true})
        cy.get('#estoqueEstArmazem > .ui-select-match > .form-control').click()
        cy.get('#estoqueEstArmazem > .ui-select-search').type("DEPOSITO INTERNO")
        cy.get(".ui-select-highlight").click()


        //Endereçamento
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-heading > .panel-title').click({force:true})


        //Classificação Tributaria
        cy.get(':nth-child(6) > :nth-child(1) > .panel > .panel-heading > .panel-title').click({force:true})
        cy.get('#fisGrupoTributacao > .ui-select-match > .form-control').type("TRIBUTADO INTEGRALMENTE")
        cy.get('.ui-select-choices-row-inner').click()


      //salvar
      cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click({force:true})
      cy.get(loc.menu.aviso).should('contain', 'sucesso')
      cy.get(loc.menu.fechaaviso).click({timeout: 10000})

      })

        it('Excluir - Produto acima', () => {
           //abrir a navigator bar
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
        
 cy.contains("FURADEIRA SILENCIOSA").click()
// cy.get('[aria-label="Deletar"] > span.ng-scope').click({ force: true })
 cy.get('[aria-label="Deletar"]').click({ force: true })
 cy.get('.swal2-confirm').click()
 cy.get(loc.menu.aviso).should('contain', 'sucesso')
 cy.get(loc.menu.fechaaviso).click({timeout: 10000})


    })
    
        
     
        
    })
    
    

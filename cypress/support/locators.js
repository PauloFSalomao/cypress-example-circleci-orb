const locators = {
login:{
    user:'#inputEmail',
    password:'#inputPassword'
},


ambiente:{
    beta:'https://erp-beta.golerp.com.br/',
    demo:'https://erp-test.golerp.com.br/',
},
descricao:{
    criar:'PastorBelga',
    editado:'Doberman',
   

},

menu:{
    navigator:'#navigation-menu-fold-expander',
    fixar:'span.fold-toggle',
    adicionar:'#btn-adicionar',
    caminho:':nth-child(3) > .ng-binding',
    caminho2:':nth-child(4) > .ng-binding',
    atualiza:'.layout-row > :nth-child(1) > .md-raised > .fa',
    aviso:'.toast-message',
    fechaaviso:'.toast > .md-icon-button > .ng-scope',
    fechaaviso2:':nth-child(6) > [data-layer="Content"]',
    painel:'.panel',
    salvar:"#btn-salvar > span.ng-scope",
    adicionar2:'[ng-click="ctrl.adicionarCadastro()"] > span.ng-scope',
    selecionaItem:".ui-select-choices-row-inner > .text-truncate"

},
integracao:{
    icone:':nth-child(1) > [href="#"] > .fi',
    cliente:'[style=""] > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    grupoCliente: '[style=""] > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    grupoFornecedor: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    grupoEmpresarial: ':nth-child(4) > ul.ng-scope > .navigation-menu-node > .navigation-menu-item > .navigation-menu-button > .title',
    fornecedor: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    
    adicionar:'#btn-adicionar > span.ng-scope',
    Visualizar:'[fields="ctrl.dicionarios[0]"] > :nth-child(1) > :nth-child(1)',
    Corpo:'.container'
},

fiscal:{
    icone:':nth-child(3) > [href="#"] > .fi',
    grupoTributario:':nth-child(1) > ul.ng-scope > .navigation-menu-node > .navigation-menu-item > .navigation-menu-button > .title',
},

estoque:{
    icone:':nth-child(3) > [href="#"] > .fi',
    produto:'[style=""] > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    reprocessarEstoque: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    Corpo:'.container',
    precificacaoEmLote:'[style=""] > ul.ng-scope > :nth-child(4) > .navigation-menu-item > .navigation-menu-button > .title',
},
compras:{
    icone:':nth-child(4) > a > .fi',
    grupoComprador:':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    comprador: ':nth-child(2) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    formulaPreco: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    regraCompra: ':nth-child(2) > ul.ng-scope > :nth-child(4) > .navigation-menu-item > .navigation-menu-button > .title',
    documentoEntrada: ':nth-child(1) > :nth-child(3) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    documentoFrete: ':nth-child(3) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    solicitacaoCompras: ':nth-child(1) > :nth-child(1) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    ordemCompras: ':nth-child(1) > :nth-child(1) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    cotacaoCompras: ':nth-child(1) > :nth-child(1) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    Corpo:'.container',

},
faturamento:{
    icone:':nth-child(5) > [href="#"] > .fi',
    documentoSaida:':nth-child(1) > :nth-child(4) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    pedido:':nth-child(1) > :nth-child(4) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    orçamento:':nth-child(1) > :nth-child(4) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    caminho:'.breadcrumb > :nth-child(4) > .ng-binding',
    adicionar:'[ng-click="ctrl.adicionarCadastro()"]'

    
},
financeiro:{
    icone:':nth-child(6) > a > .fi',
    contasReceber:':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    contasPagar:':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    caminho:'.breadcrumb > :nth-child(4) > .ng-binding',
    adicionar:'[ng-click="ctrl.adicionarCadastro()"] > span.ng-scope'
},
servico:{
    icone:':nth-child(7) > a > .fi',
    grupoServico:'[style=""] > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    planoServico:':nth-child(4) > .navigation-menu-item > .navigation-menu-button > .title',
    cadastraServico:':nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    documentoServico:'[style=""] > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    adicionar:'#btn-adicionar > span.ng-scope'
},
oms:{
    icone:':nth-child(8) > [href="#"] > .fi',
    monitorExpedicao:':nth-child(5) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title'
},

}
export default locators;
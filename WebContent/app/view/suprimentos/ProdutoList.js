Ext.define('App.view.suprimentos.ProdutoList', {
extend: 'Ext.grid.Panel',
alias: 'widget.produtolist',
itemId:'produtolist',
height: 200,
requires: [
'Ext.ux.RowExpander' // #2
],
//frame: true,
store: Ext.create('App.store.ComboProduto'), // #1 
columns: [

	{
width: 100,
dataIndex: 'codigo',
text: 'Codigo',
flex:1
},{
dataIndex:'descricao',
text:'Descrição',
width:80
},{
dataIndex:'precobase',
text:'Preço base',
width:100
 
},{
dataIndex:'curvaabc',
text:'Classificação',
width:100
 
},
{
width: 25,
dataIndex: 'ativo',

text: 'Ativo'
}
],
plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Insc Estadual:</b> <span style="color:blue;">{ativo}</span>',
'<b>Insc Municipal:</b> <span style="color:blue;">{ativo}</span>',
'<b>Cep:</b> <span style="color:blue;">{ativo}</span>',
'<b>Cidade:</b> <span style="color:blue;">{ativo}</span>'


 ]
}]
});
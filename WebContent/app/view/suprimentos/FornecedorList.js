Ext.define('App.view.suprimentos.FornecedorList', {
extend: 'Ext.grid.Panel',
alias: 'widget.fornecedorlist',
itemId:'fornecedorlist',
height: 200,
requires: [
'Ext.ux.RowExpander' // #2
],
//frame: true,
store: Ext.create('App.store.Fornecedor'), // #1 
columns: [

	{
width: 100,
dataIndex: 'razaosocial',
text: 'Razao Social',
flex:1
},{
dataIndex:'cnpj',
text:'cnpj',
width:80
},{
dataIndex:'tipoatividade',
text:'Regime Tribut.',
width:100
 
},{
dataIndex:'fantasia',
text:'fantasia',
width:100
 
},
{
width: 25,
dataIndex: 'uf',

text: 'uf'
}
],
plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Insc Estadual:</b> <span style="color:blue;">{ie}</span>',
'<b>Insc Municipal:</b> <span style="color:blue;">{im}</span>',
'<b>Cep:</b> <span style="color:blue;">{cep}</span>',
'<b>Cidade:</b> <span style="color:blue;">{cidade}</span>',
'<b>logradouro:</b> <span style="color:blue;">{logradouro}</span> <br>',
'<b>id:</b> <span style="color:blue;">{idfornecedores}</span> <br>'

 ]
}]
});
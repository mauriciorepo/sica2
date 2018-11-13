Ext.define('App.view.financeiro.ContasBancariasList', {
extend: 'Ext.grid.Panel',
alias: 'widget.contasbancariaslist',
itemId:'contasbancariaslist',
height: 200,
requires: [
'Ext.ux.RowExpander','App.store.ContasBancarias' // #2
],
//frame: true,
store: Ext.create('App.store.ContasBancarias'), // #1 
columns: [

	{
width: 100,
dataIndex: 'nome',
text: 'Razao Social',
flex:1
},{
dataIndex:'agencia',
text:'Agencia',
width:80
},{
dataIndex:'conta',
text:'Conta',
width:100
 
},
{
width: 25,
dataIndex: 'filiais_idfiliais',

text: 'Filial'
}
],
plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Insc Estadual:</b> <span style="color:blue;">{nome}</span>',
'<b>id:</b> <span style="color:blue;">{conta}</span> <br>'

 ]
}]
});
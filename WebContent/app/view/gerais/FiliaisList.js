Ext.define('App.view.gerais.FiliaisList', {
extend: 'Ext.grid.Panel',
alias: 'widget.filiaislist',
height: 200,
requires: [
'Ext.ux.RowExpander' // #2
],
//frame: true,
store: Ext.create('App.store.Filiais'), // #1 
columns: [

	{
width: 100,
dataIndex: 'razao',
text: 'Nome',
flex:1
},{
dataIndex:'cnpj',
text:'cnpj',
width:80
},{
dataIndex:'fantasia',
text:'fantasia',
width:100
 
},
{
width: 25,
dataIndex: 'uf',

text: 'uf'
}/*,
{
width: 70,
dataIndex: 'idade',
text: 'Idade'
}*/
],
plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Insc Estadual:</b> <span style="color:blue;">{inscricaoestadual}</span>',
'<b>Insc Municipal:</b> <span style="color:blue;">{inscricaomunicipal}</span>',
'<b>Cep:</b> <span style="color:blue;">{cep}</span>',
'<b>Cidade:</b> <span style="color:blue;">{cidade}</span>',
'<b>logradouro:</b> <span style="color:blue;">{logradouro}</span> <br>'

 ]
}]
});
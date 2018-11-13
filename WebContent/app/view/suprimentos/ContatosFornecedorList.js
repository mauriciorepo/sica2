Ext.define('App.view.suprimentos.ContatosFornecedorList', {
extend: 'Ext.grid.Panel',
alias: 'widget.contatosfornecedorlist',
height: 200,
requires: [
'Ext.ux.RowExpander' // #2
],
//frame: true,
store: Ext.create('App.store.ContatosFornecedor'), // #1 
columns: [

{
width: 90,
dataIndex: 'nome',
text: 'Nome',
flex:1

},{
dataIndex:'cargo',
text:'Cargo',
width:90,
flex:1
},{
dataIndex:'Telefone',
text:'telefone',
width:40,
flex:3
 
},{
dataIndex:'email',
text:'Email',
width:70,
flex:2
 
},{
dataIndex:'telefone2',
text:'Telefone',
width:40,
flex:3
 
}

],
plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Insc Estadual:</b> <span style="color:blue;">{ie}</span>',
'<b>Insc Municipal:</b> <span style="color:blue;">{im}</span>',
'<b>Cep:</b> <span style="color:blue;">{cep}</span>',
'<b>Cidade:</b> <span style="color:blue;">{cidade}</span>',
'<b>logradouro:</b> <span style="color:blue;">{logradouro}</span> <br>'

 ]
}]
});
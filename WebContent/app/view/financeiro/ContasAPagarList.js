Ext.define('App.view.financeiro.ContasAPagarList', {
extend: 'Ext.grid.Panel',
alias: 'widget.contasapagarlist',
itemId:'contasapagarlist',
height: 250,
cls: 'custom-first-last',
autoScroll:true,
requires: [
'Ext.ux.RowExpander','App.store.ContasAPagar' // #2
],
//frame: true,
store: Ext.create('App.store.StoreGridContasAPagar'), 
viewConfig: { 
        stripeRows: false, 
        getRowClass: function(record) { 
        	var data=record.get('vencimento');
        	var date=Ext.Date.format(new Date(), 'Y-m-d');
        	//date=new Date();
        	//console.log(data);
        	//console.log(date);
        	//console.log(new Date());
        	//var equal=Ext.Date.isEqual(data,date);
        	//console.log(equal);
        	if(data<date){
            return  'vencido-row' ;
           }
            if(!(data<date) & !(data > date) ){
            	console.log(data);
            	return 'dia-row';
            }if(data > date){
              return 'ok-row';
            }
        } 
    } ,// #1 
columns: [

{
	flex:1,
dataIndex:'num_nota',
text:'Nota'


},
{
flex:2,
width: 100,
dataIndex: 'razaosocial',
text: 'Favorecido(Fornecador)'


},	{
flex:1,
dataIndex: 'vencimento',
text: 'Vencimento',
 type: 'date',
renderer : Ext.util.Format.dateRenderer('d/m/Y'),
 dateFormat: 'Y/m/d'


},{
	flex:1,
dataIndex:'numparcela',
text:'Parcela'


},
	{
flex:1,
dataIndex: 'valor',

renderer : 'usMoney',
text: 'Valor Parc.'
},{
flex:1,
dataIndex: 'pago',
renderer : 'usMoney',


text: 'V. pago Parc.'
},{
	flex:1,
dataIndex:'meiopagamento',
text:'tipodocumento'


 
},
{
flex:1,
dataIndex: 'valortotal',
renderer : 'usMoney',


text: 'Total'
},
{

dataIndex: 'despesas_id_despesa',
hidden:true,
enableColumnHide :'true'

},{
flex:1,
dataIndex: 'idparcelasapagar',
//hidden:true,
//enableColumnHide :'true',
mapping:'parcelasapagar_idparcelasapagar'
}
]/*,

plugins: [{ // #5
ptype: 'rowexpander',
rowBodyTpl : [
'<b>Fantasia:</b> <span style="color:blue;">{fantasia}</span>',
'<b>id:</b> <span style="color:blue;">{}</span> <br>'

 ]
}]*/
});
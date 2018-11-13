Ext.define('App.view.financeiro.UpdateParcelasAPagarList', {
extend: 'Ext.grid.Panel',
alias: 'widget.UpdateParcelasAPagarList',
itemId:'UpdateParcelasAPagarList',
height: 300,
autoScrol:true,
closeAction:'hide',
selType:'cellmodel',

//selModel: Ext.create('Ext.selection.CheckboxModel'),
requires: [
'App.store.ParcelasAPagar','Ext.form.*','App.store.ComboParcelasContasAPagarContasBancarias'//,'Ext.grid.plugin.CellEditing' // #2
],

//frame: true,
store: Ext.create('App.store.UpdateParcelasAPagar'), // #1 
//features:[{   ftype:'summary'}],
columns: [
 Ext.create('Ext.grid.RowNumberer'),
{
width: 25,
dataIndex: 'numparcela',
allowBlank : false,
 header: 'Parcela',
 //renderer: 'usMoney',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    hideTrigger: true,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false,
                    maxValue: 900000000,
                    minValue:1
                },
flex:1
},{
width: 25,
dataIndex: 'valor',
xtype:'numbercolumn',
 header: 'Valor',
 allowBlank : false,
 /* summaryType:'sum',
 summaryRenderer:function(value , summaryData,field){
   return '&pound;' + Ext.Number.toFixed(value, 2);
 	},*/
 xtype:'numbercolumn',
 //renderer: 'usMoney',
                editor: {
                    xtype: 'numberfield',
                   focusOnToFront : true,
									 hideTrigger: true,
                                     keyNavEnabled: false,
                                     mouseWheelEnabled: false,
                                      maxValue: 900000000,
                                      minValue:1
                },
                renderer: Ext.util.Format.usMoney,
flex:1
},{
dataIndex:'contasbancarias_idcontasbancarias',
 header:'Conta',
width:80,
/*editor: new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    store: 'StoreComboParcelasContasAPagarContasBancarias'//,
                    //displayField: 'contas',
                    //valueField: 'idcontasbancarias'
                }),*/
editor:
      {
         xtype: 'combo',
         store: 'StoreComboParcelasContasAPagarContasBancarias',
         queryMode : 'local',
         displayField: 'nome',
         valueField: 'idcontasbancarias',
        afterLabelTextTpl : App.util.Util.required,
		blankText : 'Este campo precisa ser prenchido ',
		allowBlank : false,
		emptyText: 'Conta', 
		forceSelection : true,
		autoSelect : true,
		triggerAction: 'all',
        selectOnTab: true,
         typeAhead : true
       
       },renderer: function(value,metaData,record) {
                if(value) {
                    var Categories = Ext.getStore('StoreComboParcelasContasAPagarContasBancarias');
                    var catRecord = Categories.findRecord('idcontasbancarias', value);
                    return catRecord ? catRecord.get('nome'): record.get('nome');
                } else return "";
            },
flex:2
},{
dataIndex:'meiopagamento',
 header:'Meio Pagamento', 
editor:{
					xtype : 'combobox', //9
					//fieldLabel : 'Tipo Documento',
					//name : 'tipodocumento',
					//itemId : 'tipodocumento',
					//labelAlign : 'top',
					//flex : 2,
					//ancor : '-10',
					//afterLabelTextTpl : App.util.Util.required,
					blankText : 'Este campo precisa ser prenchido ',
					allowBlank : false,

					displayField : 'meiopagamento',
					valueField : 'tipo',
					//autoLoad:true,
					//valueNotFoundText :'Valor não corresponde',
					forceSelection : true,
					autoSelect : true,
					store : Ext.create('Ext.data.Store', {
								fields : ['tipo', 'meiopagamento'],
								data : [{
											"meiopagamento" : "Boleto Bancario",
											"tipo" : "Boleto Bancario"
										}, {
											"meiopagamento" : "TED",
											"tipo" : "TED"
										}, {
											"meiopagamento" : "Rede Bancaria ate o vencimento",
											"tipo" : "Rede Bancaria ate o vencimento"
										},{
											"meiopagamento" : "Deposito em C/C",
											"tipo" : "Deposito em C/C"
										}, {
											"meiopagamento" : "Parcelado",
											"tipo" : "Parcelado"
										}, {
											"meiopagamento" : "Cheque pré datado",
											"tipo" : "Cheque pré datado"
										}, {
											"meiopagamento" : "Cartão Debito",
											"tipo" : "Cartão Debito"
										},{
											"meiopagamento" : "Cartão Credito",
											"tipo" : "Cartão Credito"
										}, {
											"meiopagamento" : "Outros",
											"tipo" : "Outros"
										}]
							}),
					//width : 290,
					anchor : '-10',
					queryMode : 'local',
					allowBlank : false,
					typeAhead : true
				},
flex:2,
width:70
 
},
{
width: 30,
dataIndex: 'vencimento',
flex:1,
xtype: 'datecolumn',
 editor:{
            xtype: 'datefield',
          
			allowBlank : false,
            
		   hideTrigger:false,
			renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),												
           format:'d/m/Y',
		   submitFormat: 'Ymd',
           submitValue : true,
		   dateFormat: 'Ymd',
		   formatText:'Formato Invalido',
		   altFormats:'d/m/Y',
		   invalidText :'{0} não é uma data válida - precisa estar no formato {10/03/2009}'
									 //minValue: '01/01/06',
            //disabledDays: [0, 6],
            //disabledDaysText: 'Plants are not available on the weekends'
         },
 header: 'Vencimento'
},{
xtype:'actioncolumn', //8
width:50,
hideable: false,
items: [{
iconCls : 'editcontasapagar',
tooltip: 'Edit',
handler: function(grid, rowIndex, colIndex) {
var rec = grid.getStore().getAt(rowIndex);
Ext.MessageBox.alert('Edit',rec.get('book'));
}
},{
iconCls : 'cancel',
tooltip: 'Delete',
handler: function(grid, rowIndex, colIndex) {

var myCallback = function(btn, text) {
//console.log(btn);

}
Ext.Msg.show({
     title:'Deletar Registro',
     msg: 'Voce deseja realmente deletar esta linha ?',
     buttons: Ext.Msg.OKCANCEL,
     icon: Ext.Msg.QUESTION,
     fn : function(btn, text) {
							if (btn == 'ok') {
var rec = grid.getStore().getAt(rowIndex);

grid.getStore().remove(rec);
var g = Ext.ComponentQuery.query('ParcelasAPagarList')[0];
g.getView().refresh();

var win = Ext.ComponentQuery.query('ContasAPagarWindow')[0];

var formPanel = win.down('form');
       
formPanel.getForm().findField('parcelas').setValue(grid.getStore().getCount());
var val=0.0;
	    grid.getStore().each(function(rec,idx){
	        //console.log(rec.get('valor')); 
	       val=val+rec.get('valor');
	    });
	    
	    formPanel.getForm().findField('valor').setValue(val);
}

						}
});


}
}]
}




],
 listeners: {
               
                cellkeydown: function( grid, td, cellIndex, record, tr, rowIndex, e, eOpts ){
                
                	if (e.getKey() == e.F8) {
                        console.log('f8');
                    	//var form = field.up('form').getForm();
                        //form.submit();
                    }
                                            
                }
            },

plugins: [ Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            editing:true,
            pluginId:'cellplugin'
        })

        
        
        
       ],

			initComponent : function() {
			
				this.dockedItems = [{
							xtype : 'toolbar',
							dock : 'top',
							id : 'buttonupdateparcela',
							//ui: 'footer',
							items : [ {
								         //xtype:'fieldlabel',
							             text:'Parcelas:'
							},{
										xtype : 'button',
										text : 'Add Parcela',
										name:'addupdateparcelacontasapagar',
										itemId : 'addupdateparcelacontasapagar',
										iconCls : 'contareceber'
									}]
						}];

				this.callParent(arguments);
			}
});
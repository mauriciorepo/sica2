Ext.define('App.view.financeiro.DivisaodeRateioContasAPagarList', {
extend: 'Ext.grid.Panel',
alias: 'widget.DivisaodeRateioContasAPagarList',
itemId:'DivisaodeRateioContasAPagarList',
height: 300,
//autoScroll:true,
selType:'cellmodel',
requires: [
'App.store.ComboPlanodeContas','App.store.DivisaodeRateioContasAPagar','App.store.ComboContasAPagarCentrodeResultados' // #2
],
//frame: true,
store: Ext.create('App.store.DivisaodeRateioContasAPagar'), // #1 

columns: [

	{
width: 25,
dataIndex: 'planodecontas_idplanodecontas',
text: 'Plano de Conta',
editor:
      {
         xtype: 'combo',
         store: Ext.create('App.store.ComboPlanodeContas'),
         queryMode : 'local',
         displayField: 'nome',
         valueField: 'idplanodecontas',
        afterLabelTextTpl : App.util.Util.required,
		blankText : 'Este campo precisa ser prenchido ',
		allowBlank : false,
		emptyText: 'Plano Conta', 
		
		
		triggerAction: 'all',
        
         typeAhead : true, 
         listConfig : {
						getInnerTpl : function() {
							return '<div class="combo-result-item"><div  class"combo-name">{subtipo}   </div><div class="combo-full-address"> {nome}</div></div>';
						//data-qtip="{nome}. {subtipo}"
						}
					}
       
       },renderer: function(value,metaData,record) {
                if(value) {
                    var Categories = Ext.getStore('StoreComboPlanodeContas');
                    var catRecord = Categories.findRecord('idplanodecontas', value);
                    return catRecord ? catRecord.get('nome'): record.get('nome');
                } else return "";
            },
flex:2
},{
dataIndex:'centrodecusto_idcentrodecusto',
text:'Centro de Resultado',
width:80,
editor:
      {
        xtype: 'combo',
        store: Ext.create('App.store.ComboContasAPagarCentrodeResultados'),
        queryMode : 'local',
        displayField: 'centro',
        valueField: 'idcentrodecusto',
        afterLabelTextTpl : App.util.Util.required,
		blankText : 'Este campo precisa ser prenchido ',
		allowBlank : false,
		emptyText: 'Centro de Resultados', 
		forceSelection : true,
		autoSelect : true,
		triggerAction: 'all',
        selectOnTab: true,
         typeAhead : true, 
         listConfig : {
						getInnerTpl : function() {
							return '<div class="combo-result-item" data-qtip="{centro}. {subtipo}"><div  class"combo-name">{centro} : {subtipo}   </div><div class="combo-full-address"> {centro}</div></div>';
						//data-qtip="{nome}. {subtipo}"
						}
					}
       
       },renderer: function(value,metaData,record) {
                if(value) {
                    var Categories = Ext.getStore('StoreComboContasAPagarCentrodeResultados');
                    var catRecord = Categories.findRecord('idcentrodecusto', value);
                    return catRecord ? catRecord.get('centro'): record.get('centro');
                } else return "";
            },
flex:2
},{
dataIndex:'observacao',
text:'Observação', 
flex:2,
editor:{
  allowBlank:true
},
width:70
 
},
{
width: 30,
dataIndex: 'valor',
 //renderer: 'usMoney',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100.00,
                	disableKeyFilter :true
            },
flex:1,
text: 'Valor %'
},{
xtype:'actioncolumn', //8
width:50,
items: [{
iconCls : 'cancel',
hideable: false,
tooltip: 'Delete',
handler: function(grid, rowIndex, colIndex) {

Ext.Msg.show({
     title:'Deletar Registro',
     msg: 'Voce deseja realmente deletar esta linha ?',
     buttons: Ext.Msg.OKCANCEL,
     icon: Ext.Msg.QUESTION,
     fn : function(btn, text) {
							if (btn == 'ok') {
var rec = grid.getStore().getAt(rowIndex);

grid.getStore().remove(rec);
//var g = Ext.ComponentQuery.query('DivisaodeRateioContasAPagarList')[0];
//g.getView().refresh();

}

						}
});


}
}]
}
],
plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })],
initComponent : function() {
			
				this.dockedItems = [{
							xtype : 'toolbar',
							dock : 'top',
							//title:'Divisâo / Rateio',
							id : 'buttonrateio',
							//ui: 'footer',
							
							items : ['Divisâo / Rateio', {
										xtype : 'button',
										text : 'Add Rateio',
										itemId : 'addrateio',
										iconCls : 'contareceber'
									}]
						}];

				this.callParent(arguments);
			}
});
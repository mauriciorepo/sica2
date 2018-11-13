Ext.define('App.view.financeiro.UpdateContasAPagarWindow', {
			extend : 'Ext.window.Window',
			alias : 'widget.UpdateContasAPagarWindow',
			itemId:'UpdateContasAPagarWindow',
			id:'UpdateContasAPagarWindow',
			//autoScroll:true,
			 //manager: Ext.WindowGroup(),
			
			closeAction: 'hide',
			closable:false,
			//autoDestroy:false,
			reziable : false,
			//autoHeight: true,
			width : 855,
			//title:'Movimento',
			requires : [ 
					'App.view.financeiro.UpdateContasAPagar','Ext.form.*','Ext.form.Panel', 'Ext.form.field.Text','App.view.financeiro.UpdateDivisaodeRateioContasAPagarList',
					'App.util.Util','Ext.grid.*', 'App.util.CnpjField','App.store.ContasAPagar','App.store.ComboPlanodeContas','App.store.ComboParcelasContasAPagarContasBancarias',
					'Ext.ux.InputTextMask', 'App.util.CpfField','App.view.financeiro.UpdateParcelasAPagarList' // #1
			],
			defaults : {
			autoScroll : true,
				layout : 'anchor'
				//xtype:'form'
				//align: 'stretch'
			},
			/*layout : {
				type : 'fit' // #2
			},*/
             items : [{xtype : 'updatecontasapagar' }]
			/*initComponent : function() {
				this.items = [{
					//autoScroll:true,
					xtype : 'contasapagar'
							
							
							//items : [{xtype : 'movimentolist' }]
						}];

			
				this.callParent(arguments);
			}*/

		});
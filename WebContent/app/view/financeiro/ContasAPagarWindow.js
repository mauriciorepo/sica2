Ext.define('App.view.financeiro.ContasAPagarWindow', {
			extend : 'Ext.window.Window',
			alias : 'widget.ContasAPagarWindow',
			itemId:'ContasAPagarWindow',
			id:'ContasAPagarWindow',
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
					'App.view.financeiro.ContasAPagar','Ext.form.*','Ext.form.Panel', 'Ext.form.field.Text','App.view.financeiro.DivisaodeRateioContasAPagarList',
					'App.util.Util','Ext.grid.*', 'App.util.CnpjField','App.store.ContasAPagar','App.store.ComboPlanodeContas','App.store.ComboParcelasContasAPagarContasBancarias',
					'Ext.ux.InputTextMask', 'App.util.CpfField','App.view.financeiro.ParcelasAPagarList' // #1
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
             items : [{xtype : 'contasapagar' }]
			/*initComponent : function() {
				this.items = [{
					//autoScroll:true,
					xtype : 'contasapagar'
							
							
							//items : [{xtype : 'movimentolist' }]
						}];

			
				this.callParent(arguments);
			}*/

		});
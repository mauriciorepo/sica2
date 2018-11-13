Ext.define('App.view.financeiro.ContasAPagarPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.ContasAPagarPanel',
			itemId:'ContasAPagarPanel',
			//title:'Movimento',
			requires : [ 
					'App.view.financeiro.ContasAPagarList','App.store.ContasBancarias' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'contasapagarlist'
							
							
							//items : [{xtype : 'movimentolist' }]
						}];

				this.dockedItems = [{
							xtype : 'toolbar',
							dock : 'top',
							id : 'buttoncontasapagar',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Provisões a Pagar',
										itemId : 'addcontasapagar',
										iconCls : 'addcontasapagar'
									},{
										xtype : 'button',
										text : 'Editar Provisões',
										itemId : 'editarcontasapagar',
										iconCls : 'editcontasapagar'
									},{
									xtype : 'textfield',
									labelWidth:130,
									fieldLabel : 'Fornecedor',
									name:'fornecedor',
									itemId:'fornecedor',
									//id:'firma',
									//flex : 2,
										allowBlank : false 
									
								},{
										xtype : 'button',
										text : 'Pesquisa',
										itemId : 'pesquisacontaapagar',
										iconCls : 'pesquisa'
									}, {
										xtype : 'button',
										text : 'Lançar Pagamento',
										itemId : 'lancacontasapagar',
										iconCls : 'addcontatofornecedor'
									}]
						}];

				this.callParent(arguments);
			}

		});
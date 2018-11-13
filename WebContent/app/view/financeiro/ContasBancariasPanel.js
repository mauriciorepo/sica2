Ext.define('App.view.financeiro.ContasBancariasPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.ContasBancariastopanel',
			itemId:'ContasBancariastopanel',
			//title:'Movimento',
			requires : [
					'App.view.financeiro.ContasBancariasList','App.store.ContasBancarias' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'contasbancariaslist'
							//xtype : 'form',
							//padding : '5 5 0 5',
							//border : false,
							//anchor: '100%',
							//style : 'background-color: #fff;',

							
							//items : [{xtype : 'movimentolist' }]
						}];

				this.dockedItems = [{
							xtype : 'toolbar',
							dock : 'top',
							id : 'buttoncontas',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Conta Banco',
										itemId : 'addcontasbancarias',
										iconCls : 'cadastrofiliais'
									},{
										xtype : 'button',
										text : 'Editar Conta',
										itemId : 'editarcontasbancarias',
										iconCls : 'editarfilial'
									},{
									xtype : 'textfield',
									labelWidth:130,
									fieldLabel : 'Conta(Banco)',
									name:'conta',
									itemId:'conta',
									//id:'firma',
									//flex : 2,
										allowBlank : false 
									
								},{
										xtype : 'button',
										text : 'Pesquisa',
										itemId : 'pesquisaconta',
										iconCls : 'pesquisa'
									}]
						}];

				this.callParent(arguments);
			}

		});
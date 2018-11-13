Ext.define('App.view.suprimentos.FornecedorPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.Fornecedortopanel',
			itemId:'Fornecedortopanel',
			//title:'Movimento',
			requires : [
					'App.view.gerais.FiliaisList','App.store.ComboEmpresas' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'fornecedorlist'
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
							id : 'buttonfornecedor',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Fornecedor',
										itemId : 'cadastrofornecedor',
										iconCls : 'cadastrofiliais'
									},{
										xtype : 'button',
										text : 'Editar Fornecedor',
										itemId : 'editarfornecedor',
										iconCls : 'editarfilial'
									},{
									xtype : 'textfield',
									labelWidth:130,
									fieldLabel : 'Fornecedor(Fantasia)',
									name:'fornecedor',
									itemId:'fornecedor',
									//id:'firma',
									//flex : 2,
										allowBlank : false 
									
								},{
										xtype : 'button',
										text : 'Pesquisa',
										itemId : 'pesquisafornecedor',
										iconCls : 'pesquisa'
									}]
						}];

				this.callParent(arguments);
			}

		});
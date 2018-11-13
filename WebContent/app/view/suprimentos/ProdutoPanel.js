Ext.define('App.view.suprimentos.ProdutoPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.Produtopanel',
			itemId:'Produtopanel',
			//title:'Movimento',
			requires : [
					'App.view.suprimentos.ProdutoList','App.store.ComboEmpresas' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'produtolist'
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
							id : 'buttonpruduto',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Produto',
										itemId : 'cadastroproduto',
										iconCls : 'cadastrofiliais'
									},{
										xtype : 'button',
										text : 'Editar Produto',
										itemId : 'editarproduto',
										iconCls : 'editarfilial'
									},{
									xtype : 'textfield',
									labelWidth:130,
									fieldLabel : 'Produto',
									name:'produto',
									itemId:'produto',
									//id:'firma',
									//flex : 2,
										allowBlank : false 
									
								},{
										xtype : 'button',
										text : 'Pesquisa',
										itemId : 'BTNpesquisaproduto',
										iconCls : 'pesquisa'
									}]
						}];

				this.callParent(arguments);
			}

		});
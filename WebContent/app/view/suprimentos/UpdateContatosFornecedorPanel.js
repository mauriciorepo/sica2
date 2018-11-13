Ext.define('App.view.suprimentos.UpdateContatosFornecedorPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.UpdateContatosFornecedortopanel',
			itemId:'UpdateContatosFornecedortopanel',
			//title:'Movimento',
			requires : [
					'App.view.suprimentos.ContatosFornecedorList','App.store.ComboEmpresas' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'contatosfornecedorlist'
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
							id : 'buttonupdatecontatosfornecedor',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Contatos Fornc.',
										itemId : 'cadastrocontatosfornecedor',
										iconCls : 'addcontatofornecedor'
									}]
						}];

				this.callParent(arguments);
			}

		});
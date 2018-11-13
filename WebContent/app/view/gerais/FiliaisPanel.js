Ext.define('App.view.gerais.FiliaisPanel', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.Filiaistopanel',
			itemId:'Filiaistopanel',
			//title:'Movimento',
			requires : [
					'App.view.gerais.FiliaisList','App.store.ComboEmpresas' // #1
			],
			layout : {
				type : 'fit' // #2
			},

			initComponent : function() {
				this.items = [{
					xtype : 'filiaislist'
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
							id : 'buttonfilial',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Add Filiais',
										itemId : 'cadastrofiliais',
										iconCls : 'cadastrofiliais'
									},{
									xtype : 'combobox', //9
									fieldLabel : 'Empresas',
									name:'firma',
									itemId:'firma',
									//id:'firma',
									flex : 2,
									displayField : 'razao',
									valueField:'idfirma',
									blankText :'Este campo precisa ser prenchido ',
									//valueNotFoundText :'Valor não corresponde',
									forceSelection:true,
									autoload:true,
									autoSelect :true,
									store : Ext.create('App.store.ComboEmpresas'),
									queryMode : 'local',
								allowBlank : false ,
									typeAhead : true
								},{
										xtype : 'button',
										text : 'Editar Filial',
										itemId : 'editarfilial',
										iconCls : 'editarfilial'
									}]
						}];

				this.callParent(arguments);
			}

		});
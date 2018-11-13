var tipoEstoque = new Ext.data.SimpleStore({
			fields : ['id', 'name'],
			data : [['f', 'Pessoa Fisica'], ['j', 'Pessoa Juridica']],
			autoLoad : true
		});

Ext.define('App.view.suprimentos.CadastroProdutoGeral', {
			extend : 'Ext.form.FormPanel',
			alias : 'widget.cadastroprodutogeral',
			itemId : 'cadastroprodutogeral',
			// enableTabScroll:true,
			// autoScroll : true,
			// reziable : true,
			bodyPadding : '5 5 0',
			// maximizable : true,
			// maximized : true,
			// height: 260,
			width : 700,
			// pollForChanges : true,

			requires : ['Ext.form.Panel', 'Ext.form.field.Text',
					'App.util.Util', 'App.util.CnpjField',
					'Ext.ux.InputTextMask', 'App.util.CpfField',
					'App.store.Empresas', 'App.store.ComboGrupo','App.store.ComboClasse' // #1
			],
			fieldDefaults : {
				labelAlign : 'top',
				msgTarget : 'side'
			},
			defaults : {
				border : false,

				labelAlign : 'top',
				xtype : 'panel',
				flex : 1,
				layout : 'anchor'
			},

			layout : 'hbox',
			items : [{
						items : [ 
{
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold;',
					layout : 'hbox',
					//defaultType : 'textfield',
                    
					//fieldDefaults : {labelAlign : 'top'},

					items : [{
									xtype : 'combobox', // 9
									fieldLabel : 'Grupo ',
									//labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,
                                    flex:1,
									anchor : '-10',
									valueField : 'cod',
									store :'StoreComboGrupos',//Ext.create('App.store.ComboGrupo'),// 'StoreComboGrupos',
									queryMode : 'local',
									//typeAhead : true,
									itemId : 'combogrupo',
									name : 'combogrupo',
									listConfig : {
						getInnerTpl : function() {
							return '<tpl for="."><div class="combo-result-item" > '+
							'<div class="combo-name" data-qtip="{name}. {descricao}">Codigo: {cod}</div> '+
							'<div class="combo-full-address" data-qtip="{name}. {descricao}"><a>{descricao}</a></div>'+
							'</div></tpl>';
						}
					}//'<div class="combo-name" data-qtip="{name}. {descricao}"><h4>Codigo: {cod}</h4> <h5>Descrição: {descricao} </h5></div>';
								}, {
								xtype:'button',
								width : 20,
								buttonAlign: 'top',
								name : 'BTNgrupo',
								itemId:'BTNgrupo',
								text : '+',
								//maxLength:1,
								margins : '20 5 0 5'
							}]
				},
								
								 {
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold;',
					layout : 'hbox',
					//defaultType : 'textfield',
                    
					//fieldDefaults : {labelAlign : 'top'},

					items : [{
									xtype : 'combobox', // 9
									fieldLabel : 'Classe ',
									//labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,
                                    flex:1,
									anchor : '-10',
									valueField : 'idprodutoclasse',
									store : 'StoreComboClasses',
									queryMode : 'local',
									typeAhead : true,
									itemId : 'comboclasse',
									name : 'comboclasse',		
									listConfig : {
						getInnerTpl : function() {
							return '<tpl for="."><div class="combo-result-item" > '+
							'<div class="combo-name" data-qtip="{name}. {descricao}">Codigo: {idprodutoclasse}</div> '+
							'<div class="combo-full-address" data-qtip="{name}. {descricao}"><a>{descricao}</a></div>'+
							'</div></tpl>';
						}
						}
								}, {
								xtype:'button',
								width : 20,
								buttonAlign: 'top',
								name : 'BTNclasse',
								itemId:'BTNclasse',
								text : '+',
								//maxLength:1,
								margins : '20 5 0 5'
							}]
				           },
							  {
									xtype : 'textfield',
									fieldLabel : 'Descrição',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									focusOnToFront : true,
									name : 'txtdescricao',
									anchor : '-10',
									itemId : 'txtdescricao'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,

									fieldLabel : 'Marca, Fabricante',
									name : 'fabricante',
									anchor : '-10',
									itemId : 'fabricante'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Tam, Larg, Alt, Comp',
									anchor : '-10',
									//afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,

									labelAlign : 'top',
									itemId : 'categoria',
									name : 'categoria'

								}, {
									xtype : 'datefield',
									fieldLabel : 'Validade',
									labelAlign : 'top',
									anchor : '90%',
									name : 'validade',
									itemId : 'validade'

								}, {
									xtype : 'textarea',
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,

									fieldLabel : 'Observações',
									anchor : '-10',
									name : 'observacao',
									itemId : 'observacao'

								}

						]
					}, {
						items : [{
            xtype:'checkboxfield',     
			boxLabel  : 'Produto inativo',
                    name      : 'inclui',
                    inputValue: 's',
                    id        : 'checkboxproduto'
                },{
									xtype : 'radiogroup',
									fieldLabel : 'Controla',
									itemId : 'tipoproduto',
									name:'tipoproduto',
									afterLabelTextTpl : App.util.Util.required,
									columns : 2,
									items : [{
												boxLabel : 'Num Serie',
												name : 'tipoPessoa',
												inputValue : 's'

											}, {
												boxLabel : 'Lote',
												name : 'Lote',
												inputValue : 'l'
												//checked : true
											}]

								},{
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold;',
					layout : 'hbox',
					//defaultType : 'textfield',
                    
					//fieldDefaults : {labelAlign : 'top'},

					items : [{
									xtype : 'combobox', // 9
									fieldLabel : 'Unidade de Compra ',
									//labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,
                                    flex:1,
									anchor : '-10',
									valueField : 'cod',
									store : Ext.create('App.store.ComboClasse'),
									queryMode : 'local',
									typeAhead : true,
									itemId : 'unidade',
									name : 'unidade'
								}, {
								xtype:'button',
								width : 20,
								buttonAlign: 'top',
								name : 'BTNunidade',
								itemId:'BTNunidade',
								text : '+',
								//maxLength:1,
								margins : '20 5 0 5'
							}]
				}, {
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold;',
					layout : 'hbox',
					//defaultType : 'textfield',
                    
					//fieldDefaults : {labelAlign : 'top'},

					items : [{
									xtype : 'combobox', // 9
									fieldLabel : 'Unidade de Venda ',
									//labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,
                                    flex:1,
									anchor : '-10',
									valueField : 'cod',
									store : Ext.create('App.store.ComboClasse'),
									queryMode : 'local',
									typeAhead : true,
									itemId : 'venda',
									name : 'venda'
								}, {
								xtype:'button',
								width : 20,
								buttonAlign: 'top',
								name : 'BTNunidadeVenda',
								itemId:'BTNunidadeVenda',
								text : '+',
								//maxLength:1,
								margins : '20 5 0 5'
							}]
				}, {
									xtype : 'combobox', // 9
									fieldLabel : 'Finalidades',
									labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,

									anchor : '-10',
									valueField : 'cod',
									store : Ext.create('App.store.ComboClasse'),
									queryMode : 'local',
									typeAhead : true,
									itemId : 'grupo',
									name : 'grupo'
								}, {
									xtype : 'numberfield',
									labelAlign : 'top',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									afterLabelTextTpl : App.util.Util.required,
									fieldLabel : 'Und de Venda = Und de Compra',
									anchor : '100%',
									name : 'unidade'

								},{
			xtype : 'fieldset',
			
			title : 'Imagem, Foto',
            itemId:'container',
			id:'container',
			labelStyle : 'font-weight:bold;',
			margin : '0 0 5 0',
			layout : 'anchor',
			anchor : '90%',
			
		
			fieldDefaults : {
				//labelAlign : 'top'
				//defaultMargins: {top: 1, right: 5, bottom: 1, left: 1}
			},

			items : [//layout:'vbox',
				{
                            xtype: 'image',
                            heigh:150,
                            width: 150,
                            src: ''
             },{
                            xtype: 'filefield',
                            //fieldLabel: 'Picture',
                            name: 'picture',
                            buttonText:'',
                             buttonConfig: {
                                iconCls: 'xml'
                               },
                            allowBlank: true
                        }]
		}

						]
					}]

		});

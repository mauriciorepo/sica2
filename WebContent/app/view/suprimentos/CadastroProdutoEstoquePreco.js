var tipoEstoque = new Ext.data.SimpleStore({
			fields : ['id', 'name'],
			data : [['f', 'Pessoa Fisica'], ['j', 'Pessoa Juridica']],
			autoLoad : true
		});

Ext.define('App.view.suprimentos.CadastroProdutoEstoquePreco', {
			extend : 'Ext.form.FormPanel',
			alias : 'widget.cadastroprodutoestoquepreco',
			itemId : 'cadastroprodutoestoquepreco',
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
						items : [{
													
                         
									xtype : 'textfield',
									fieldLabel : 'Estoque Minimo',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									focusOnToFront : true,
									name : 'estoquemin',
									anchor : '-10',
									itemId : 'estoquemin'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,

									fieldLabel : 'Estoque Maximo',
									name : 'estoquemax',
									anchor : '-10',
									itemId : 'estoquemax'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Curva ABC',
									anchor : '-10',
									blankText : 'Este campo precisa ser prenchido ',
									labelAlign : 'top',
									itemId : 'categoria',
									name : 'categoria'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Peso Bruto',

									labelAlign : 'top',
									anchor : '-10',
									name : 'pesobruto',
									itemId : 'pesobruto'

								},{
									xtype : 'numberfield',
									fieldLabel : 'Peso Liquido',
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									//anchor : '100%',
									//disableKeyFilter:true,
									//minValue:0,
									//maxValue:99999999,
									hideTrigger : true,
									keyNavEnabled : false,
									mouseWheelEnabled : false,
									name : 'pesoliquido',
									itemId : 'pesoliquido'

								}
						]
					}, {
						items : [{
									xtype : 'numberfield',
									fieldLabel : 'Preço Fornec.(Compra)',
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									anchor : '100%',
									//disableKeyFilter:true,
									//minValue:0,
									//maxValue:99999999,
									hideTrigger : true,
									keyNavEnabled : false,
									mouseWheelEnabled : false,
									name : 'precofornecedor',
									itemId : 'precofornecedor'

								}
                                ,{
									xtype : 'numberfield',
									fieldLabel : 'Margem Lucro %',
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									anchor : '100%',
									//disableKeyFilter:true,
									//minValue:0,
									//maxValue:99999999,
									hideTrigger : true,
									keyNavEnabled : false,
									mouseWheelEnabled : false,
									name : 'margem',
									itemId : 'margem'

								}
                                 ,{
									xtype : 'numberfield',
									fieldLabel : 'Preço Base',
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									anchor : '100%',
									//disableKeyFilter:true,
									//minValue:0,
									//maxValue:99999999,
									hideTrigger : true,
									keyNavEnabled : false,
									mouseWheelEnabled : false,
									name : 'precobase',
									itemId : 'precobase'

								}
, {
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
									store : Ext.create('App.store.ComboGrupo'),
									queryMode : 'local',
									typeAhead : true,
									itemId : 'grupo',
									name : 'grupo'
								}

						]
					}]

		});

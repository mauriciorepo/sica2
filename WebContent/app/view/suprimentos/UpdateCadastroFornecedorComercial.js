Ext.Loader.setConfig({
			enabled : true
		});
var naturezaStore = new Ext.data.SimpleStore({
			fields : ['id', 'name'],
			data : [['f', 'Pessoa Fisica'], ['j', 'Pessoa Juridica']],
			autoLoad : true
		});
Ext.define('App.view.suprimentos.UpdateCadastroFornecedorComercial', {
			extend : 'Ext.form.FormPanel',
			alias : 'widget.updatefornecedorcomercial',
			itemId : 'updatefornecedorcomercial',
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
					'App.store.Empresas', 'App.store.ComboNaturezaStore' // #1
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
									xtype : 'radiogroup',
									fieldLabel : 'Natureza',
									itemId : 'tipo',
									name:'tipo',
									afterLabelTextTpl : App.util.Util.required,
									columns : 2,
									items : [{
												boxLabel : 'Física',
												name : 'tipoPessoa',
												inputValue : 'F'

											}, {
												boxLabel : 'Jurídica',
												name : 'tipoPessoa',
												inputValue : 'J',
												checked : true
											}]

								}, {
									xtype : 'combobox', // 9
									fieldLabel : 'Regime Tributário ',
									labelAlign : 'top',
									displayField : 'name',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,

									anchor : '-10',
									valueField : 'id',
									store : Ext.create('Ext.data.Store', {
												fields : [{
															type : 'string',
															name : 'name'
														}, {
															type : 'string',
															name : 'id'
														}],
												data : [{
															"name" : "Pessoa Fisica",
															"id" : "F"
														}, {
															"name" : "Super Simples",
															"id" : "S"
														}, {
															"name" : "Lucro Presumido",
															"id" : "P"
														}, {
															"name" : "Lucro Real",
															"id" : "R"
														}]
											}),
									queryMode : 'local',
									typeAhead : true,
									itemId : 'tipoatividade',
									name : 'tipoatividade'
								}, {
									xtype : 'textfield',

									fieldLabel : 'Razao Social(Nome)',
									labelAlign : 'top',

									// disabled:true,
									anchor : '-10',
									focusOnToFront : 'true',

									itemId : 'razaosocial',
									name : 'razaosocial'

								},{
									xtype : 'hiddenfield',
                                    labelAlign : 'top',
                                    name:'idfornecedores',
                                    itemId:'idfornecedores',
									anchor : '-10',
									focusOnToFront : 'true'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Fantasia(Nome)',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									focusOnToFront : true,
									name : 'fantasia',
									anchor : '-10',
									itemId : 'fantasia'

								}, {
									xtype : 'cnpjfield',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									fieldLabel : 'CNPJ',
									name : 'cnpj',
									anchor : '-10',
									itemId : 'cnpj'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Insc Estadual',
									anchor : '-10',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									labelAlign : 'top',
									itemId : 'ie',
									name : 'ie'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Insc Municipal',

									labelAlign : 'top',
									anchor : '-10',
									name : 'im',
									itemId : 'im'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									fieldLabel : 'Rg',
									anchor : '-10',
									name : 'rg',
									itemId : 'rg'

								}

						]
					}, {
						items : [{
									xtype : 'cpffield',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									labelAlign : 'top',
									fieldLabel : 'Cpf',
									anchor : '-10',
									name : 'cpf'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									fieldLabel : 'telefone',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									anchor : '100%',
									name : 'telefone'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									afterLabelTextTpl : App.util.Util.required,
									fieldLabel : 'Cidade',
									anchor : '100%',
									name : 'cidade'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									afterLabelTextTpl : App.util.Util.required,
									fieldLabel : 'Bairro',
									anchor : '100%',
									name : 'bairro',
									itemId : 'bairro'

								}, {

									xtype : 'textfield',
									fieldLabel : 'Logradouro',
									anchor : '100%',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									// disabled:true,
									itemId : 'logradouro',
									name : 'logradouro'

								}, {
									xtype : 'numberfield',
									fieldLabel : 'Numero',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									anchor : '100%',
									//disableKeyFilter:true,
									//minValue:0,
									//maxValue:99999999,
									hideTrigger : true,
									keyNavEnabled : false,
									mouseWheelEnabled : false,
									name : 'numero',
									itemId : 'numero'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									fieldLabel : 'Complemento',
									anchor : '100%',
									name : 'complemento'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									fieldLabel : 'Cep',
									afterLabelTextTpl : App.util.Util.required,
									anchor : '100%',
									name : 'cep'

								}

						]
					}]

		});

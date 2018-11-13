Ext.Loader.setConfig({
			enabled : true
		});
Ext.define('App.view.gerais.Filial', {
			extend : 'Ext.window.Window',
			alias : 'widget.filial',
			itemId : 'filial',
			//enableTabScroll:true,
			//autoScroll : true,
			//reziable : true,
			bodyPadding: '5 5 0',
			//maximizable : true,
			//maximized : true,
			//height: 260,
			width : 700,
			//pollForChanges : true,

			requires : ['Ext.form.Panel', 'Ext.form.field.Text','App.util.CnpjField','Ext.ux.InputTextMask', 'App.util.CpfField',
					'App.store.Empresas' // #1
			],
			fieldDefaults : {
				labelAlign : 'top',
				msgTarget : 'side'
			},
			defaults : {
				border : false,
				xtype : 'form',
				flex : 1,
				layout : 'anchor'
			},

			layout : 'hbox',
			items : [{
						items : [{
									xtype : 'combobox', //9
									fieldLabel : 'Empresas',
									name : 'empresas',
									itemId : 'empresas',
									labelAlign : 'top',
									flex : 1,
									ancor : '-10',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,

									displayField : 'razao',
									valueField : 'idfirma',
									
									//valueNotFoundText :'Valor não corresponde',
									forceSelection : true,
									autoSelect : true,
									store : Ext.create('App.store.Empresas'),
									queryMode : 'local',
									allowBlank : false,
									typeAhead : true
								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									fieldLabel : 'Razao',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									//disabled:true,
									anchor : '-10',
									itemId : 'razao',
									name : 'razao'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									fieldLabel : 'Fantasia',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									name : 'fantasia',
									anchor : '-10',
									itemId : 'fantasia'

								}, {
									xtype : 'cnpjfield',
									fieldLabel : 'CNPJ',
									name : 'cnpj',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									anchor : '-10',
									itemId : 'cnpj'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Insc Estadual',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									anchor : '-10',
									labelAlign : 'top',
									itemId : 'inscricaoestadual',
									name : 'inscricaoestadual'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Insc Municipal',
									anchor : '-10',
									labelAlign : 'top',
									name : 'inscricaomunicipal',
									itemId : 'inscricaomunicipal'

								}

						]
					}, {
						items : [
							       {
									xtype : 'textfield',
									fieldLabel : 'Cidade',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									anchor : '100%',
									labelAlign : 'top',
									name : 'cidade'
									
								},
								{
									xtype : 'textfield',
									fieldLabel : 'Bairro',
									anchor : '100%',
									labelAlign : 'top',
									name : 'bairro',
									itemId : 'bairro'

								},{

									xtype : 'textfield',
									fieldLabel : 'Logradouro',
									anchor : '100%',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									labelAlign : 'top',
									//disabled:true,
									itemId : 'logradouro',
									name : 'logradouro'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Numero',
									anchor : '100%',
									name : 'numero',
									labelAlign : 'top',
									itemId : 'numero'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Complemento',
									anchor : '100%',
									labelAlign : 'top',
									name : 'complemento'
									
								},{
									xtype : 'textfield',
									fieldLabel : 'Cep',
									anchor : '100%',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									labelAlign : 'top',
									name : 'cep'
									
								}

						]
					}],
			buttons : ['->', {
						text : 'Save',
						iconCls:'save',
						formBind:true
					}, {
						text : 'Cancel',
						iconCls:'cancel'
					}]

		});

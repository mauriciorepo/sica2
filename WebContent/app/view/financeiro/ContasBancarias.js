Ext.Loader.setConfig({
			enabled : true
		});
Ext.define('App.view.financeiro.ContasBancarias', {
	extend : 'Ext.window.Window',
	alias : 'widget.contasbancarias',
	itemId : 'contasbancarias',
	width : 700,
	//pollForChanges : true,

	requires : ['Ext.form.Panel', 'App.store.TipoConta', 'App.util.Util',
			'Ext.form.field.Text', 'App.util.CnpjField',
			'Ext.ux.InputTextMask', 'App.store.Empresas', 'App.store.Banco'],
	fieldDefaults : {
		labelAlign : 'top',
		//msgTarget: 'qtip'
		msgTarget : 'side'
	},
	defaults : {
		border : false,
		xtype : 'form',
		flex : 1,
		bodyPadding : 10,

		layout : 'anchor'
	},

	layout : 'hbox',
	items : [{
		xtype : 'form',
		itemId : 'contasbancariasForm',
		autoScroll : true,

		items : [{
					xtype : 'textfield',
					labelAlign : 'top',
					fieldLabel : 'Nome',

					blankText : 'Este campo precisa ser prenchido ',
					allowBlank : false,
					//afterLabelTextTpl : App.util.Util.required,
					//disabled:true,
					anchor : '-10',
					itemId : 'nome',
					name : 'nome'

				}, {
					xtype : 'combobox', //9
					fieldLabel : 'Tipo Conta',
					name : 'tipoconta',
					itemId : 'tipoconta',
					labelAlign : 'top',
					//flex : 2,
					//ancor : '-10',
					//afterLabelTextTpl : App.util.Util.required,
					blankText : 'Este campo precisa ser prenchido ',
					//allowBlank : false,

					displayField : 'nome',
					valueField : 'tipo',
					//autoLoad:true,
					//valueNotFoundText :'Valor não corresponde',
					forceSelection : true,
					autoSelect : true,
					store : Ext.create('Ext.data.Store', {
								fields : ['tipo', 'nome'],
								data : [{
											"nome" : "Conta Corrente",
											"tipo" : "CC"
										}, {
											"nome" : "Corrente/Poupança",
											"tipo" : "CP"
										}, {
											"nome" : "Poupança",
											"tipo" : "P"
										}, {
											"nome" : "Judicial",
											"tipo" : "J"
										}]
							}),
					width : 290,
					queryMode : 'local',
					allowBlank : false,
					typeAhead : true
				}, {
					xtype : 'combobox', //9
					fieldLabel : 'Banco',
					name : 'banco',
					itemId : 'banco',
					labelAlign : 'top',
					//flex : 2,
					//ancor : '-10',
					//afterLabelTextTpl : App.util.Util.required,
					blankText : 'Este campo precisa ser prenchido ',
					//allowBlank : false,

					displayField : 'nome',
					valueField : 'codbacen',
					width : 290,
					//valueNotFoundText :'Valor não corresponde',
					forceSelection : true,
					autoSelect : true,
					store : Ext.create('App.store.Banco'),
					queryMode : 'local',
					allowBlank : false,
					//typeAhead : true,
					listConfig : {
						getInnerTpl : function() {
							return '<div data-qtip="{name}. {nome}">{codbacen} - {nome} </div>';
						}
					}
				}, {
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold;',
					layout : 'hbox',
					defaultType : 'textfield',

					fieldDefaults : {
						labelAlign : 'top'
					},

					items : [{
								flex : 1,
								name : 'agencia',
								itemId : 'agencia',
								blankText : 'Este campo precisa ser prenchido ',
								//afterLabelTextTpl : App.util.Util.required,
								fieldLabel : 'Agencia',
								allowBlank : false
							}, {
								width : 30,
								minValue : 0, //prevents negative numbers
								maxLengthText : 'O valor maximo do para este campo e {1}',
								maxLength : 1,
								name : 'dvagencia',
								itemId:'dvagencia',
								fieldLabel : 'DV',
								//maxLength:1,
								margins : '0 0 0 5'
							}]
				}, {
					xtype : 'fieldcontainer',
					fieldLabel : '',
					labelStyle : 'font-weight:bold',
					layout : 'hbox',
					defaultType : 'textfield',

					fieldDefaults : {
						labelAlign : 'top'
					},

					items : [{
								flex : 1,
								name : 'conta',
								itemId : 'conta',
								blankText : 'Este campo precisa ser prenchido ',
								ancor : '-20',
								//minValue: 0, //prevents negative numbers
								///value:0,
								//decimalPrecision :2,
								itemId:'conta',
								hideTrigger : true,
								keyNavEnabled : false,
								mouseWheelEnabled : false,
								minLength : 3,
								minLengthText : 'O valor minimo para este campo e {3}',
								//afterLabelTextTpl: required,
								fieldLabel : 'Conta',
								allowBlank : false
							}, {
								width : 30,
								anchor : '-10',
								name : 'dvconta',
								itemId:'dvconta',
								minValue : 0, //prevents negative numbers
								maxLengthText : 'O valor maximo do para este campo e {1}',
								maxLength : 1,
								length:1,
								fieldLabel : 'DV',
								margins : '0 0 0 5'
							}]
				}, {
					xtype : 'textfield',
					labelAlign : 'top',
					fieldLabel : 'Telefone',

					minLength:8,
					//plugins: [new Ext.ux.InputTextMask('(99)9999-9999')],
					//minLengthText : 'Minimo de 10 caracteres (XX)xxxx-xxxx',
					maxLength : 14,
					//maxLengthText : 'Maximo de 11 caracteres (XX)xxxx-xxxxX',
					allowBlank : false ,
					
					//disabled:true,
					anchor : '-10',
					itemId : 'telefone',
					name : 'telefone'

				}

		]
	}, {
		items : [
			{
			xtype : 'fieldset',
			
			title : 'Saldo de Abertura',
            itemId:'container',
			id:'container',
			labelStyle : 'font-weight:bold;',
			margin : '0 0 10 0',
			layout : 'anchor',
			anchor : '80%',
			defaultType : 'textfield',

			fieldDefaults : {
				labelAlign : 'top'
				//defaultMargins: {top: 1, right: 5, bottom: 1, left: 1}
			},

			items : [{
				xtype : 'datefield',
				//flex : 1,
				name: 'datasaldoabertura',
				itemId : 'datasaldoabertura',
				format : 'd/m/Y',
				dateFormat : 'd/m/Y',
				formatText : 'Formato Invalido',
				altFormats : 'd/m/Y',
				invalidText : '{0} não é uma data válida - precisa estar no formato {xx/xx/xxxx}',
				//plugins: [new Ext.ux.InputTextMask('99/99/9999')],
				maskRe : /[0-9\/]/,
				regex : /(\d{2}\/)\d{2}(\/\d{4})/,
				regexText : 'Precisar estar neste formato EX: 10/10/2010',
				submitFormat : 'Ymd',
				//afterLabelTextTpl: required,
				fieldLabel : 'Data',
				allowBlank : false
			}, {
				//flex : 1,
				xtype : 'numberfield',
				name : 'valor',
				minValue : 0, //prevents negative numbers
				value : 0,
				decimalPrecision : 2,
				hideTrigger : true,
				keyNavEnabled : false,
				mouseWheelEnabled : false,
                itemId:'valor',
				fieldLabel : 'Valor',
				margins : '0 0 0 5'
			}]
		},/*{
			xtype : 'textfield',
			fieldLabel : 'Moeda',
			//afterLabelTextTpl : App.util.Util.required,
			blankText : 'Este campo precisa ser prenchido ',
			allowBlank : false,
            itemId:'moeda',
			anchor : '80%',
			labelAlign : 'top',
			name : 'moeda'

		}, */{
			xtype : 'datefield',
			fieldLabel : 'Vencimento do Limite',
			name : 'vencimentolimite',
			itemId : 'vencimentolimite',
			anchor : '80%',
			format : 'd/m/Y',
	    	dateFormat : 'd/m/Y',
			formatText : 'Formato Invalido',
			altFormats : 'd/m/Y',
			invalidText : '{0} não é uma data válida - precisa estar no formato {xx/xx/xxxx}',
			maskRe : /[0-9\/]/,
			regex : /(\d{2}\/)\d{2}(\/\d{4})/,
			regexText : 'Precisar estar neste formato EX: 10/10/2010',
			labelAlign : 'top',
			submitFormat : 'Ymd'
			
			

		}, {

			xtype : 'numberfield',
			fieldLabel : 'Limite de crédito',
			anchor : '80%',
			//afterLabelTextTpl : App.util.Util.required,
			blankText : 'Este campo precisa ser prenchido ',
			allowBlank : false,
			minValue : 0, //prevents negative numbers
			value : 0,
			decimalPrecision : 2,
			hideTrigger : true,
			keyNavEnabled : false,
			mouseWheelEnabled : false,
			labelAlign : 'top',
			//disabled:true,
			itemId : 'limite',
			name : 'limite'

		},{
            xtype:'checkboxfield',     
			boxLabel  : 'Incluir nas Previsões',
                    name      : 'inclui',
                    inputValue: 's',
                    id        : 'checkbox1'
                }]
		
	}],

	dockedItems : [{
				xtype : 'toolbar',
				dock : 'bottom',
				items : ['->', {
							text : 'Lançar',
							formBind : true,
							name : 'buttoncadastrocontasbancarias',
							itemId : 'buttoncadastrocontasbancarias',
							iconCls : 'save'
						}, {
							text : 'Cancel',
							itemId : 'buttoncancelcadastrocontasbancarias',
							name : 'buttoncancelcadastrocontasbancarias',
							iconCls : 'cancel'
						}]
			}]

});

Ext.define('App.view.financeiro.ContasAPagar', {
			extend : 'Ext.window.Window',
			alias : 'widget.contasapagar',
			itemId : 'contasapagar',
			// enableTabScroll:true,
			// autoScroll : true,
			// reziable : true,
			bodyPadding : '5 5 0',
			// maximizable : true,
			// maximized : true,
			// height: 260,
			width : 700,
			// pollForChanges : true,

			requires : ['Ext.form.*','Ext.form.Panel', 'Ext.form.field.Text',
					'App.util.Util','Ext.grid.*', 'App.util.CnpjField',
					'Ext.ux.InputTextMask', 'App.util.CpfField','App.view.financeiro.ParcelasAPagarList'
			],
			
			fieldDefaults : {
				labelAlign : 'top',
				msgTarget : 'side'
			},
			//xtype: 'form-grid',
			defaults : {
				border : false,

				labelAlign : 'top',
				xtype: 'form',
				flex : 1,
				layout : 'anchor'
			},

			layout : 'vbox',
			items : [{//layout : 'hbox',
				               flex:1,
						items : [{
									xtype : 'textfield',

									fieldLabel : 'Razao Social(Nome)',
									labelAlign : 'top',

									// disabled:true,
									anchor : '-10',
									focusOnToFront : 'true',

									itemId : 'razaosocial',
									name : 'razaosocial'

								}, {
									xtype : 'textfield',
									fieldLabel : 'Histórico',
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									focusOnToFront : true,
									name : 'fantasia',
									anchor : '-10',
									itemId : 'fantasia'

								}, {
									xtype : 'datefield',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									fieldLabel : 'Data Emissão',
									name : 'data_despesa',
									anchor : '-10',
									itemId : 'data_despesa'

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

								}
						]
					}, {
						//layout : 'hbox',
						flex:1,
						items : [{
									xtype : 'cpffield',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,

									labelAlign : 'top',
									fieldLabel : 'Cpf',
									anchor : '10',
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

								}
						]
					},{
					    
					    //items:[{xtype:'ParcelasAPagarList'}]
					}
						
					  
					]

		});
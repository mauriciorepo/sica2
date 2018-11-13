Ext.Loader.setConfig({
			enabled : true
		});

Ext.define('App.view.suprimentos.CadastroFornecedorRetencoes', {
			extend : 'Ext.form.FormPanel',
			alias : 'widget.fornecedorretencoes',
			itemId : 'fornecedorretencoes',
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
						items : [ {
					xtype : 'textfield',
					labelAlign : 'top',
					fieldLabel : 'Home Page',
					anchor : '-5',
					name : 'homepage'

				},{
									xtype : 'numberfield',
									minValue: 0, //prevents negative numbers
                                    value:0,
                                    decimalPrecision :2,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
									
									fieldLabel : 'Pis',
									labelAlign : 'top',
									// disabled:true,
									anchor : '-10',
									itemId : 'pis',
									name : 'pis'

								}, {
									xtype : 'numberfield',
									minValue: 0, //prevents negative numbers
                                    value:0,
                                    decimalPrecision :2,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
									fieldLabel : 'Confins',
									labelAlign : 'top',
									name : 'confins',
									anchor : '-10',
									itemId : 'confins'

								}
						]
					}, {
						items : [  {
									xtype : 'numberfield',
									minValue: 0, //prevents negative numbers
                                    value:0,
                                    decimalPrecision :2,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
									labelAlign : 'top',
									fieldLabel : 'CSLL',
									name : 'csll',
									anchor : '-10',
									itemId : 'csll'

								}, {
									xtype : 'numberfield',
									minValue: 0, //prevents negative numbers
                                    value:0,
                                    decimalPrecision :2,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
									fieldLabel : 'IRRF',
									anchor : '-10',
									labelAlign : 'top',
									itemId : 'irrf',
									name : 'irrf'

								}, {
									xtype : 'numberfield',
									minValue: 0, //prevents negative numbers
                                    value:0,
                                    decimalPrecision :2,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
									fieldLabel : 'INSS',
									labelAlign : 'top',
									anchor : '-10',
									name : 'inss',
									itemId : 'inss'

								}
						]
					}]

		});

Ext.define('App.view.suprimentos.CadastroGrupo', {

			extend : 'Ext.window.Window',
			alias : 'widget.grupo',
            itemId:'grupo',
			autoShow : true,
			heigth : 170,
			width : 360,
			layout : {
				type : 'fit'
			},
			iconCls : 'produto',
			title : 'Grupo | Novo',
			//closeAction : 'hide',
			//closable : false,

			items : [{
						xtype : 'form', // #12
						itemId:'formgrupo',
						frame : false, // #13
						bodyPadding : 15, // #14
						defaults : { // #15
							xtype : 'textfield', // #16
							anchor : '100%', // #17
							labelWidth : 60
							// #18
						},
						items : [{
									name : 'descricao',
									fieldLabel : "Descrição",
									allowBlank : false,
									itemId:'descricao',
									afterLabelTextTpl : App.util.Util.required,
									enableKeyEvents: true,
									minLength : 3,
									msgTarget : 'under'
								}, {
									xtype:'textfield',
									//vtype : 'num',
									name : 'cod',
                                    itemId:'cod',
									fieldLabel : "Codigo",
									regex:/^(([0-9][0-9])|(99))$/,
									regexText: 'Must be in the format xx EX:01',
									afterLabelTextTpl : App.util.Util.required,
									hideTrigger : true,
									allowBlank : false,
									minLength : 2,
									maxLength:2,
									msgTarget : 'side'

								}],
						dockedItems : [{
									xtype : 'toolbar',
									dock : 'bottom',
									items : [{
												xtype : 'tbfill' // #24
											},{
												xtype : 'button', // #26
												name:'lancargrupo',
												itemId : 'lancargrupo',
												formBind : true, // #27
												iconCls : 'save',
												text : "Lançar"
											}, {
												xtype : 'button', // #25
												itemId : 'cancelgrupo',
												iconCls : 'cancel',
												text : 'Cancel'
											} ]
								}]

					}]

		});
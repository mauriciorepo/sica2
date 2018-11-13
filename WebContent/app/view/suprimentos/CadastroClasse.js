Ext.define('App.view.suprimentos.CadastroClasse', {

			extend : 'Ext.window.Window',
			alias : 'widget.classe',
           itemId:'classe',
			autoShow : true,
			heigth : 170,
			width : 360,
			layout : {
				type : 'fit'
			},
			iconCls : 'produto',
			title : 'Classe | Novo',
			//closeAction : 'hide',
			//closable : false,
              requires : ['App.store.ComboGrupo'],
			items : [{
						xtype : 'form', // #12
						frame : false, // #13
						itemId:'formclasse',
						bodyPadding : 15, // #14
						defaults : { // #15
							xtype : 'textfield', // #16
							anchor : '100%', // #17
							labelWidth : 60
							// #18
						},
						items : [{
									xtype : 'combobox', // 9
									fieldLabel : 'Grupo',
									
									//labelAlign : 'top',
									displayField : 'descricao',
									afterLabelTextTpl : App.util.Util.required,
									valueNotFoundText : 'Valor não corresponde',
									forceSelection : true,
									allowBlank : false,

									anchor : '-10',
									valueField : 'cod',
									store : 'StoreComboGrupos',
									queryMode : 'local',
									typeAhead : true,
									itemId : 'grupo',
									name : 'grupo',
									listConfig : {
					             	getInnerTpl : function() {
							         return '<tpl for="."><div class="combo-result-item" > '+
							'<div class="combo-name" data-qtip="{name}. {descricao}">Codigo: {cod}</div> '+
							'<div class="combo-full-address" data-qtip="{name}. {descricao}"><a>{descricao}</a></div>'+
							'</div></tpl>';}
									}
								},{
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
									name : 'cod',
                                    itemId:'cod',
									fieldLabel : "Codigo",
									regex:/^(([0-9][0-9])|(99))$/,
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
												name:'lancarclasse',
												itemId : 'lancarclasse',
												formBind : true, // #27
												iconCls : 'save',
												text : "Lançar"
											}, {
												xtype : 'button', // #25
												itemId : 'cancelclasse',
												iconCls : 'cancel',
												text : 'Cancel'
											} ]
								}]

					}]

		});
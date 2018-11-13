Ext.define('App.view.Login', {

			extend : 'Ext.window.Window',
			alias : 'widget.login',
           itemId:'login',
			autoShow : true,
			heigth : 170,
			width : 360,
			layout : {
				type : 'fit'
			},
			iconCls : 'key',
			title : 'Login',
			closeAction : 'hide',
			closable : false,

			items : [{
						xtype : 'form', // #12
						frame : false, // #13
						bodyPadding : 15, // #14
						defaults : { // #15
							xtype : 'textfield', // #16
							anchor : '100%', // #17
							labelWidth : 60
							// #18
						},
						items : [{
									name : 'user',
									fieldLabel : "User",
									allowBlank : false,
									itemId:'user',
									enableKeyEvents: true,
									vtype : 'alphanum',
									minLength : 3,
									maxLength : 25,
									msgTarget : 'under'
								}, {
									inputType : 'password', // #19
									name : 'Senha',
                                    itemId:'senha',
									fieldLabel : "Password",
									
									allowBlank : false,
									minLength : 3,
									maxLength : 25,
									msgTarget : 'side'

								}],
						dockedItems : [{
									xtype : 'toolbar',
									dock : 'bottom',
									items : [{
												xtype : 'tbfill' // #24
											},{
												xtype : 'button', // #26
												name:'logar',
												itemId : 'logar',
												formBind : true, // #27
												iconCls : 'logar',
												text : "Logar"
											}, {
												xtype : 'button', // #25
												itemId : 'cancel',
												iconCls : 'cancel',
												text : 'Cancel'
											} ]
								}]

					}]

		});
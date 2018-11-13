

// ---------*******Funcao para cadastrar Conta bancaria*************-----------------

function cadastroContasBancarias(conta) {

	FacadeContaBancaria.cadastrarContaBancaria(conta, {
		callback : function(returnBean) {

			if ((returnBean == "true")) {
				
				var form = Ext.ComponentQuery.query('form#contasbancariasForm')[0];
				form.getForm().reset(), Ext.MessageBox.show({
							title : 'Efetuado!!!',
							msg : 'Cadastro efetuada com sucesso',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {
								//document.location.reload(true);

								campo =Ext.ComponentQuery.query('window#contasbancarias')[0]; 
				                 campo.close();
							}
						});
				
				
			}
			if (returnBean == null) {

				

			}
			if (returnBean == "existe") {

				Ext.MessageBox.show({
							title : 'Não Existe',
							msg : 'Conta já cadastrada nesta empresa !!!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {
								campo =Ext.ComponentQuery.query('window#contasbancarias')[0]; 
				                 campo.close();

							}
						});
				//dwr.util.setValue("senha2", "");
				//dwr.util.setValue("login2", "");

			}

		},
		errorHandler : function(errorstring, e) {
			//var login = Ext.ComponentQuery.query('clientepanel')[0];
			//login.getEl().unmask();

			Ext.MessageBox.show({
						title : 'Error',
						msg : errorstring,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {
							//Ext.getCmp('nome_crianca').focus();

						}
					});
		},
		timeout : 50000

	});
}



function pesquisaContas(conta) {

		FacadeContaBancaria.pesquisaConta(conta, {
			callback : function(returnBancos) {
				var val = 1;
				// alert(returnBancos[0].fornecedor);
				if (returnBancos == '') {
					val = 2;
					
				} else {
					var retu = returnBancos[0].nome;

					if (retu == "usenull") {
 
						val = 2;
						Ext.MessageBox.show({
							title : 'Alert',
							msg : 'Sua sessão Expirou!!! Você será redirecionado para pagina de login!!!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {
								document.location.reload(true);

							}
						});

					}
					if (retu == "notuse") {
						val = 2;
						Ext.MessageBox.show({
									title : 'Alert',
									msg : 'Usuario Invalido',
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.WARNING,
									fn : function() {
										document.location.reload(true);

									}
								});
					}
					if (retu == "usenivel") {
						val = 2;
						Ext.MessageBox.show({
							title : 'Alert',
							msg : 'Usuario não Autorizado a executar esta operacao!!!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {

								//Ext.getCmp('grididpesqsolicitacao').el.unmask();
							}
						});
					}
				}
				if (val == 1) {
					// dwr.util.setValue("titulo","");
                  var mystore = Ext.data.StoreManager.lookup('StoreBancos');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnBancos);
					//storeSolServico.loadData(returnBancos);
					//gridPesqSolicitacao.getView().refresh();

					//Ext.getCmp('grididpesqsolicitacao').el.unmask();
				} else {
				}
			},
			exceptionHandler : function(errorstring, exception) {

				Ext.MessageBox.show({
							title : '' + exception.javaClassName,
							msg : '' + errorstring,
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.ERROR,
							fn : function() {
								//Ext.getCmp('grididpesqsolicitacao').el.unmask();

							}
						});
			},
			timeout : 500000

		});

	}


function pesquisaBanco() {

		FacadeBanco.listarBancos( {
			callback : function(returnBancos) {
				var val = 1;
				// alert(returnBancos[0].fornecedor);
				if (returnBancos == '') {
					val = 2;
					
				} else {
					var retu = returnBancos[0].nome;

					if (retu == "usenull") {
 
						val = 2;
						Ext.MessageBox.show({
							title : 'Alert',
							msg : 'Sua sessão Expirou!!! Você será redirecionado para pagina de login!!!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {
								document.location.reload(true);

							}
						});

					}
					if (retu == "notuse") {
						val = 2;
						Ext.MessageBox.show({
									title : 'Alert',
									msg : 'Usuario Invalido',
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.WARNING,
									fn : function() {
										document.location.reload(true);

									}
								});
					}
					if (retu == "usenivel") {
						val = 2;
						Ext.MessageBox.show({
							title : 'Alert',
							msg : 'Usuario não Autorizado a executar esta operacao!!!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING,
							fn : function() {

								//Ext.getCmp('grididpesqsolicitacao').el.unmask();
							}
						});
					}
				}
				if (val == 1) {
					// dwr.util.setValue("titulo","");
                  var mystore = Ext.data.StoreManager.lookup('StoreBancos');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnBancos);
					//storeSolServico.loadData(returnBancos);
					//gridPesqSolicitacao.getView().refresh();

					//Ext.getCmp('grididpesqsolicitacao').el.unmask();
				} else {
				}
			},
			exceptionHandler : function(errorstring, exception) {

				Ext.MessageBox.show({
							title : '' + exception.javaClassName,
							msg : '' + errorstring,
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.ERROR,
							fn : function() {
								//Ext.getCmp('grididpesqsolicitacao').el.unmask();

							}
						});
			},
			timeout : 500000

		});

	}
	Ext.Loader.setConfig({
			enabled : true
		});
Ext.define('App.controller.ContasBancarias',{

	extend:'Ext.app.Controller',
	
	
		views : ['financeiro.ContasBancarias','financeiro.ContasBancariasPanel','financeiro.ContasBancariasList'],
	requires : ['App.store.Banco','App.store.TipoConta','Ext.Date.*'],
    
	init : function(application) {

		this.control({

					"contasbancarias" : {

						afterrender : this.onRenderComboBanco
					},"pesquisaconta" : {

						click : this.onButtoncontaClicPesquisa
					},

					"button#addcontasbancarias" : {

						click : this.onButtonClicAddConta
					},"button#buttoncancelcadastrocontasbancarias" : {

						click : this.onButtoncontaClicCancel
					}	
					,
					" button#buttoncadastrocontasbancarias" : {
						click : this.onClickCadastroContaBancaria
					}/*," button#liberarmovimento" : {
						click : this.onButtonClickLiberarMovimento
					},
					"login form textfield" : {
						specialkey : this.onTextfieldSpecialKey
					}*/

				});
	},
	
	
	
	
		onClickCadastroContaBancaria : function(button, e, options) {
		            var panel = Ext.ComponentQuery.query('contasbancarias')[0];

		          var panelsaldo=Ext.ComponentQuery.query('fieldset#container')[0];
					/*var fieldset = panel.down('fieldset')//,
                     fields   = panelsaldo.getItemId( );   
					fields.each(function(field) {
                        if (field.getName) {
                          console.log(field.getName());
                           }
                        });*/ 
                        
		            
					var datasaldo = Ext.util.Format.date(panelsaldo.down('datefield[name=datasaldoabertura]').getValue(), "Ymd");
					//var tipoatividade=
					// var bean = new Fornecedor();
		           var venc=panel.down('textfield[name=vencimentolimite]').getValue();
				              		var   bean = {
				        				   nome : panel.down('textfield[name=nome]').getValue(),
				        				   tipoconta:panel.down('textfield[name=tipoconta]').getValue(),
				        				   bancos_codbacen : panel.down('textfield[name=banco]').getValue(),
				        				   agencia :panel.down('textfield[name=agencia]').getValue(),
				        				   dvagencia : panel.down('textfield[name=dvagencia]').getValue(),
				        				   conta : panel.down('textfield[name=conta]').getValue(),
				        				   dvconta : panel.down('textfield[name=dvconta]').getValue(),
				        				   telefone : panel.down('textfield[name=telefone]').getValue(),
				        				   
				        				   vencimentolimite:Ext.util.Format.date(venc, "Ymd"),
				        				   
				        				   limitecredito:panel.down('textfield[name=limite]').getValue(),
				        				   inclui:panel.down('checkboxfield[name=inclui]').getValue(),
				        				  
				        				   datasaldoabertura :datasaldo,//Ext.util.Format.date(panel.down('datefield[name=datasaldoabertura]').getRawValue(), "Ymd"),
				        				   valorsaldoabertura:panel.down('textfield[name=valor]').getValue(),
				        				  
				        				   // tipo : tipo.tipoPessoa,
				        				   
				        				   
				        				   
				        				  
				        				   //valor:panel.down('textfield[name=valor]').getValue(),
				        				   //contato:panel.down('textfield[name=contato]').getValue(),
				        				   //retinss:panel.down('textfield[name=inss]').getValue(),
				        				   ativo:'s'
				        				   
				        		   };
					
					//valor = valor.replace(",", ".");
					cadastroContasBancarias(bean);

	},
	
	onButtonClicAddConta : function(button, e, options) {
       var win = Ext.create('App.view.financeiro.ContasBancarias');
       win.setTitle('Conta Banco | Novo'); // #5
			win.show();
	},

 onRenderComboBanco : function(button, e, options) {
		 

			pesquisaBanco();
	},
	
	
	onButtoncontaClicPesquisa : function(button, e, options) {
        // var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
         //mystore.removeAll();
        var panel = Ext.ComponentQuery.query('ContasBancariastopanel')[0];

        var   bean = {
				        				   nome: panel.down('textfield[name=conta]').getValue(),
				        				   tipoconta:'',//panel.down('textfield[name=tipoconta]').getValue(),
				        				   banco : '',//panel.down('textfield[name=banco]').getValue(),
				        				   agencia :'',//panel.down('textfield[name=agencia]').getValue(),
				        				   dvagencia : '',//panel.down('textfield[name=dvagencia]').getValue(),
				        				   conta : panel.down('textfield[name=conta]').getValue(),
				        				   dvconta :'',// panel.down('textfield[name=dvconta]').getValue(),
				        				   telefone : '',//panel.down('textfield[name=telefone]').getValue(),
				        				   vencimentolimite:'',//Ext.util.Format.date(panel.down('datefield[name=vencimento]').getRawValue(), "Ymd"),
				        				   
				        				   limitecredito:'',//panel.down('textfield[name=limite]').getValue(),
				        				   inclui:'',//panel.down('checkboxfield[name=inclui]').getValue(),
				        				  
				        				   datasaldoabertura :'',//Ext.util.Format.date(panel.down('datefield[name=datasaldoabertura]').getRawValue(), "Ymd"),
				        				   valorsaldoabertura:'',//panel.down('textfield[name=valor]').getValue(),
				        				  
				        				   // tipo : tipo.tipoPessoa,
				        				   
				        				   
				        				   
				        				  
				        				   //valor:panel.down('textfield[name=valor]').getValue(),
				        				   //contato:panel.down('textfield[name=contato]').getValue(),
				        				   //retinss:panel.down('textfield[name=inss]').getValue(),
				        				   ativo:'s'
				        				   
				        		   };
				        		   console.log(panel.down('textfield[name=conta]').getValue());
		pesquisaContas(bean);
 		
	},
	onButtoncontaClicCancel : function(button, e, options) {
        // var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
         //mystore.removeAll();
         button.up('contasbancarias').close();
 		
	}
	
	
	
	
	
	/*,

	
	onButtonClickLogout : function(button, e, options) {
		Ext.Ajax.request({
					url : 'FacadeUsuarioLogout', // #1
					success : function(conn, response, options, eOpts) {
						var result = Ext.JSON.decode(conn.responseText, true);
						if (!result) {
							result = {};
							result.success = false;
							result.msg = conn.responseText;
						}
						if (result.success) { // #3
							button.up('mainviewport').destroy(); // #4
							window.location.reload();
						} else {
							Ext.Msg.show({ // #6
								title : 'Error!',
								msg : result.msg,
								icon : Ext.Msg.ERROR,
								buttons : Ext.Msg.OK
							});
						}
					},
					failure : function(conn, response, options, eOpts) {
						Ext.Msg.show({ // #7
							title : 'Error!',
							msg : conn.responseText,
							icon : Ext.Msg.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				});
	}*/
	
});
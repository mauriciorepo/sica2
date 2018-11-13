
function cadastrarClasse(classe) {

		FacadeProduto.cadastroClasse(classe, {
			callback : function(returnfat) {

				if (returnfat == "true") {
										
                       var panel = Ext.ComponentQuery.query('classe form#formclasse')[0];
                       panel.getForm().reset();
					//formCadastroFornecedorComercial.getForm().reset();
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'classe Cadastrado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING
							});
					//Ext.getCmp('fantasia').focus();

				}
				if (returnfat == "error") {

					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Cadastro não pode ser efetuado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});

				}
				if (returnfat == "notuse") {
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Usuario Invalido',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "usenull") {
					Ext.MessageBox.show({
						title : 'Alert',
						msg : 'Seu tempo de sessão expirou!!! Você será redirecionado para pagina principal!!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {
							document.location.reload(true);

						}
					});
				}
				if (returnfat == "usenivel") {
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Usuario não Autorizado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "vazio") {
					Ext.MessageBox.show({
								title : 'Campos Vazios',
								msg : 'O Cadastro Não pode Conter Camos vazios!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "existe") {
					Ext.MessageBox.show({
								title : 'Duplicacao',
								msg : 'Já Consta este Codigo no sistema!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									//Ext.getCmp('fantasia').focus();

								}
							});
				}

			},
			exceptionHandler : function(errorstring, exception) {

				Ext.MessageBox.show({
							title : 'Erro!!! ' + exception.javaClassName,
							msg : '' + errorstring,
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.ERROR,
							fn : function() {

							}
						});
			},
			timeout : 500000

		});
	}

function pesquisaunidade() {

	FacadeProduto.findUnidade( {
		callback : function(returnClasse) {
			var val = 1;
			// alert(returnClasse[0].fornecedor);
			if (returnClasse == '') {
				val = 2;

			} else {
				var retu = returnClasse[0].descricao;

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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager.lookup('StoreComboclasses');
				mystore.loadData(returnClasse);
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Combo Centro de resultados' + exception.javaClassName,
						msg : '' + errorstring,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR,
						fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
		},
		timeout : 500000

	});

}

function pesquisaclasse() {

	FacadeProduto.findClasse( {
		callback : function(returnClasse) {
			var val = 1;
			// alert(returnClasse[0].fornecedor);
			if (returnClasse == '') {
				val = 2;

			} else {
				var retu = returnClasse[0].descricao;

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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager.lookup('StoreComboClasses');
				mystore.loadData(returnClasse);
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Combo Classes' + exception.javaClassName,
						msg : '' + errorstring,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR,
						fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
		},
		timeout : 500000

	});

}


function pesquisagrupo() {

	FacadeProduto.findGrupo( {
		callback : function(returnGrupos) {
			var val = 1;
			// alert(returnGrupos[0].fornecedor);
			if (returnGrupos == '') {
				val = 2;

			} else {
				var retu = returnGrupos[0].descricao;

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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager.lookup('StoreComboGrupos');
				mystore.loadData(returnGrupos);
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Combo Centro de resultados' + exception.javaClassName,
						msg : '' + errorstring,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR,
						fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
		},
		timeout : 500000

	});

}
function cadastrarGrupo(grupo) {

		FacadeProduto.cadastroGrupo(grupo, {
			callback : function(returnfat) {

				if (returnfat == "true") {
										
                       var panel = Ext.ComponentQuery.query('grupo form#formgrupo')[0];
                       panel.getForm().reset();
					//formCadastroFornecedorComercial.getForm().reset();
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Grupo Cadastrado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING
							});
					//Ext.getCmp('fantasia').focus();

				}
				if (returnfat == "error") {

					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Cadastro não pode ser efetuado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});

				}
				if (returnfat == "notuse") {
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Usuario Invalido',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "usenull") {
					Ext.MessageBox.show({
						title : 'Alert',
						msg : 'Seu tempo de sessão expirou!!! Você será redirecionado para pagina principal!!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {
							document.location.reload(true);

						}
					});
				}
				if (returnfat == "usenivel") {
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Usuario não Autorizado!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "vazio") {
					Ext.MessageBox.show({
								title : 'Campos Vazios',
								msg : 'O Cadastro Não pode Conter Camos vazios!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

								}
							});
				}
				if (returnfat == "existe") {
					Ext.MessageBox.show({
								title : 'Duplicacao',
								msg : 'Já Consta este Codigo no sistema!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									//Ext.getCmp('fantasia').focus();

								}
							});
				}

			},
			exceptionHandler : function(errorstring, exception) {

				Ext.MessageBox.show({
							title : 'Erro!!! ' + exception.javaClassName,
							msg : '' + errorstring,
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.ERROR,
							fn : function() {

							}
						});
			},
			timeout : 500000

		});
	}



Ext.define('App.controller.Produto',{

	extend:'Ext.app.Controller',
	
	
		views : ['suprimentos.ProdutoPanel','suprimentos.Produto','suprimentos.ProdutoList'],
	requires : ['App.store.ComboProduto','App.view.suprimentos.CadastroGrupo','App.store.ComboGrupo','App.store.ComboClasse','App.view.suprimentos.ProdutoList'],
    
	init : function(application) {

		this.control({

					"Filiaistopanel" : {

						afterrender : this.onRenderFiliaisPanel
					},"combobox#combogrupo" : {
                        render : this.onRenderProdutoEstoque,
						select: this.onSelectedGrupo
					},
					"cadastroprodutogeral" : {

						render : this.onRenderProdutoPanel
					},
                    "button#buttoncadastroproduto" : {

						click : this.onButtonClicLancarProduto
					},

					"button#cadastroproduto" : {

						click : this.onButtonClicAddProduto
					},"button#BTNgrupo" : {

						click : this.onButtonClicAddGrupo
					},"button#cancelaproduto" : {

						click : this.onButtonClicCancel
					},"button#lancargrupo" : {

						click : this.onButtonClickGrupo
					},"button#BTNclasse" : {

						click : this.onButtonClicAddClasse
					},"button#lancarclasse":{
					   click:this.onButtonClickClasse
					}

				});
	},

		onSelectedGrupo : function(combo, record, index, eOpts) {
	
			var grupo=combo.getValue();
		    
		    

			pesquisaClasse(grupo);
	},
	
	onRenderFiliaisPanel : function(button, e, options) {
		 console.log("Filial");
					
			var firma = {
		         data:'',
				colete : '',
				hora_entrada :'',
				nome_crianca:'',
				cliente_idcliente :'',
                responsavel:'',
				//senha : senha,
				ativo : 'S'

			}

			pesquisaMovimento();
	},
	
	onRenderProdutoPanel : function(button, e, options) {
		 
			var mystore = Ext.data.StoreManager.lookup('StoreComboGrupos');
		
			if((typeof  mystore == 'undefined')   ){
		  
		  Ext.create('App.store.ComboGrupo');
		  
		pesquisagrupo(); 
			
		}else{
		
	           	if(mystore.getCount()<=0){
		    
	          	pesquisagrupo(); 
		        }  
	           
			
		}
		//pesquisagrupo();

			
	},
	onRenderProdutoEstoque : function(button, e, options) {
		 
		var mystore = Ext.data.StoreManager.lookup('StoreComboClasses');
		
		if((typeof  mystore == 'undefined')   ){
		  
		  Ext.create('App.store.ComboClasse');
		  
		pesquisaclasse(); 
			
		}else{
		
	           	if(mystore.getCount()<=0){
		    
	          	pesquisaclasse(); 
		        }  
	           
			
		}
				
	},
	

	
	onButtonClicLancarProduto : function(button, e, options) {
		
		var win = button.up('window');
        var formPanel = win.down('form');
        var panel = Ext.ComponentQuery.query('appheader displayfield#hora')[0];
        
        
        var data=panel.getValue();
		
		var cel3=Ext.util.Format.substr(data,11,5);
		var estada;
		var hora_entrada = formPanel.down('textfield[name=entrada]').getRawValue();
		var colete = formPanel.down('textfield[name=colete]').getValue();
		var check=formPanel.down('checkboxfield[name=checkbox1]').getValue();
		if(check){
		
			 estada='S';
		
		
		}else{
		   estada='N'
		}
		var date=Ext.util.Format.date(new Date(), "Ymd");
		console.log(hora_entrada, colete, date);
		if (formPanel.getForm().isValid()) {
			var Movimento = { 
		         data:date,
				colete : colete,
//				hora_entrada :hora_entrada,
				nome_crianca:formPanel.down('textfield[name=nome_crianca]').getValue(),
				cliente_idcliente :formPanel.down('hiddenfield[name=idcliente]').getValue(),
                responsavel:formPanel.down('textfield[name=responsavel]').getValue(),
				estada:estada,
                //senha : senha,
				ativo : 'S'

			}
         entrarCliente(Movimento);
			//Ext.get(win.getEl()).mask("Authenticating... Please wait...",	'loading');
			//validaUsuario(user);

		}else {
			Ext.MessageBox.show({
				title : 'Campos Invalidos',
				msg : 'Os campos em vermelho precisam ser preenchidos corretamente',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING,
				fn : function() {
					//document.location.reload(true);

				}
			});
			
		}
	},
	onButtonClicCancel : function(button, e, options) {
         //var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
         //mystore.removeAll();
         button.up('produtowindow').close();
 		
	},
	
	onButtonClicAddProduto : function(button, e, options) {
       var win = Ext.create('App.view.suprimentos.Produto');
       win.setTitle('Produto | Novo'); // #5
			win.show();
			console.log('Tela Produto');
	},
	onButtonClicAddGrupo : function(button, e, options) {
       var win = Ext.create('App.view.suprimentos.CadastroGrupo');
       win.setTitle('Grupo | Novo'); // #5
			win.show();
	},onButtonClicAddClasse : function(button, e, options) {
       var win = Ext.create('App.view.suprimentos.CadastroClasse');
       win.setTitle('Classe | Novo'); // #5
			win.show();
	}
	
	
	
	,
	onButtonClickGrupo : function(button, e, options) {
        
        
        //button.up('form').getForm.reset();
	  var win = button.up('grupo');
    var formPanel = win.down('form');
         
          if (formPanel.getForm().isValid()){
      
         console.log('Ok');
         var conta=formPanel.getForm().getValues();
         console.log(conta.cod);console.log(conta.descricao);
         var   bean = {	   descricao : conta.descricao,//formPanel.down('textfield[name=descricao]').getValue(),
				       	   idprodutogrupo : conta.cod,//formPanel.down('numberfield[name=cod]').getValue(),
				       	   cod:conta.cod,//formPanel.down('numberfield[name=cod]').getValue()
				           data:Ext.Date.format(new Date(), 'Ymd')
				       	   //	   data :Ext.util.
				       	   
                 }
                 cadastrarGrupo(bean);
    }
	},
	

	
	onButtonClickClasse : function(button, e, options) {
        
        
        //button.up('form').getForm.reset();
	  var win = button.up('classe');
    var formPanel = win.down('form');
         
        
        //console.log('Entrada');
		//button.up('form').getForm.reset();
    
    //var grupo=new Grupo();
    if (formPanel.getForm().isValid()){
      
         //console.log('Tela Classe');
         var classe=formPanel.getForm().getValues();
         console.log(classe.grupo);console.log(classe.descricao);
         var   bean = {	   descricao : classe.descricao,//formPanel.down('textfield[name=descricao]').getValue(),
				       	   idprodutoclasse : classe.grupo+classe.cod,//formPanel.down('numberfield[name=cod]').getValue(),
				       	   cod:classe.cod,//formPanel.down('numberfield[name=cod]').getValue()
				           data:Ext.Date.format(new Date(), 'Ymd')
				       	   //	   data :Ext.util.
				       	   
                 }
                 cadastrarClasse(bean);
    }
	}
	
	
});
function UpdateFornecedor(beanContas) {

		FacadeFornecedor.updateFornecedor(beanContas, {
			callback : function(returnfat) {

				if (returnfat == "true") {
										
                        var panel = Ext.ComponentQuery.query('updatefornecedorwindow form#fornecedorForm')[0];
					   panel.getForm().reset();
					//formCadastroFornecedorComercial.getForm().reset();
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Fornecedor Atualizado!!!',
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
								msg : 'Já Consta este fornecedor no sistema!!!',
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
function listarFornecedor(fornecedor) {

		FacadeFornecedor.findFornecedor(fornecedor, {
			callback : function(returnFornecedor) {
				var val = 1;
				// alert(returnFornecedor[0].fornecedor);
				if (returnFornecedor == '') {
					val = 2;
					
				} else {
					var retu = returnFornecedor[0].fantasia;

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
                  var mystore = Ext.data.StoreManager.lookup('StoreFornecedor');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnFornecedor);
					//storeSolServico.loadData(returnFornecedor);
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

function cadastroFornecedor(beanContas) {

		FacadeFornecedor.cadastraFornecedor(beanContas, {
			callback : function(returnfat) {

				if (returnfat == "true") {
										
                        var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];
					   panel.getForm().reset();
					//formCadastroFornecedorComercial.getForm().reset();
					Ext.MessageBox.show({
								title : 'Alert',
								msg : 'Fornecedor Cadastrado!!!',
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
								msg : 'Já Consta este fornecedor no sistema!!!',
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


	function uploadXMLFornecedor(file) {
		// var image = dwr.util.getValue('uploadImage');
		//var file = dwr.util.getValue('filefornecedor');
		// var color = dwr.util.getValue('color');

		FacadeFornecedor.populateFornecedorWithXML(file, {
			async : false,
			callback : function(returnfat) {

				if (returnfat.fantasia != "error") {
					//showResultBox('Lançado!!');
                        var lowerhome=Ext.util.Format.lowercase(returnfat.homepage);   
					    if(lowerhome=='' | lowerhome=="null"){
					     lowerhome="";
					    }else{
					    
					    	var urlformat=Ext.util.Format.substr(lowerhome,0,6);
					    if(urlformat!="http://"){
					      lowerhome="http://"+lowerhome;
					    }
					    }
					    var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];
					    //formCadastroFornecedorComercial.getForm().findField('complemento').setValue(returnfat.complemento);
                        //formCadastroFornecedorComercial.getForm().findField('tipo').setValue("j");
                        //formCadastroFornecedorComercial.getForm().findField('confins').setValue(returnfat.confins);
                        //formCadastroFornecedorComercial.getForm().findField('pis').setValue(returnfat.retpis);
                        
                                             panel.down('textfield[name=cpf]').setDisabled(true);
						        			 panel.down('textfield[name=rg]').setDisabled(true);
						        			 panel.down('textfield[name=cnpj]').setDisabled(false);
						        			 panel.down('textfield[name=ie]').setDisabled(false);
						        			 panel.down('textfield[name=im]').setDisabled(false);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(false);
						        			 //Ext.getCmp('ie').focus();
						        		     panel.down('textfield[name=cpf]').setValue("");
						        			 panel.down('textfield[name=rg]').setValue("");
						        		     //panel.down('textfield[name=razaosocial]').focus();
						        	
						        	         panel.down('textfield[name=fantasia]').setValue(returnfat.fantasia);
						        			 panel.down('textfield[name=razaosocial]').setValue(returnfat.razaosocial);
						        			 panel.down('textfield[name=im]').setValue(returnfat.im);
						        			 panel.down('textfield[name=ie]').setValue(returnfat.ie);	
						        			 panel.down('textfield[name=logradouro]').setValue(returnfat.logradouro);
                                             panel.down('textfield[name=telefone]').setValue(returnfat.telefone);
						        			 panel.down('textfield[name=cep]').setValue(returnfat.cep);
						        			 panel.down('textfield[name=bairro]').setValue(returnfat.bairro);
						        			 panel.down('textfield[name=cidade]').setValue(returnfat.cidade);	
						        			 panel.down('textfield[name=numero]').setValue(returnfat.numero);
						        			 panel.down('textfield[name=homepage]').setValue(returnfat.lowerpage);
						        			 panel.down('textfield[name=cnpj]').setValue(returnfat.cnpj);
						        			
						//panel.down('filefield[name=fiile]').reset();        							        	
                        
                        
                        
                        
                        
                        
                        
                        
                       // formCadastroFornecedorComercial.getForm().findField('cnpj').setValue(returnfat.cnpj);
                        
                        
                        
                        //dwr.util.setValue("fantasia", returnfat.fantasia);
					//formCadastroFornecedorComercial.getForm().load(returnfat);
					//Ext.getCmp('fantasia').focus();

				}
				if (returnfat.fantasia == "error") {

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
				if (returnfat.fantasia == "notuse") {
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
				if (returnfat.fantasia == "usenull") {
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
				if (returnfat.fantasia == "usenivel") {
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

				if (returnfat.fantasia == "existe") {
					Ext.MessageBox.show({
								title : 'Duplicacao',
								msg : 'Já Consta este fornecedor no sistema!!!',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									Ext.getCmp('fantasia').focus();

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
Ext.define('App.controller.Fornecedor',{

	extend:'Ext.app.Controller',
	
	
		views : ['suprimentos.FornecedorPanel','suprimentos.FornecedorList','suprimentos.Fornecedor','suprimentos.UpdateFornecedor','suprimentos.ContatosFornecedorList'],
	requires : [],
    
	init : function(application) {

		this.control({

					"button#buttonupdatecadastrofornecedor" : {

						click : this.onClickButtonUpdateFornecedor
					},"button#pesquisafornecedor" : {

						click : this.onButtonClicPesquisaFornecedor
					},"button#cadastrofornecedor" : {

						click : this.onButtonClicAddFornecedor
					},"fornecedorcomercial radiogroup#tipo" : {

						change: this.onSelectedNatureza,
						render:this.onRenderNatureza
					},

					"button#buttoncadastrofornecedor" : {

						click : this.onClickCadastroFornecedor
					},"button#editarfornecedor" : {

						click : this.onButtonOpenUpdateFornecedor
					},"button#cancelafornecedor" : {

						click : this.onButtonClicCancel
					},"button#cancelaupdatefornecedor":{
					
						click:this.onButtonClicUpdateCancel
					},"filefield#file":{
					       change: this.onClickXml
					}/*,
					"filial" : {

						afterrender : this.onRenderEmpresas
					},
					" button#listmovimento" : {
						click : this.onButtonClickListarMovimento
					}," button#liberarmovimento" : {
						click : this.onButtonClickLiberarMovimento
					},
					"login form textfield" : {
						specialkey : this.onTextfieldSpecialKey
					}*/

				});
	},onClickButtonUpdateFornecedor : function(button, e, options) {
		            var panel = Ext.ComponentQuery.query('updatefornecedorwindow form#fornecedorForm')[0];

		           
						        		     
		            //var fantasia = ;
					
					//var tipo = dwr.util.getValue('tipo');
					var tipo = panel.down('radiogroup[name=tipo]').getValue();
					//var tipoatividade=
					// var bean = new Fornecedor();
				              		var   bean = {
				        				   fantasia : panel.down('textfield[name=fantasia]').getValue(),
				        				   tipo : tipo.tipoPessoa,
				        				   tipoatividade:panel.down('textfield[name=tipoatividade]').getValue(),
				        				   cpf : panel.down('textfield[name=cpf]').getValue(),
				        				   rg :panel.down('textfield[name=rg]').getValue(),
				        				   ie : panel.down('textfield[name=ie]').getValue(),
				        				   razaosocial : panel.down('textfield[name=razaosocial]').getValue(),
				        				   telefone : panel.down('textfield[name=telefone]').getValue(),
				        				   cnpj : panel.down('textfield[name=cnpj]').getValue(),
				        				   im : panel.down('textfield[name=im]').getValue(),
				        				   logradouro:panel.down('textfield[name=logradouro]').getValue(),
				        				   numero:panel.down('textfield[name=numero]').getValue(),
				        				   complemento:panel.down('textfield[name=complemento]').getValue(),
				        				   cep:panel.down('textfield[name=cep]').getValue(),
				        				   bairro:panel.down('textfield[name=bairro]').getValue(),
				        				   homepage:panel.down('textfield[name=homepage]').getValue(),
				        				   retinss:panel.down('textfield[name=inss]').getValue(),
				        				   retcsll:panel.down('textfield[name=csll]').getValue(),
				        				   retconfins:panel.down('textfield[name=confins]').getValue(),
				        				   retpis:panel.down('textfield[name=pis]').getValue(),
				        				   idfornecedores:panel.down('hiddenfield[name=idfornecedores]').getValue(),
				        				   suframa:0,
				        				   ativo:'s',
				        				   telefone2:'',
				        				   descontfin:'0.0',
				        				   optantesn:'s',
				        				   bloqueado:'n',
				        				   descontoprod:'0.0',
				        				   datainc:'11111111',
				        				   databloqueio:'11111111',
				        				   datainativo:'11111111',
				        				   datainc2:'11111111',
				        				   cidade:panel.down('textfield[name=cidade]').getValue()
				        				  // tipoatividade:panel.down('textfield[name=tipoatividade]').getValue()

				        		   };
				              		console.log(panel.down('textfield[name=tipoatividade]').getValue())
					
					//valor = valor.replace(",", ".");
					UpdateFornecedor(bean);

	},
	onButtonOpenUpdateFornecedor : function(button, e, options) {

		//win.setTitle('Entrada');
		//win.show();
		var grid = Ext.ComponentQuery.query('fornecedorlist')[0];

		//    var grid = this.getClienteList(), // #1
		var record = grid.getSelectionModel().getSelection();

		if (record[0]) { // #2
			var win = Ext.create('App.view.suprimentos.UpdateFornecedor');
       		win.setTitle('Fornecedor | Atualiza'); // #5
			win.show();
	
			//var win = Ext.create('Packt.view.security.Profile');
			var panel = Ext.ComponentQuery.query('updatefornecedorwindow form#fornecedorForm')[0];
		 
		 var natureza=record[0].data.tipo
		    	        			 if(natureza == 'F'){
						        			 panel.down('textfield[name=cpf]').setDisabled(false);
						        			 panel.down('textfield[name=rg]').setDisabled(false);
						        			 panel.down('textfield[name=cnpj]').setDisabled(true);
						        			 panel.down('textfield[name=ie]').setDisabled(true);
						        			 panel.down('textfield[name=im]').setDisabled(true);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(true);
						        	
						        	         panel.down('textfield[name=cnpj]').setValue("");
						        			 panel.down('textfield[name=ie]').setValue("");
						        			 panel.down('textfield[name=im]').setValue("");
						        			 panel.down('textfield[name=razaosocial]').setValue("");	
						        			 panel.down('button[name=buttonupdatecadastrofornecedor]').setDisabled(true);
						        			 panel.down('textfield[name=fantasia]').focus();
						        			 //Ext.getCmp('cpf').focus();
						        			 
						        			 }if(natureza == 'J'){
						        			 panel.down('textfield[name=cpf]').setDisabled(true);
						        			 panel.down('textfield[name=rg]').setDisabled(true);
						        			 panel.down('textfield[name=cnpj]').setDisabled(false);
						        			 panel.down('textfield[name=ie]').setDisabled(false);
						        			 panel.down('textfield[name=im]').setDisabled(false);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(false);
						        			 //Ext.getCmp('ie').focus();
						        		     panel.down('textfield[name=cpf]').setValue("");
						        			 panel.down('textfield[name=rg]').setValue("");
						        		     panel.down('button[name=buttonupdatecadastrofornecedor]').setDisabled(true);
						        		     
						        		     panel.down('textfield[name=razaosocial]').focus();
						        		     
						        			 }			


		    win.down('form').loadRecord(record[0]);
		    panel.down('textfield[name=tipoatividade]').setValue(record[0].data.tipoatividade);
		    

		}

	},

		onSelectedNatureza : function(combo, record, index, eOpts) {
			 var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];
		 
		 var natureza=combo.getValue();
		    	        			 if(natureza.tipoPessoa == 'F'){
						        			 panel.down('textfield[name=cpf]').setDisabled(false);
						        			 panel.down('textfield[name=rg]').setDisabled(false);
						        			 panel.down('textfield[name=cnpj]').setDisabled(true);
						        			 panel.down('textfield[name=ie]').setDisabled(true);
						        			 panel.down('textfield[name=im]').setDisabled(true);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(true);
						        	
						        	         panel.down('textfield[name=cnpj]').setValue("");
						        			 panel.down('textfield[name=ie]').setValue("");
						        			 panel.down('textfield[name=im]').setValue("");
						        			 panel.down('textfield[name=razaosocial]').setValue("");	
						        			 panel.down('button[name=cadastrofornecedor]').setDisabled(true);
						        			 panel.down('textfield[name=fantasia]').focus();
						        			 //Ext.getCmp('cpf').focus();
						        			 
						        			 }if(natureza.tipoPessoa == 'J'){
						        			 panel.down('textfield[name=cpf]').setDisabled(true);
						        			 panel.down('textfield[name=rg]').setDisabled(true);
						        			 panel.down('textfield[name=cnpj]').setDisabled(false);
						        			 panel.down('textfield[name=ie]').setDisabled(false);
						        			 panel.down('textfield[name=im]').setDisabled(false);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(false);
						        			 //Ext.getCmp('ie').focus();
						        		     panel.down('textfield[name=cpf]').setValue("");
						        			 panel.down('textfield[name=rg]').setValue("");
						        		     panel.down('button[name=cadastrofornecedor]').setDisabled(true);
						        		     
						        		     panel.down('textfield[name=razaosocial]').focus();
						        		     
						        			 }			
			

			//pesquisaFiliais(idfirma);
	},onRenderNatureza : function(radio, eOpts) {
		// console.log("Filial");
		var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];
					//var natureza=eOpts.getValue();
						        			 
						        			 panel.down('textfield[name=cpf]').setDisabled(true);
						        			 panel.down('textfield[name=rg]').setDisabled(true);
						        			 panel.down('textfield[name=cnpj]').setDisabled(false);
						        			 panel.down('textfield[name=ie]').setDisabled(false);
						        			 panel.down('textfield[name=im]').setDisabled(false);
						        			 panel.down('textfield[name=razaosocial]').setDisabled(false);
						        			 //Ext.getCmp('ie').focus();
						        		     panel.down('textfield[name=cpf]').setValue("");
						        			 panel.down('textfield[name=rg]').setValue("");
						        		     panel.down('textfield[name=razaosocial]').focus();

			//pesquisaMovimento();
	},
	    onClickXml: function(filefield, value, options) {
        /*var file = filefield.fileInputEl.dom.files[0];
        var v = filefield.fileInputEl.dom.value;
        if (typeof FileReader !== "undefined" && (/xml/i).test(file.type)) {
            var reader = new FileReader();
            reader.onload = function(event) {
         var dataUri = event.target.result
         };
            
reader.readAsDataURL(file);
//console.log(file.toString());
           } 
       // var picture = this.getUserPicture();
 var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];
   var val=panel.down('filefield[name=file]').getValue();
        var val1=panel.down('filefield[name=file]').getSubmitValue(); 
        var val2=panel.down('filefield[name=file]').getSubmitData();
        var val3=panel.down('filefield[name=file]').getEl();
        var val5=panel.down('filefield[name=file]').getId();
     // var val=panel.down('filefield[InputId='+val5+']').getValue();
        */
        var fornecedor=dwr.util.getValue("file");
        
        uploadXMLFornecedor(fornecedor);
        filefield.reset();
        /*
            If the file is an image and the web browser supports FileReader, 
            present a preview in the image component 
        */
        /*if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
            var reader = new FileReader();
            reader.onload = function(e){
                picture.setSrc(e.target.result);
            };
            reader.readAsDataURL(file); 
        } else if (!(/image/i).test(file.type)){
            Ext.Msg.alert('Warning', 'You can only upload image files!');
            filefield.reset();
        } */  
       // uploadXMLFornecedor(dataUri);
    },
	onClickCadastroFornecedor : function(button, e, options) {
		            var panel = Ext.ComponentQuery.query('fornecedorwindow form#fornecedorForm')[0];

		           
						        		     
		            //var fantasia = ;
					
					//var tipo = dwr.util.getValue('tipo');
					var tipo = panel.down('radiogroup[name=tipo]').getValue();
					//var tipoatividade=
					// var bean = new Fornecedor();
				              		var   bean = {
				        				   fantasia : panel.down('textfield[name=fantasia]').getValue(),
				        				   tipo : tipo.tipoPessoa,
				        				   tipoatividade:panel.down('textfield[name=tipoatividade]').getValue(),
				        				   cpf : panel.down('textfield[name=cpf]').getValue(),
				        				   rg :panel.down('textfield[name=rg]').getValue(),
				        				   ie : panel.down('textfield[name=ie]').getValue(),
				        				   razaosocial : panel.down('textfield[name=razaosocial]').getValue(),
				        				   telefone : panel.down('textfield[name=telefone]').getValue(),
				        				   cnpj : panel.down('textfield[name=cnpj]').getValue(),
				        				   im : panel.down('textfield[name=im]').getValue(),
				        				   logradouro:panel.down('textfield[name=logradouro]').getValue(),
				        				   numero:panel.down('textfield[name=numero]').getValue(),
				        				   complemento:panel.down('textfield[name=complemento]').getValue(),
				        				   cep:panel.down('textfield[name=cep]').getValue(),
				        				   bairro:panel.down('textfield[name=bairro]').getValue(),
				        				   homepage:panel.down('textfield[name=homepage]').getValue(),
				        				   retinss:panel.down('textfield[name=inss]').getValue(),
				        				   retcsll:panel.down('textfield[name=csll]').getValue(),
				        				   retconfins:panel.down('textfield[name=confins]').getValue(),
				        				   retpis:panel.down('textfield[name=pis]').getValue(),
				        				   suframa:0,
				        				   ativo:'s',
				        				   telefone2:'',
				        				   descontfin:'0.0',
				        				   optantesn:'s',
				        				   bloqueado:'n',
				        				   descontoprod:'0.0',
				        				   datainc:'11111111',
				        				   databloqueio:'11111111',
				        				   datainativo:'11111111',
				        				   datainc2:'11111111',
				        				   cidade:panel.down('textfield[name=cidade]').getValue(),
				        				   tipoatividade:panel.down('textfield[name=tipoatividade]').getValue()

				        		   };
					
					//valor = valor.replace(",", ".");
					cadastroFornecedor(bean);

	},
	
	  
	onButtonClicPesquisaFornecedor: function (button, e, options) {
  		
        var Panel=Ext.ComponentQuery.query('Fornecedortopanel')[0];
       var fantasia = Panel.down('textfield[name=fornecedor]').getValue();
       
       
          //var forn=new Fornecedor();
          var forn={
          	
            fantasia:fantasia,
            tipo:'',
            tipoatividade:'',
            razaosocial:'',
            cnpj:'',
            ie:'',
            im:'',
            rg:'',
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            ibge:'',
            telefone:'',
            cidade:''
            
          }
        	listarFornecedor(forn);
        	

        
       },
	

	onButtonClicCancel : function(button, e, options) {
         //var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
        
         //mystore.removeAll();
         button.up('fornecedorwindow').close();
 		
	},onButtonClicUpdateCancel : function(button, e, options) {
         //var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
        
         //mystore.removeAll();
         button.up('updatefornecedorwindow').close();
 		
	},
	
	onButtonClicAddFornecedor : function(button, e, options) {
       var win = Ext.create('App.view.suprimentos.Fornecedor');
       win.setTitle('Fornecedor | Novo'); // #5
			win.show();
	}
	
	
	
	
	
});
function pesquisaMovimento() {

		FacadeFirma.listarFirmas( {
			callback : function(returnClientes) {
				var val = 1;
				// alert(returnClientes[0].fornecedor);
				if (returnClientes == '') {
					val = 2;
					
				} else {
					var retu = returnClientes[0].razao;

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
                  var mystore = Ext.data.StoreManager.lookup('StoreEmpresas');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnClientes);
					//storeSolServico.loadData(returnClientes);
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

function pesquisaFiliais(firma) {

		FacadeFiliais.consultaFiliais( firma,{
			callback : function(returnClientes) {
				var val = 1;
				// alert(returnClientes[0].fornecedor);
				if (returnClientes == '') {
					val = 2;
					
				} else {
					var retu = returnClientes[0].razao;

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
                  var mystore = Ext.data.StoreManager.lookup('StoreFiliais');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnClientes);
					//storeSolServico.loadData(returnClientes);
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

function pesquisaEmpresas() {

		FacadeFirma.listarFirmas( {
			callback : function(returnClientes) {
				var val = 1;
				// alert(returnClientes[0].fornecedor);
				if (returnClientes == '') {
					val = 2;
					
				} else {
					var retu = returnClientes[0].razao;

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
                  var mystore = Ext.data.StoreManager.lookup('StoreEmpresa');
					//var store = Ext.create('Ext.store.Cliente');
                   mystore.loadData(returnClientes);
					//storeSolServico.loadData(returnClientes);
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



Ext.define('App.controller.Filiais',{

	extend:'Ext.app.Controller',
	
	
		views : ['gerais.FiliaisPanel','gerais.Filial','gerais.Filiais'],
	requires : ['App.store.Filiais','App.store.ComboEmpresas','App.view.gerais.Filiais'],
    
	init : function(application) {

		this.control({

					"Filiaistopanel" : {

						afterrender : this.onRenderFiliaisPanel
					},"combobox#firma" : {

						select: this.onSelectedEmpresas
					},
					"filial" : {

						afterrender : this.onRenderEmpresas
					},

					"button#cadastrofiliais" : {

						click : this.onButtonClicAddFiliais
					}/*,
					" button#listmovimento" : {
						click : this.onButtonClickListarMovimento
					}," button#liberarmovimento" : {
						click : this.onButtonClickLiberarMovimento
					},
					"login form textfield" : {
						specialkey : this.onTextfieldSpecialKey
					}*/

				});
	},

		onSelectedEmpresas : function(combo, record, index, eOpts) {
		// var Panel = button.up('Filiaistopanel');
		 //var tbar = button.up('toolbar#buttonfilial');
		 //var nome = tbar.down('textfield[name=firma]').getValue();
		 
		 //var idfirma=Panel.down('combobox[name=firma]').getValue();
		 var idfirma=combo.getValue();
		 //console.log(combo.getValue());
			//		console.log(combo.getDisplay())
		    var firma= new Firma();
			 firma = {
		        idfiliais:'',
				razao: '',
				fantasia :'',
				cnpj:'',
				inscricaoestadual :'',
                inscricaomunicipal:'',
				cep : '',
				logradouro: '',
				bairro: '',
				complemento: '',
				cidade : '',
				uf : '',
				firma_idfirma : idfirma
				}

			pesquisaFiliais(idfirma);
	},onRenderFiliaisPanel : function(button, e, options) {
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
	
	onRenderEmpresas : function(button, e, options) {
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

			pesquisaEmpresas();
	},
	
	  	onButtonClickLiberarMovimento: function (button, e, options) {
  		
        var grid=Ext.ComponentQuery.query('movimentolist')[0];
        var record = grid.getSelectionModel().getSelection();
       
       
        if(record[0]){ // #2
       
        	var movimento={
        	    data:record[0].get('data'),
				colete : record[0].get('colete'),
                hora_entrada :record[0].get('hora_entrada'),
				nome_crianca:record[0].get('nome_crianca'),
				cliente_idcliente :record[0].get('cliente_idcliente'),
                responsavel:record[0].get('responsavel'),
				
                idmovimento:record[0].get('idmovimento'), 
				ativo : 'S'
        	}
        
        	liberaMovimento(movimento);
        	
}
        
       },
	
	onButtonClicEntrar : function(button, e, options) {
		
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
         var mystore = Ext.data.StoreManager.lookup('StoreResponsavel');
         mystore.removeAll();
         button.up('window').close();
 		
	},
	
	onButtonClicAddFiliais : function(button, e, options) {
       var win = Ext.create('App.view.gerais.Filial');
       win.setTitle('Filial'); // #5
			win.show();
	}
	
	
	
	/*,
	onButtonClickEntrada : function(button, e, options) {
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0];
		//var win = Ext.create('App.view.cliente.Cliente');
        //win.setTitle('Novo cliente');
        //mainPanel.setActiveTab(win);
        
        var newTab = mainPanel.items.findBy( // #2
         function (tab){
           return tab.title === record.get('Entrada'); // #3
          });
         if (!newTab){ // #4
             newTab = mainPanel.add({ // #5
           xtype: record.raw.className, // #6
         closable: true, // #7
           iconCls: record.get('Entrada'), // #8
          title: record.get('text') // #9
});
}
        mainPanel.setActiveTab(newTab);
        //console.log('Entrada');
		//button.up('form').getForm.reset();
	},
	
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
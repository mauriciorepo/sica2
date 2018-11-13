function baixarContasAPagar(contas) {

	FacadeContasAPagar.baixaConta(contas, {
		callback : function(returnBancos) {
			var val = 1;
			// alert(returnBancos[0].fornecedor);
			if (returnBancos == '') {
				val = 2;

			} else {
				var retu = returnBancos;

				if (retu == "usenull") {

					val = 2;
					// var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				     //form.getEl().unmask();
					
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
					// var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
			    	//form.getEl().unmask();
					
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
					 //var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
					 //form.getEl().unmask();
					
					Ext.MessageBox.show({
						title : 'Alert',
						msg : 'Usuario não Autorizado a executar esta operacao!!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}				if (retu == "mais") {
					val = 2;
					 //var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
					 //form.getEl().unmask();
					
					Ext.MessageBox.show({
						title : 'Alert',
						msg : 'O valor ultrapassou o total da parcela!!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
	

		 var formContasAPagar = Ext.ComponentQuery.query('BaixaContasAPagar')[0];
		
        var formPanel = formContasAPagar.down('form');
        formPanel.getForm().reset();
	
		       var win = Ext.ComponentQuery.query('BaixaContasAPagar')[0];
				win.close();
				//form.getEl().unmask();
					
				Ext.MessageBox.show({
						title : 'Conta',
						msg : 'Conta baixada com sucesso!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {
                     		//App.controller.ContasAPagar.onButtonClicCancel
						}
					});
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {
                var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
					
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
function lancaContas(contas) {

	FacadeContasAPagar.cadastroContas(contas, {
		callback : function(returnBancos) {
			var val = 1;
			// alert(returnBancos[0].fornecedor);
			if (returnBancos == '') {
				val = 2;

			} else {
				var retu = returnBancos[0].nome;

				if (retu == "usenull") {

					val = 2;
					 var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
					
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
					 var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
					
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
					 var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
					
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
	var mystore = Ext.data.StoreManager.lookup('StoreParcelasAPagar');
		var Rateiostore = Ext.data.StoreManager.lookup('StoreDivisaodeRateioContasAPagar');

		 var formContasAPagar = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		
        var formPanel = formContasAPagar.down('form');
        formPanel.getForm().reset();
	
		Rateiostore.removeAll();
        mystore.removeAll();
		       var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
				formPanel.El().unmask();	
				Ext.MessageBox.show({
						title : 'Conta',
						msg : 'Conta lançada com sucesso!!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING,
						fn : function() {
                     		//App.controller.ContasAPagar.onButtonClicCancel
						}
					});
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {
                var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				form.getEl().unmask();
					
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
function pesquisaContasApagarGrid(conta) {

	FacadeContasAPagar.contasAPagarByVencimento(conta, {
		callback : function(returnBancos) {
			var val = 1;
			// alert(returnBancos[0].fornecedor);
			if (returnBancos == '') {
				val = 2;

			} else {
				var retu = returnBancos[0].meiopagamento;

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
				var mystore = Ext.data.StoreManager.lookup('StoreGridContasAPagar');
				mystore.loadData(returnBancos);
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
function pesquisaComboCentrodeResultados(centro) {

	FacadeCentrodeResultado.pesquisaCentrodeResultados(centro, {
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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager
						.lookup('StoreComboContasAPagarCentrodeResultados');
				mystore.loadData(returnBancos);
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
function pesquisaComboContas(conta) {

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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager.lookup('StoreComboParcelasContasAPagarContasBancarias');
				mystore.loadData(returnBancos);
						} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Conta Bancaria' + exception.javaClassName,
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
function pesquisaPlano(conta) {

	FacadePlanodeContas.pesquisaPlanodeContas(conta, {
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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {
				var mystore = Ext.data.StoreManager
						.lookup('StoreComboPlanodeContas');
				mystore.loadData(returnBancos);
							} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Plano de conta' + exception.javaClassName,
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
function populaComboFornecedor(fornecedor) {

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

							// Ext.getCmp('grididpesqsolicitacao').el.unmask();
						}
					});
				}
			}
			if (val == 1) {

				var mystore = Ext.data.StoreManager.lookup('ComboContasAPagarFornecedor');

				mystore.loadData(returnFornecedor);

			} else {
			}
		},
		exceptionHandler : function(errorstring, exception) {

			Ext.MessageBox.show({
						title : 'Fornecedor' + exception.javaClassName,
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

Ext.define('App.controller.ContasAPagar', {

	extend : 'Ext.app.Controller',

	views : ['financeiro.ContasAPagarPanel', 'financeiro.ContasAPagar','financeiro.BaixaContasAPagar',
			'financeiro.ContasAPagarList'/*,'App.view.financeiro.UpdateContasAPagar'*/, 'financeiro.ParcelasAPagarList','financeiro.UpdateParcelasAPagarList','App.view.financeiro.ContasAPagarWindow'],
	requires : ['App.view.financeiro.ContasAPagarPanel',
			'App.store.ComboContasAPagarFornecedor',
			'App.view.financeiro.ContasAPagarWindow',
			'App.view.financeiro.ContasAPagarList',
			'App.view.financeiro.ContasAPagar',
			'App.store.ParcelasAPagar',
			'App.view.menu.MenuFatura',
			'App.view.financeiro.DivisaodeRateioContasAPagarList',
			'App.store.ComboParcelasContasAPagarContasBancarias',
			'App.store.ComboPlanodeContas','App.store.ComboContasAPagarCentrodeResultados'],

	init : function(application) {

		this.control({
             
			"ContasAPagarPanel button#pesquisacontaapagar" : {

				click : this.populaGridContasAPagar
				//afterrender : this.populaComboPlanodeContas
				// onClose:this.onCloseGrid
				// render:this.pesquisaComboContasParcelasAPagarList
			},"contasapagar button#cancelcontasapagar" : {

				click : this.onButtonClicCancel
				// render:this.pesquisaComboContasParcelasAPagarList
			},"contasapagar button#addcontasapagar" : {

				click : this.onButtonClicLancaConta
				// render:this.pesquisaComboContasParcelasAPagarList
			},"BaixaContasAPagar button#fechatelabaixa" : {

				click : this.onButtonClicCancelBaixaContas
				// render:this.pesquisaComboContasParcelasAPagarList
			},
			"ContasAPagarWindow":{
		    hide:this.onButtonClicCancel
			},
			"contasapagar " : {

				afterrender : this.populaFornecedor,
				onClose : this.onButtonClicCancel
				// render:this.pesquisaComboContasParcelasAPagarList
			},/*
				 * "ParcelasAPagarList" : {
				 * 
				 * //afterrender : this.populaFornecedor,
				 * afterrender:this.pesquisaComboContas },
				 */
			"contasapagar button#addparcelacontasapagar" : {

				click : this.addrowParcelas,
				afterrender : this.populaComboContaBancaria

			},"ContasAPagarPanel button#lancacontasapagar" : {

				click : this.onButtonClicAddBaixaContasapagar
				//afterrender : this.populaComboContaBancaria

			},"contasapagar button#addrateio" : {

				click : this.addrowPlanodeContas,
				afterrender : this.populaComboPlanodeContas

			},
             
             "button#editarcontasapagar" : {

				click : this.onButtonClicAddContasapagar
				//afterrender : this.populaComboCentrodeResultados
			},
			"button#addcontasapagar" : {

				click : this.onButtonClicAddContasapagar,
				afterrender : this.populaComboCentrodeResultados
			},"button#baixarConta" : {

				click : this.onbuttonClickBaixaContas
				//afterrender : this.populaComboCentrodeResultados
			},"ParcelasAPagarList textfield#valor " : {
						//specialkey : this.onTextfieldSpecialKey,
						//rowbodykeypress:this.onTextfieldSpecialKey
			
			},"ParcelasAPagarList":{
			
				//beforecellclick:this.ongridParcelasClick,
				//beforecelldblclick:this.ongridParcelasClick,
				deselect:this.ongridParcelasClick,
				//blur:this.ongridParcelasClick,
				click:this.ongridParcelasClick
				//beforeedit:this.onTextfieldSpecialKey
			},"ParcelasAPagar":{
			
				//beforecellclick:this.ongridParcelasClick,
				//beforecelldblclick:this.ongridParcelasClick,
				datachanged:this.ongridParcelasClick
			},
			"ParcelasAPagarList store#StoreComboParcelasContasAPagarContasBancarias" : {

				onClose : this.onCloseGrid

			}
		});
	},
	
	   handleActionColumn: function(column, action, view, rowIndex, colIndex,item, e) {
       var store = view.up('ParcelasAPagarList').getStore(),
       rec = store.getAt(rowIndex);
       if (action == 'delete'){
       store.remove(rec);
       Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
       }
     },

		onTextfieldSpecialKey : function(view,button,e,eOpts) {
            console.log('foi');
		if ((e.getKey() == e.ENTER)||(e.getKey() == e.TAB)) {

			var g = Ext.ComponentQuery.query('ParcelasAPagarList')[0];
            g.getView().refresh();

            var win = Ext.ComponentQuery.query('ContasAPagarWindow')[0];

            var formPanel = win.down('form');
       
             //formPanel.getForm().findField('parcelas').setValue(grid.getStore().getCount());
             var val=0.0;
	         grid.getStore().each(function(rec,idx){
	        //console.log(rec.get('valor')); 
	          val=val+rec.get('valor');
	          });
	    
	       formPanel.getForm().findField('valor').setValue(val);
	     	
			
		}
		  if ((e.getKey() == e.F8)){
	       formPanel.down('button[name=Senha]').focus();
	       }
		

	},
	
	onButtonClicCancelBaixaContas : function(button, e, options) {
		//var mystore = Ext.data.StoreManager.lookup('StoreComboParcelasContasAPagarContasBancarias');
		var window = Ext.ComponentQuery.query('BaixaContasAPagar')[0];
		
		
        var formPanel = window.down('form');
        formPanel.getForm().reset();
	
		
       var win = button.up('BaixaContasAPagar');
       win.close();

	},
	
	onButtonClicCancel : function(button, e, options) {
		var mystore = Ext.data.StoreManager.lookup('StoreParcelasAPagar');
		var Rateiostore = Ext.data.StoreManager.lookup('StoreDivisaodeRateioContasAPagar');

		 var formContasAPagar = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		
        var formPanel = formContasAPagar.down('form');
        formPanel.getForm().reset();
	
		Rateiostore.removeAll();
        mystore.removeAll();
		//gridrateio.removeAll();
		//gridrateio.getView().refresh();
		//grid.removeAll();
		//grid.getView().refresh();
		
		
	    //var win = button.up('ContasAPagarWindow');
       var win = button.up('ContasAPagarWindow');
       button.up('ContasAPagarWindow').close();

	},
	ongridRateioClick: function(view, record,item,index,e){
	
		var store=view.getStore();
	    var val=0.0;
	    store.each(function(rec,idx){
	        //console.log(rec.get('valor')); 
	       val=val+rec.get('valor');
	    });
	    if(val!=100){

	    	
	    			     Ext.MessageBox.show({
						title : 'Grid Rateio invalido' ,
						msg : 'A soma dos valores das parcelas do centro de resultados precisa ser exetamente 100%',
						renderTo:'ContasAPagarWindow',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
	    }
	    
	},
	ongridParcelasClick: function(view, record,item,index,e){
	    //console.log('Click!!!!');
	    var store=view.getStore();
	    var val=0.0;
	    store.each(function(rec,idx){
	        //console.log(rec.get('valor')); 
	       val=val+rec.get('valor');
	    });
	    var win = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
        var formPanel = win.down('form');
       // formPanel.getForm().down('textfield[name=valor]').setValue(val);
        formPanel.getForm().findField('valor').setValue(val);
     
	    
	    
	    //console.log(store[0].data);
	    
	    //e.stopEvent();
	    
	    //var menu = Ext.ComponentQuery.query('MenuFatura')[0];
	      //  menu.showAt(e.getXY());
	   
	},
	
	onbuttonClickBaixaContas: function(button, e, options){
	  var win = button.up('BaixaContasAPagar');
    var formPanel = win.down('form');
    
    var baixaConta=new BaixaDespesas();
    if (formPanel.getForm().isValid()){
      
         console.log('Ok');
         var conta=formPanel.getForm().getValues();
         baixaConta.valor=conta.valor;
		        baixaConta.data_baixa=conta.data_baixa;
		        baixaConta.despesas_id_despesa=conta.despesas_id_despesa;
		        baixaConta.contasbancarias_idcontasbancarias=conta.contasbancarias_idcontasbancarias; 
		        baixaConta.parcelasapagar_idparcelasapagar=conta.idparcelasapagar;
		        baixaConta.parcelasapagar_contasbancarias_idcontasbancarias=conta.contasbancarias_idcontasbancarias;
		        baixaConta.parcelasapagar_despesas_id_despesa=conta.despesas_id_despesa;
       
		        //formPanel.getForm().reset();
		        //win.close()
		        baixarContasAPagar(baixaConta);
    }
    
    
      
	
	},
onButtonClicLancaConta: function(button, e, options){
	var win = button.up('ContasAPagarWindow');
    var formPanel = win.down('form');
        //var gridconta=formPanel.getFo.getValues();
        
        var gridParcelas = Ext.ComponentQuery.query('ParcelasAPagarList')[0];
		var gridrateio = Ext.ComponentQuery.query('DivisaodeRateioContasAPagarList')[0];
		if(gridParcelas.getStore().getCount()>0){
		   if(gridrateio.getStore().getCount()>0){
		      			    var val=0.0;
			    gridrateio.getStore().each(function(rec,idx){
	                  val=val+rec.get('valor');
         	          });
			    console.log(val); 
	           
			if(val == 100){
				
				if (formPanel.getForm().isValid()){
	                var win = button.up('ContasAPagarWindow');
					Ext.get(win.getEl()).mask("lançando conta",'Lançando');
				//var myMask = new Ext.LoadMask(win, {msg:"Please wait..."});
                 //myMask.show();   
	
				var contas=new ContasAPagar();
				var conta=formPanel.getForm().getValues();
		        
				
		       var storeParcelas=gridParcelas.getStore();
		       //var listParcelas=Ext.encode(Ext.pluck(storeParcelas.data.items, 'data'));
		       //console.log(listParcelas[0].vencimento);
		       var storeRateio=gridrateio.getStore();
		       var listReateioPlano=Ext.Array.pluck(storeRateio.data.items, 'data');
		      // var list2=Ext.Array.map(storeRateio.data.items, 'data');
		       //var listReateioPlano=Ext.encode(Ext.pluck(storeRateio.data.items, 'data'));
		       //var expect= Ext.Array.toMap(listReateioPlano);
		       
		       contas.competencia=conta.competencia;
		        contas.data_emissao=conta.data_emissao;
		        contas.numero=conta.num_nota;
		        contas.parcelas=conta.parcelas; 
		        contas.valortotal=conta.valor;
		        contas.fornecedores_idfornecedores=conta.fornecedores_idfornecedores;
		        contas.descricao=conta.descricao;
		        contas.tipodocumento=conta.tipodocumento;
		        
		        
		        contas.listReateioPlano=listReateioPlano;
                var Parcelas=new ParcelasAPagar();
                // console.log(storeParcelas.getCount());
                var val=0; 
                for (var k = 0; k < storeParcelas.getCount(); k++) {
                 		var rec = storeParcelas.getAt(k);
                 		//console.log(rec.data['vencimento']);
                            
							storeParcelas.getAt(k).data['vencimento']=Ext.Date.format(storeParcelas.getAt(k).data['vencimento'], 'Ymd');
						  // console.log(storeParcelas.getAt(k).data['vencimento']);
                        	
							if ((storeParcelas.getAt(k).data['vencimento'] != '')&(storeParcelas.getAt(k).data['valor'] != '')&(storeParcelas.getAt(k).data['numparcela'] != '')&(storeParcelas.getAt(k).data['vencimento'] != 'meiopagamento')&(storeParcelas.getAt(k).data['contasbancarias_idcontasbancarias'] != '')) {
                                     
							} else {
                                    val=1;							
														
									}

						}
                 
                 if(val==0){
             
                 	    var listParcelas=Ext.Array.pluck(storeParcelas.data.items, 'data');
		          contas.listParcelas=listParcelas;
                 lancaContas(contas); 	
             
                 }else{
                    var form = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
				
				    form.getEl().unmask();
					
                 			     Ext.MessageBox.show({
						title : 'Cadastro invalido' ,
						renderTo:'ContasAPagarWindow',
						cls:'msg_floating',
						msg : 'Tabela parcelas com dados inconsistentes!!',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
                 }
                
			}else{
                    		     Ext.MessageBox.show({
						title : 'Cadastro invalido' ,
						renderTo:'ContasAPagarWindow',
						cls:'msg_floating',
						msg : 'Preencher campos em vermelho corretamente',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});			       
			     }//

			}else{
			
				       Ext.Msg.show({
						title : 'Cadastro invalido' ,
						//renderTo:'23',
						cls:'msg_floating',
						msg : 'Soma dos valores do campo Valor% tem que ser exatamente 100% ',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
			}
		    }else{
                    		     Ext.Msg.show({
						title : 'Cadastro invalido' ,
						renderTo:'ContasAPagarWindow',
						cls:'msg_floating',
						msg : 'Tabela Rateio precisa de no minimo um registro para lançar a Conta',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});			       
			     } 
		}else{
		    
		
			Ext.Msg.show({
						title : 'Cadastro invalido' ,
						msg : 'Tabela Parcelas precisa de no minimo uma parcela para lançar a Conta',
						cls:'msg_floating',
						//modal:true,
						//isWindow :true,
						renderTo:'ContasAPagarWindow',
						buttons : Ext.MessageBox.OK,
				        icon : Ext.MessageBox.WARNING,
				        fn : function() {
							// Ext.getCmp('grididpesqsolicitacao').el.unmask();

						}
					});
		}

},	onButtonClicUpdateContasapagar : function(button, e, options) {
		//console.log('Contas!!!!');
		
			var mystore = Ext.data.StoreManager.lookup('StoreComboParcelasContasAPagarContasBancarias');
		
		
       //var window = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		var bean = {
			nome : '',
			valor : '1.0',
			banco : '',
			agencia : '',
			dvagencia : '',
			conta : '',
			dvconta : '',
			telefone : '',
			vencimentolimite : ''
									
		};
		if((typeof  mystore == 'undefined')   ){
		  //window.show();
		  Ext.create('App.store.ComboParcelasContasAPagarContasBancarias');
		  
		pesquisaComboContas(bean); 
			//var tam=mystore.getCount();
		}else{
		
	           /*	if(mystore.getCount()<=0){
		    
	          	pesquisaComboContas(bean); 
		        }*/   
			
		}
		var window = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		if((typeof window != 'undefined')   ){
		  window.show();
		  pesquisaComboContas(bean);
		 
		}else{
		var win = Ext.create('App.view.financeiro.ContasAPagarWindow');
		Ext.create('App.store.ComboParcelasContasAPagarContasBancarias');
		win.setTitle('Conta à Pagar | Atualizar'); // #5
		win.show();
		var formPanel=win.down('form'); 
		//formPanel.getComponent('combofornecedor').fieldEl.dom.focus();
		//formPanel.down('textfield[name=combofornecedor]').focus();
		}
	},
	onButtonClicAddContasapagar : function(button, e, options) {
		//console.log('Contas!!!!');
		
			var mystore = Ext.data.StoreManager.lookup('StoreComboParcelasContasAPagarContasBancarias');
		
		
       //var window = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		var bean = {
			nome : '',
			valor : '1.0',
			banco : '',
			agencia : '',
			dvagencia : '',
			conta : '',
			dvconta : '',
			telefone : '',
			vencimentolimite : ''
									
		};
		if((typeof  mystore == 'undefined')   ){
		  //window.show();
		  Ext.create('App.store.ComboParcelasContasAPagarContasBancarias');
		  
		pesquisaComboContas(bean); 
			//var tam=mystore.getCount();
		}else{
		
	           /*	if(mystore.getCount()<=0){
		    
	          	pesquisaComboContas(bean); 
		        }*/   
			
		}
		var window = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		if((typeof window != 'undefined')   ){
		  window.show();
		  pesquisaComboContas(bean);
		 
		}else{
		var win = Ext.create('App.view.financeiro.ContasAPagarWindow');
		Ext.create('App.store.ComboParcelasContasAPagarContasBancarias');
		win.setTitle('Contas à Pagar | Novo'); // #5
		win.show();
		var formPanel=win.down('form'); 
		//formPanel.getComponent('combofornecedor').fieldEl.dom.focus();
		//formPanel.down('textfield[name=combofornecedor]').focus();
		}
	},
	onButtonClicAddBaixaContasapagar : function(button, e, options) {
		//console.log('Contas!!!!');
		var grid = Ext.ComponentQuery.query('contasapagarlist')[0];
		record = grid.getSelectionModel().getSelection();
		if(record[0]){ // #2
			var mystore = Ext.data.StoreManager.lookup('StoreComboParcelasContasAPagarContasBancarias');
		
		
       //var window = Ext.ComponentQuery.query('ContasAPagarWindow')[0];
		var bean = {
			nome : '',
			valor : '1.0',
			banco : '',
			agencia : '',
			dvagencia : '',
			conta : '',
			dvconta : '',
			telefone : '',
			vencimentolimite : ''
									
		};
		if((typeof  mystore == 'undefined')   ){
		  //window.show();
		  Ext.create('App.store.ComboParcelasContasAPagarContasBancarias');
		  
		pesquisaComboContas(bean); 
			//var tam=mystore.getCount();
		}else{
		
	           /*	if(mystore.getCount()<=0){
		    
	          	pesquisaComboContas(bean); 
		        }*/   
			
		}
		//console.log(mystore.getCount());
		var window = Ext.ComponentQuery.query('BaixaContasAPagar')[0];
		if((typeof window != 'undefined')   ){
		    var form= window.down('form'); // #3
        form.loadRecord(record[0]);
       var val=window.down('numberfield[name=valor]');
	    val.setMaxValue(record[0].get('valor')-record[0].get('pago'));
		 form.down('textfield[name=valor]').setValue(record[0].get('valor')-record[0].get('pago'));	
		
		 form.down('hiddenfield[name=idparcelasapagar]').setValue(record[0].get('idparcelasapagar'));	
			window.show();
		 
		}else{
		var editWindow = Ext.create('App.view.financeiro.BaixaContasAPagar');
        var form= editWindow.down('form'); // #3
        
        form.loadRecord(record[0]);
        console.log(record[0].get('valor'));
        editWindow.setTitle('Contas à Pagar | Baixa'); // #5
		editWindow.show();
	    var val=editWindow.down('numberfield[name=valor]');
	    val.setMaxValue(record[0].get('valor')-record[0].get('pago'));
	    form.down('hiddenfield[name=idparcelasapagar]').setValue(record[0].get('idparcelasapagar'));
	    form.down('textfield[name=valor]').setValue(record[0].get('valor')-record[0].get('pago'));
	    //form.down('numberfield[name=valor]').setMaxValue(record[0].get('valor'));
        
		//formPanel.getComponent('combofornecedor').fieldEl.dom.focus();
		//formPanel.down('textfield[name=combofornecedor]').focus();
		}
	
		}
		
		
	},

	populaFornecedor : function(button, e, options) {
		var forn = {

			fantasia : '',
			tipo : '',
			tipoatividade : '',
			razaosocial : '',
			cnpj : '',
			ie : '',
			im : '',
			rg : '',
			logradouro : '',
			numero : '',
			complemento : '',
			bairro : '',
			ibge : '',
			telefone : '',
			cidade : ''

		}
		populaComboFornecedor(forn);
	},populaGridContasAPagar : function(button, e, options) {
		//var Conta=new ContasAPagar();
		 var Conta= {
       fornecedores_idfornecedores:'',
       num_nota:'',
       valortotal:'',
       meiopagamento:'',
       numparcela:'',
       vencimento:'',
       valor:'',
       despesas_id_despesa:''
			
		};
		pesquisaContasApagarGrid(Conta);
	},
	populaComboContaBancaria : function(button, e, options) {
		var bean = {
			nome : '',
			valor : '1.0',
			banco : '',
			agencia : '',
			dvagencia : '',
			conta : '',
			dvconta : '',
			telefone : '',
			vencimentolimite : ''
									
		};
		pesquisaComboContas(bean);
	},
	populaComboPlanodeContas : function(button, e, options) {
		var bean = {
			nome : '',
			tipo : 'Despesas',
			subtipo : '',
			idplanodecontas : ''

		};
		pesquisaPlano(bean);
	},

	addrowPlanodeContas : function(button, e, options) {
		console.log('add');
		var grid = Ext.ComponentQuery.query('DivisaodeRateioContasAPagarList')[0];
		var bean = {
			nome : '',
			tipo : 'Despesas',
			subtipo : '',
			idplanodecontas : ''

		};
		
		grid.getStore().insert(grid.getStore().getCount(), bean);
		grid.getView().refresh();

	},
    
populaComboCentrodeResultados : function(button, e, options) {
		var bean = {
			centro : '',
			observacao : '',
			subtipo : '',
			idcentrodecusto : ''

		};
		pesquisaComboCentrodeResultados(bean);
	},
     deletarowParcelas:function(grid, rowIndex, colIndex) {
     	//var mystore = Ext.data.StoreManager.lookup('StoreParcelasAPagar');
     	var rec = grid.getStore().getAt(rowIndex);
     	//var grid = Ext.ComponentQuery.query('ParcelasAPagarList')[0];
     	//var record=grid.getSelectionModel();
     	grid.remove(rec);
     	//mystore
        
     },
	addrowParcelas : function(button, e, options) {
		//console.log('add');
		var grid = Ext.ComponentQuery.query('ParcelasAPagarList')[0];
		var bean = {
			nome : '',
			tipoconta : '',// panel.down('textfield[name=tipoconta]').getValue(),
			banco : '',// panel.down('textfield[name=banco]').getValue(),
			agencia : '',// panel.down('textfield[name=agencia]').getValue(),
			dvagencia : '',// panel.down('textfield[name=dvagencia]').getValue(),
			conta : '',// panel.down('textfield[name=conta]').getValue(),
			dvconta : '',// panel.down('textfield[name=dvconta]').getValue(),
			telefone : '',// panel.down('textfield[name=telefone]').getValue(),
			vencimentolimite : '',// Ext.util.Format.date(panel.down('datefield[name=vencimento]').getRawValue(),
									// "Ymd"),

			limitecredito : '',// panel.down('textfield[name=limite]').getValue(),
			inclui : '',// panel.down('checkboxfield[name=inclui]').getValue(),

			datasaldoabertura : '',// Ext.util.Format.date(panel.down('datefield[name=datasaldoabertura]').getRawValue(),
									// "Ymd"),
			valorsaldoabertura : '',// panel.down('textfield[name=valor]').getValue(),

						ativo : 's'

		};
		cellEditing=grid.getPlugin('cellplugin');
		grid.getStore().insert(grid.getStore().getCount(), bean);
		grid.getView().refresh();
		var mystore = Ext.data.StoreManager.lookup('StoreParcelasAPagar');
		var tam=mystore.getCount();
		
		var win = button.up('ContasAPagarWindow');
        var formPanel = win.down('form');
        
        formPanel.getForm().findField('parcelas').setValue(tam);
        cellEditing.startEditByPosition({row:tam-1, column:1});
		

	},
	
	onCloseGrid : function(button, e, options) {

	}

});
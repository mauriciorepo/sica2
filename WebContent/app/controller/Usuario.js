function pesquisaComboFiliais(firma) {

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
                  var mystore = Ext.data.StoreManager.lookup('StoreComboFiliais');
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


function pesquisaEmpresa() {

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


Ext.define('App.controller.Usuario', {
    extend: 'Ext.app.Controller',

    requires: [
        'App.view.usuario.Profile','App.store.Filiais','App.store.ComboEmpresas'
    ],

    views: [ 'usuario.Profile'
    ],

    //stores: [ 'security.Groups'],

    refs: [
       /* {
            ref: 'usersList',
            selector: 'userslist'
        },*/
        {
            ref: 'userPicture',
            selector: 'profile image'
        }
    ],

    init: function(application) {

        this.control({
            
            "profile button#cancel": {
                click: this.onButtonClickCancel
            },"profile combobox#firmausuario" : {

						select: this.onSelectedComboEmpresas
			},

            "profile": {
                afterrender: this.onRenderUsuario
                
            },
            "profile filefield": {
                change:this.onFilefieldChange
            }
        });

        /*if (!Ext.getStore('groups')) {
            Ext.create('Packt.store.security.Groups');
        } */   
    },

   
    
    
    
    onSelectedComboEmpresas : function(combo, record, index, eOpts) {
		 var idfirma=combo.getValue();
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
				firma_idfirma : idfirma}

			pesquisaComboFiliais(idfirma);
	},onRenderUsuario:function(button, e, options) {

			pesquisaEmpresa();
	},

	
	onButtonClickCancel:function(button, e, options) {
        button.up('window').close();
    },

    onFilefieldChange: function(filefield, value, options) {
        var file = filefield.fileInputEl.dom.files[0];

        var picture = this.getUserPicture();

        /*
            If the file is an image and the web browser supports FileReader, 
            present a preview in the image component 
        */
        if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
            var reader = new FileReader();
            reader.onload = function(e){
            	console.log(e.target.result);
                picture.setSrc(e.target.result);
            };
            reader.readAsDataURL(file); 
        } else if (!(/image/i).test(file.type)){
            Ext.Msg.alert('Warning', 'You can only upload image files!');
            filefield.reset();
        }   
    }
});
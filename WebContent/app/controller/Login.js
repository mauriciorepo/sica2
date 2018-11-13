Ext.Loader.setConfig({
			enabled : true
		});
function validaUsuario(login , senha) {

	FacadeUsuario.LogaUser(login , senha, {
				callback : function(returnBean) {

					if ((returnBean != "") & (returnBean != null)) {
						var login = Ext.ComponentQuery.query('login')[0];
						login.getEl().unmask();
                        //App.util.SessionMonitor.start();
                        //Ext.create('App.util.SessionMonitor').start();
						//session.start();
                        //var login=Ext.ComponentQuery.query('login');
						//login = button.up('login');
						login.close(); // #4
						Ext.create('App.view.MyViewport');
						//pesquisaPreco('S');
						// document.location = '/Sica/sessao.jsp';
						// document.location = '/Projeto2/index.html';
					}
					if (returnBean == null) {

						//dwr.util.setValue("senha2", "");
						//dwr.util.setValue("login2", "");

					}

				},
				errorHandler : function(errorstring, e) {
					var login = Ext.ComponentQuery.query('login')[0];
					login.getEl().unmask();

					Ext.MessageBox.show({
								title : 'Usuario Invalido',
								msg : errorstring,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.WARNING,
								fn : function() {
									//Ext.getCmp('login2').focus();

								}
							});
				},
				timeout : 50000

			});
}

Ext.define('App.controller.Login', {

	extend : 'Ext.app.Controller',
	//models:['Usuario'],
	views : ['Login', 'Header'],
	requires : ['App.util.MD5','App.util.SessionMonitor'],
    refs: [
    {
    ref: 'mainPanel',
    selector: 'mainpanel'
     }],
	init : function(application) {

		this.control({

					"login form button#logar" : {

						click : this.onButtonClicLogar
					},
					"login form button#cancel" : {

						click : this.onButtonClicCancel
					},
					
					"appheader button#logout" : {
						click : this.onButtonClickLogout
					},
					"appheader button#entrada" : {
						click : this.onButtonClickEntrada
					},"login textfield#user" : {
						specialkey : this.onTextfieldSpecialKey
					},"login textfield#senha" : {
						specialkey : this.onPasswordSpecialKey
					},"appheader" : {
						 render: this.onPanelRender 
						  //afterrender:this.onPanelAfterrender()
					}

				});
	},
	
	onPanelAfterrender: function(abstractcomponent, options) {
	
		//pesquisaPreco('S');
	
	},
	onPanelRender: function(abstractcomponent, options) {
        // var menuPanel = Ext.ComponentQuery.query('mainmenu')[0];
        
           
	  // console.log(Preco.OPERADOR);
      
		var panel = Ext.ComponentQuery.query('appheader displayfield#hora')[0];
        var relogio = {
	    run: function(){
	    	var data = Ext.Date.format(new Date(), 'd/m/Y H:i:s');
	        panel.setValue(data);
	    },
	    interval: 1000 //atualizando a cada 1 segundo
	   }
	//pesquisaPreco('S');
	//pesquisaCartao();
	var execucaoRelogio = Ext.create('Ext.util.TaskRunner');
	execucaoRelogio.start(relogio);
         
         },

		onPasswordSpecialKey : function(button, e, options) {

		if (e.getKey() == e.ENTER) {

			var formPanel = button.up('form'), 
			senha = button.up('senha');
			formPanel.down('button[name=logar]').focus();
			
		}

	},	
		onTextfieldSpecialKey : function(button, e, options) {

		if (e.getKey() == e.ENTER) {

			var formPanel = button.up('form'), 
			login = button.up('login');
			formPanel.down('textfield[name=Senha]').focus();
			//campo =Ext.ComponentQuery.query('login form textfield#user')[0]; 
				//campo.focus();
			//this.onButtonClicPesquisaClienteList(button, e, options);
		}

	},
	onButtonClicLogar : function(button, e, options) {
		var formPanel = button.up('form'), 
		win = button.up('login'),

		senha = formPanel.down('textfield[name=Senha]').getValue(),
		log = formPanel.down('textfield[name=user]').getValue(),
		pass=''+App.util.MD5.encode(senha);
		console.log(pass);
		if (formPanel.getForm().isValid()) {
			var user=new Usuario();
			
			  user = {
				id_usuario : '',
                nome_usuario:log,
				senha : senha,
				nivel:'a',
				email:'',
				login : log,
				ativo : 's'
				

			}

			Ext.get(win.getEl()).mask("Authenticating... Please wait...",'loading');
			validaUsuario(log ,pass);
			App.util.SessionMonitor.start();
           // console.log(pass);
		}
	},
	onButtonClicCancel : function(button, e, options) {

		//console.log(' Cancel');
		button.up('form').getForm.reset();
	},
	onButtonClickEntrada : function(button, e, options) {
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0];
		
        
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
					url : 'FacadeUsuario.logout()', // #1
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
	}

});
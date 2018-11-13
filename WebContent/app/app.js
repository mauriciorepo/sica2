Ext.require('Ext.container.Viewport');
Ext.Loader.setConfig({
   enbled:true,
   paths:{
      'Ext':'extjs4/src'
      //'App.util':'App.util.Util'
   }
})
Ext.application({
			name : 'App',

			appFolder : 'app',
			
			requires : [ 'App.store.Preco','App.view.menu.Accordion','App.view.usuario.Profile', 'Ext.tree.Panel','App.view.financeiro.ContasBancarias','App.store.ComboContasAPagarFornecedor'],
			
			//views : [''],
			
			controllers : ['Login','Menu','Usuario','Produto','Filiais','Fornecedor','ContasBancarias','ContasAPagar'],

			init : function() {
				splashscreen = Ext.getBody().mask('Carregando a aplicação ...',
						'splashscreen');
				splashscreen.addCls('splashscreen');
				Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
							cls : 'x-splash-icon'
						});
			},

			launch : function() {
				Ext.tip.QuickTipManager.init();
				var task = new Ext.util.DelayedTask(function() {
							splashscreen.fadeOut({
										duration : 1000,
										remove : true
									});
							splashscreen.next().fadeOut({
								duration : 1000,
								remove : true,
								listeners : {
									afteranimate : function(el, startTime,
											eOpts) {
										Ext.widget('login');
										campo =Ext.ComponentQuery.query('login form textfield#user')[0]; 
						              campo.focus();
										// #1
									}
								}
							});
							//console.log('launch'); // #1
						});
				task.delay(2000);

			}
		});
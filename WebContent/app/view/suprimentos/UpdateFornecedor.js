Ext.define('App.view.suprimentos.UpdateFornecedor', {
    extend: 'Ext.window.Window',
    alias: 'widget.updatefornecedorwindow',
    itemId:'updatefornecedorwindow',
    requires: [
        'App.util.Util','App.view.suprimentos.UpdateContatosFornecedorPanel','App.view.suprimentos.UpdateCadastroFornecedorComercial','App.view.suprimentos.UpdateCadastroFornecedorRetencoes'
    ],

    width: 700,
    title: 'Edit Fornecedor',
    trackResetOnLoad:true,
    iconCls: 'fornecedor',

    items: [
        { 
            xtype: 'form',
            itemId: 'fornecedorForm',
            autoScroll: true,
            layout: {
                type: 'fit'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Atualiza Comercial',
                            layout: 'fit',
                            itemId: 'comercial',
                            autoScroll: true,
                            items: [{
                                xtype: 'updatefornecedorcomercial'
                            }]
                        },{
                            xtype: 'panel',
                            autoScroll: true,
                            bodyPadding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            title: 'Atualiza Retenções',
                            defaults: {
                                anchor: '100%',
                                msgTarget: 'side'
                            },
                            items: [
                            {xtype:'updatefornecedorretencoes'}
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Atualiza Contatos',
                            itemId: 'filmcategories',
                            layout: 'fit',
                            autoScroll: true,
                            items: [{
                                xtype: 'UpdateContatosFornecedortopanel'
                            }]
                        }
                        
                    ]
                }
            ],	dockedItems : [{
									xtype : 'toolbar',
									dock : 'bottom',
									items : ['->', {
						text : 'Save',
						formBind:true,
						name:'buttonupdatecadastrofornecedor',
						itemId:'buttonupdatecadastrofornecedor',
						iconCls:'save'
					}, {
						text : 'Cancel',
						itemId:'cancelaupdatefornecedor',
						iconCls:'cancel'
					} ]
								}]
								
						
        }
    ]
});
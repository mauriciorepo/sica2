Ext.define('App.view.suprimentos.Fornecedor', {
    extend: 'Ext.window.Window',
    alias: 'widget.fornecedorwindow',
    itemId:'fornecedorwindow',
    requires: [
        'App.util.Util','App.view.suprimentos.ContatosFornecedorPanel','App.view.suprimentos.CadastroFornecedorComercial','App.view.suprimentos.CadastroFornecedorRetencoes'
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
                            title: 'Comercial',
                            layout: 'fit',
                            itemId: 'comercial',
                            autoScroll: true,
                            items: [{
                                xtype: 'fornecedorcomercial'
                            }]
                        },{
                            xtype: 'panel',
                            autoScroll: true,
                            bodyPadding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            title: 'Retenções',
                            defaults: {
                                anchor: '100%',
                                msgTarget: 'side'
                            },
                            items: [
                            {xtype:'fornecedorretencoes'}
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Contatos',
                            itemId: 'filmcategories',
                            layout: 'fit',
                            autoScroll: true,
                            items: [{
                                xtype: 'ContatosFornecedortopanel'
                            }]
                        }
                        
                    ]
                }
            ],	dockedItems : [{
									xtype : 'toolbar',
									dock : 'bottom',
									items : [{
                            xtype: 'filefield',
                            labelAlign:'top',
                            fieldLabel: 'Fornecedor',
                            name: 'file',
                            //ref:'f',
                            //id:'filefield',
                            itemId:'file',
                            buttonText:'',
                             buttonConfig: {
                                iconCls: 'xml'
                               },
                            allowBlank: true
                            //afterLabelTextTpl: ''
                        },'->', {
						text : 'Save',
						formBind:true,
						name:'buttoncadastrofornecedor',
						itemId:'buttoncadastrofornecedor',
						iconCls:'save'
					}, {
						text : 'Cancel',
						itemId:'cancelafornecedor',
						iconCls:'cancel'
					} ]
								}]
								
						/*		buttons : [{
                            xtype: 'filefield',
                            labelAlign:'top',
                            fieldLabel: 'Popular cadastro com Nf-e xml',
                            name: 'picture',
                            id:'idfilefornecedor',
                            itemId:'idfilefornecedor',
                            allowBlank: true,
                            afterLabelTextTpl: ''
                        },'->',{
						text : 'Popular',
						iconCls:'xml',
						itemId:'buttonpopulawithxml'
					}, {
						text : 'Save',
						itemId:'buttoncadastrofornecedor',
						iconCls:'save'
					}, {
						text : 'Cancel',
						itemId:'cancelafornecedor',
						iconCls:'cancel'
					}]*/
        }
    ]
});
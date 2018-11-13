Ext.define('App.view.suprimentos.Produto', {
    extend: 'Ext.window.Window',
    alias: 'widget.produtowindow',
    itemId:'produtowindow',
    requires: [
        'App.util.Util','App.store.ComboGrupo','App.view.suprimentos.CadastroProdutoGeral','App.view.suprimentos.CadastroProdutoEstoquePreco'
    ],

    width: 700,
    title: 'Produto | Novo',
    trackResetOnLoad:true,
    iconCls: 'produto',

    items: [
        { 
            xtype: 'form',
            itemId: 'produtoForm',
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
                            title: 'Geral',
                            layout: 'fit',
                            itemId: 'geral',
                            autoScroll: true,
                            items: [{
                                xtype: 'cadastroprodutogeral'
                            }]
                        },{
                            xtype: 'panel',
                            autoScroll: true,
                            bodyPadding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            title: 'Estoque/Preço',
                            defaults: {
                                anchor: '100%',
                                msgTarget: 'side'
                            },
                            items: [
                            {xtype:'cadastroprodutoestoquepreco'}
                            ]
                        }
                        
                    ]
                }
            ],	dockedItems : [{
									xtype : 'toolbar',
									dock : 'bottom',
									items : ['->', {
						text : 'Save',
						formBind:true,
						name:'buttoncadastroproduto',
						itemId:'buttoncadastroproduto',
						iconCls:'save'
					}, {
						text : 'Cancel',
						itemId:'cancelaproduto',
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
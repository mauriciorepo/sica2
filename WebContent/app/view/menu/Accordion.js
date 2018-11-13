var store1 = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Empresa", leaf: true,iconCls:'menucadastro',className:'clientepanel' },
           	{ text:'Entrada', leaf: true,iconCls:'menuentrada' ,className:'clientelistpanel' },
            { text: "Empresas(Filiais)", leaf: true ,iconCls:'menumovimento',className:'Filiaistopanel'},
            { text: "Consulta Banco", leaf: true ,iconCls:'menuvenda',className:'venda'}
            ]
    }
    
});
var store2 = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
           
            { text: "Contas Bancarias", leaf: true,iconCls:'tabelapreco',className:'ContasBancariastopanel' }
           
            ]
    }
});
var store3 = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Cadastro Usuario", leaf: true,iconCls:'administrator',className:'profile' }
           	]
    }
});
var store5 = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Fornecedor", leaf: true,iconCls:'fornecedor',className:'Fornecedortopanel' },
            { text: "Produto", leaf: true,iconCls:'produto',className:'Produtopanel' }
           
            ]
    }
});
var store4 = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Contas à Pagar", leaf: true,iconCls:'contapagar',className:'ContasAPagarPanel' },
            { text: "Contas à Receber", leaf: true,iconCls:'contareceber',className:'contasapagar' }//
           	]
    }
});
Ext.define('App.view.menu.Accordion', {
			extend : 'Ext.panel.Panel',
			
			alias : 'widget.mainmenu',
			
			width : 195,
			 //requires: ['App.store.ItemStoreEntrada'],
			//requires : [],
            //stores:['storeentrada'],
			//uses:['App.store.ItemStoreEntrada'],
			layout : {
				type : 'accordion'
			},
			
			
			collapsible : true,
			
			hideCollapseTool : false,
			
			iconCls : 'sitemap',
			
			title : 'Menu',
			
			items: [
          Ext.create('Ext.tree.Panel', {
       // alias:'widget.mainmenuitem',
        //id: 'tree-1',
        itemId:'mainmenuitem5',
        store:store5 ,//Ext.create('App.store.ItemStoreEntrada'),
        title: 'Suprimentos',
        iconCls:'fornecedor',
        rootVisible: false,
        layout: 'fit',
        draggable: false
    }),Ext.create('Ext.tree.Panel', {
       // alias:'widget.mainmenuitem',
        //id: 'tree-1',
        itemId:'mainmenuitem',
        store:store1 ,//Ext.create('App.store.ItemStoreEntrada'),
        title: 'Dados Gerais',
        iconCls:'paneldadosgerais',
        rootVisible: false,
        layout: 'fit',
        draggable: false
    }),
        Ext.create('Ext.tree.Panel', {
        //id: 'tree-2',
        //store: Store2,
        itemId:'mainmenuitem2',
        title: 'Financeiro',
        rootVisible: false,
        iconCls:'financeiro',
        store:store2,
        layout: 'fit',
        draggable: false,
        items:[
        	{
        	   
        	}
        	]
    }),  Ext.create('Ext.tree.Panel', {
       // alias:'widget.mainmenuitem',
        //id: 'tree-1',
        itemId:'mainmenuitem3',
        store:store3 ,//Ext.create('App.store.ItemStoreEntrada'),
        title: 'Segurança',
        iconCls:'administrator',
        rootVisible: false,
        layout: 'fit',
        draggable: false
    }),  Ext.create('Ext.tree.Panel', {
       // alias:'widget.mainmenuitem',
        //id: 'tree-1',
        itemId:'mainmenuitem4',
        store:store4 ,//Ext.create('App.store.ItemStoreEntrada'),
        title: 'Provisiões Contas',
        iconCls:'tabelapreco',
        rootVisible: false,
        layout: 'fit',
        draggable: false
    })
        ]
		});
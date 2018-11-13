Ext.define('App.view.menu.MenuFatura',{

	extend: 'Ext.menu.Menu',
	height:100,
	width:125,
    alias: 'widget.MenuFatura',

    //requires: ['App.store.ItemStoreEntrada'],
    items:[{
       text:'Pagar',
       iconCls : 'liberar'
    },{
       text:'Liberar',
       iconCls : 'liberar'
    },{
       text:'Pagar',
       iconCls : 'liberar'
    },{
       text:'Cancelar',
       iconCls : 'liberar'
    }]
   
});

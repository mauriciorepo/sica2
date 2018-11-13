Ext.define('App.view.Header', {
	extend : 'Ext.toolbar.Toolbar',
	alias : 'widget.appheader',
	cls : 'your-css',
	height : 40,
	ui : 'footer',
	style : 'border-bottom: 2px solid #4c72a4; ',
	//style: "background-image:url('img/degrade.png') !important",
	items : [

	{
		xtype : 'label',
		// iconCls:'logo',
		html : '<div id="titleHeader"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sica <span style="font-size:18px;"> -  Sistema Integrado Casman</span></div>'

	}, {
		xtype : 'tbfill'
	}, {
		xtype : 'displayfield',
		//fieldLabel : 'Hora:',
		itemId : 'hora',
		name : 'hora',
		value : '<div id="titleClock"> <span  style="font-size:18px;color:white;">value</span></div>',
		// vtype: 'email',
		// flex : 2,
		allowBlank : false
	}, {
		xtype : 'button',
		text : 'Entrada',
		itemId : 'entrada',
		iconCls : 'entrada',
		classNmae : 'myform',
		scale : 'small',
		iconAlign : 'top'
	}, {
		xtype : 'button',
		text : 'Movimento',
		itemId : 'movimento',
		iconCls : 'movimento',
		scale : 'small',
		iconAlign : 'top'
	},

	{
		xtype : 'button',
		text : 'Logout',
		itemId : 'logout',
		iconCls : 'logout',
		scale : 'small',
		iconAlign : 'top'
	},{
	
		xtype:'form',
		itemId:'TabelaPreco',
		item:[{
		xtype : 'hiddenfield', // 1
		name : 'precobase',
		itemId : 'precobase'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'operador',
		itemId : 'operador'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'reajuste',
		itemId : 'reajuste'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'minutos',
		itemId : 'minutos'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'valor2',
		itemId : 'valor2'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'valorestada',
		itemId : 'valorestada'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'minutosestada',
		itemId : 'minutosestada'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'flagestada',
		itemId : 'flagestada'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'ativo',
		itemId : 'ativo'
	},{
		xtype : 'hiddenfield', // 1
		name : 'horasegundainicio',
		itemId : 'horasegundainicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horasegundafim',
		itemId : 'horasegundafim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horatercainicio',
		itemId : 'horatercainicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horatercafim',
		itemId : 'horatercafim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horaquartainicio',
		itemId : 'horaquartainicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horaquartafim',
		itemId : 'horaquartafim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horaquintainicio',
		itemId : 'horaquintainicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horaquintafim',
		itemId : 'horaquintafim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horasextainicio',
		itemId : 'horasextainicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horasextafim',
		itemId : 'horasextafim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horasabadoinicio',
		itemId : 'horasabadoinicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horasabadofim',
		itemId : 'horasabadofim'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horadomingoinicio',
		itemId : 'horadamingoinicio'
	}, {
		xtype : 'hiddenfield', // 1
		name : 'horadomingofim',
		itemId : 'horadomingofim'
	}
		]
	} ]
});
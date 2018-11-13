Ext.define('App.store.ComboGrupo', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboGrupos',   
 fields:[
	    'cod','idprodutogrupo','data','descricao'
		
		]
	
    });
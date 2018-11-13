Ext.define('App.store.ComboClasse', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboClasses',   
 fields:[
	    'idprodutoclasse','descricao','cod','data'
		
		]
	
    });
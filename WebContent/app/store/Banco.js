Ext.define('App.store.Banco', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreBancos',   
 fields:[
	    'codbacen','nome','site'
		
		]
	
    
    });
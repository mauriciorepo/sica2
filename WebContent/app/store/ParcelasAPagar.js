Ext.define('App.store.ParcelasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreParcelasAPagar',   
 fields:[
	    'idparcelasapagar','despesas_id_despesa','contasbancarias_idcontasbancarias','meiopagamento','numparcela','vencimento','valor'
		
		]
	
    
    });
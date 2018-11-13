Ext.define('App.store.UpdateParcelasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreUpdateParcelasAPagar',   
 fields:[
	    'idparcelasapagar','despesas_id_despesa','contasbancarias_idcontasbancarias','meiopagamento','numparcela','vencimento','valor'
		
		]
	
    
    });
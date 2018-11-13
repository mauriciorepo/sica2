Ext.define('App.store.StoreGridContasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreGridContasAPagar',   
 fields:[
	      'pago','razaosocial','fantasia','fornecedores_idfornecedores','num_nota','idparcelasapagar','valortotal','meiopagamento','numparcela','vencimento','valor','despesas_id_despesa'
		
		]
	
    
    });
Ext.define('App.store.ParcelasaReceber', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreParcelasaReceber',   
 fields:[
	    'idparcelasareceber','contas_receber_id_contas_receber','meiopagamento','numparcela','vencimento','valor','contasbancarias_idcontasbancarias'
		
		]
	
    
    });
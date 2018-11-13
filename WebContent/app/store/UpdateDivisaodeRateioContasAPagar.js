Ext.define('App.store.UpdateDivisaodeRateioContasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreUpdateDivisaodeRateioContasAPagar',   
 fields:[
	    'idrateioplanocentrocontasapagar','planodecontas_idplanodecontas','centrodecusto_idcentrodecusto','valor','observacao'
		
		]
	
    
    });
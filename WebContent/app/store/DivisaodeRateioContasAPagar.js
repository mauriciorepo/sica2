Ext.define('App.store.DivisaodeRateioContasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreDivisaodeRateioContasAPagar',   
 fields:[
	    'idrateioplanocentrocontasapagar','planodecontas_idplanodecontas','centrodecusto_idcentrodecusto','valor','observacao'
		
		]
	
    
    });
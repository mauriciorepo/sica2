Ext.define('App.store.ContasAPagar', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreContasAPagar',   
 fields:[
	    'id_despesa','fornecedores_idfornecedores','data_despesa','num_nota','valortotal','situacao','competencia'
		
		]
	
    
    });
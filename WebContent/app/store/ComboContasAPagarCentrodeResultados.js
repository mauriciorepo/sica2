Ext.define('App.store.ComboContasAPagarCentrodeResultados', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboContasAPagarCentrodeResultados',  
 autoDestroy : true,
 fields:[
	    'idcentrodecusto','centro','observacao','subtipo'
		
		]//,		groupField: 'department'
	
    
    });
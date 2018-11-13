Ext.define('App.store.ComboPlanodeContas', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboPlanodeContas',  
 autoDestroy : true,
 fields:[
	    'idplanodecontas','nome','tipo','subtipo'
		
		]//,		groupField: 'department'
	
    
    });
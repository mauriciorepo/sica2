Ext.define('App.store.TipoConta', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreTipoConta',
 //autoLoad:true,
 fields:[
{
															type : 'string',
															name : 'nome'
														}, {
															type : 'string',
															name : 'tipo'
														}	    
 
// 'nome','tipo'
		
		], data : [
         {"nome": "Conta Corrente",    "tipo": "CC"},
         {"nome": "Corrente/Poupan�a", "tipo": "CP"},
         {"nome": "Poupan�a", "tipo": "P"}
         
     ]
	
    
    });
Ext.define('App.store.ContasaReceber', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreContasaReceber',   
 fields:[
	    'id_contas_receber','notafiscal','contas','cheques','fluxo','firma_idfirma','filiais_idfiliais','telefone','nome','tipoconta','datasaldoabertura','valorsaldoabertura','vencimentolimite','limitecredito'
		
		]
	
    
    });
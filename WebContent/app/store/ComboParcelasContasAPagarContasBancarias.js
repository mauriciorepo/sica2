Ext.define('App.store.ComboParcelasContasAPagarContasBancarias', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboParcelasContasAPagarContasBancarias',   
autoDestroy : true,
 fields:[
	    'idcontasbancarias','agencia','contas','cheques','fluxo','firma_idfirma','filiais_idfiliais','telefone','nome','tipoconta','datasaldoabertura','valorsaldoabertura','vencimentolimite','limitecredito'
		
		]
	
    
    });
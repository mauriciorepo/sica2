Ext.define('App.store.ComboFiliais', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboFiliais',   
 fields:[
	    'idfiliais','razao','fantasia','cnpj','inscricaoestadual','inscricaomunicipal','cep','logradouro','complemento','bairro','cidade','uf','firma_idfirma'
		
		]
	
    });
Ext.define('App.store.ComboProduto', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreComboProduto',   
 fields:[
	    'idprodutos','codigo','descricao','inclusao','alteracao','inativo','ativo','curvaabc','area','pesoliquido','pesobruto','ean','precobase'
		
		]
	
    });
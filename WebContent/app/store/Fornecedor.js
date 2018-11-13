Ext.define('App.store.Fornecedor', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreFornecedor',   
 fields:[
	    'idfornecedores','fantasia','tipo','tipoatividade','razaosocial','cnpj','ie','im','suframa','rg','ativo','cep','logradouro','numero','complemento','bairro','ibge','telefone2','retpis','retconfins','retcsll','retirrf','datainc2','telefone','databloqueio','datainativo','homepage','datainc','cidade'
		
		]
	/*proxy: {
        type: 'dwr',
        //assume that we have dwr function getTestGrid(storeParameters a,Integer b,Integer c)
        //first one goes automatically it includes start,limit,page and other store parameters
        //second and third are optional we pass them through dwrParams as an array
        dwrFunction:FacadeCliente.getClientes,
        dwrParams:[1,2],
        reader: {
            root: 'data',
            totalProperty:'totalCount'
        }

    }*/
    
    });
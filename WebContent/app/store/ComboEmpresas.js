Ext.define('App.store.ComboEmpresas', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreEmpresas',   
 fields:[
	    'idfirma','razao','fantasia','cnpj','inscricaoestadual','inscricaomunicipal','cep','logradouro','complemento','cidade','uf','email'
		
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
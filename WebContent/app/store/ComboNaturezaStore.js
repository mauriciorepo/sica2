
Ext.define('App.store.ComboNaturezaStore', {
 extend: 'Ext.data.ArrayStore',
    //requiers:['Ext.data.proxy.Memory','Ext.data.reader.Array'],
 storeId: 'StoreNatureza',   
 fields : ['id', 'name'],
 data : [['f', 'Pessoa Fisica'], ['j', 'Pessoa Juridica']],
				autoLoad : true
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
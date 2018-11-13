Ext.define('App.store.Preco', {
 extend: 'Ext.data.ArrayStore',
   // requiers:['App.model.Preco'],
 alias:'widget.StorePreco',
 storeId: 'StorePreco',   
 //store:'App.model.Preco',
 
 fields:[
	     'idpreco','precobase','operador','reajuste','minutos','valor2','minutos2','valorestada','minutosestada',
 	  'flagestada','ativo' ,'horasegundainicio','horasegundafim','horatercainicio' ,'horatercafim','horaquartainicio',
 	  'horaquartafim','horaquintainicio','horaquintafim','horasextainicio','horasextafim','horasabadoinicio',
 	  'horasabadofim','horadomingoinicio','horadomingofim','horaquartainicio']
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
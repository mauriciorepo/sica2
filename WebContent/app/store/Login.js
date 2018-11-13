Ext.define('App.store.Login', {
    extend: 'Ext.data.Store',
    model:['App.model.Login'],
    requiers:['Ext.ux.DwrProxy'],
     fields:[
            'login','senha'
            ],
    proxy: {
        type: 'dwr',
        //assume that we have dwr function getTestGrid(storeParameters a,Integer b,Integer c)
        //first one goes automatically it includes start,limit,page and other store parameters
        //second and third are optional we pass them through dwrParams as an array
        dwrFunction:dwrTest.getTestGrid,
        dwrParams:[1,2],
        reader: {
            root: 'data',
            totalProperty:'totalCount'
        }

    }

});
Ext.define('App.view.gerais.Filiais', {
    extend: 'Ext.window.Window',
    alias: 'widget.filiais',
    closable:false,
    autoScroll : true,
	reziable:true,
	maximizable:true,
	bodyPadding: '5 5 0',
	maximized:true,
	//height: 260,
	//width : 550,
pollForChanges: true,
closeAction:'destroy',
   requires: ['Ext.form.Panel',
    'Ext.layout.container.Anchor'],
//requires:['App.store.ComboResponsavel'],
    fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },
          layout: 'hbox',
            items: [
                {       xtype : 'container',
						layout : 'hbox',
						defaultType : 'textfield',
						margin : '0 0 10 0',
						
                    
                    
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Razao',
                            //disabled:true,
                            itemId:'razao',
                            name: 'razao'
                            
                             
                        },{
                        	xtype:'textfield',
                            fieldLabel: 'Fantasia',
                            name: 'fantasia',
                            itemId:'fantasia'
                            
                            
                        },
                        {
                        	xtype: 'textfield',
                            fieldLabel: 'CNPJ',
                            name:'cnpj',
                            itemId:'cnpj'
                            
                           
                        },    {
                            xtype: 'textfield',
                            fieldLabel: 'Insc Estadual',
                            itemId:'inscricaoestadual',
                            name: 'inscricaoestadual'
                            
                             
                        },{
                        	xtype:'textfield',
                            fieldLabel: 'Insc Municipal',
                            name: 'inscricaomunicipal',
                            itemId:'inscricaomunicipal'
                            
                        },
                        {
                        	xtype: 'textfield',
                            fieldLabel: 'Email',
                            name:'email',
                            itemId:'email',
                            vtype:'emial'
                            
                           
                        }
                    ],
                    items:[
                    
                            {
                            xtype: 'textfield',
                            fieldLabel: 'Logradouro',
                            //disabled:true,
                            itemId:'logradouro',
                            name: 'logradouro'
                            
                             
                        },{
                        	xtype:'textfield',
                            fieldLabel: 'Numero',
                            name: 'numero',
                            itemId:'numero'
                            
                        },
                        {
                        	xtype: 'textfield',
                            fieldLabel: 'Bairro',
                            name:'bairro',
                            itemId:'bairro'
                            
                           
                        }
                    
                    ]
                }
            ],
        
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            //ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Entrar',
                    formBind:true,
                    itemId: 'entradacrianca',
                    iconCls: 'criancaverde'
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'fechatelaentrada',
                    iconCls: 'cancel'
                }
            ]
        }
    ]
});
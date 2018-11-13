Ext.define('App.view.financeiro.BaixaContasAPagar', {
    extend: 'Ext.window.Window',
    alias: 'widget.BaixaContasAPagar',
    bodyPadding: '5 5 0',
	trackResetOnLoad:true,
	closeAction:'hide',
	width : 350,
	iconCls : 'addcontasapagar',
	heigth : 670,
   requires: ['Ext.form.Panel',
    'Ext.layout.container.Anchor'],
    fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        
         // layout: 'hbox',
            items: [
                       {
						xtype : 'form', // #12
						frame : false, // #13
						bodyPadding : 15, // #14
						defaults : { // #15
							xtype : 'textfield', // #16
							anchor : '100%', // #17
							labelWidth : 60
							// #18
						},
						items : [
                    
                    
                    
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Favorecido',
                            editable:false,
                            disabled:true,
                            labelAlign : 'top',
                         anchor : '100%',
                            itemId:'razaosocial',
                            name: 'razaosocial',
                            allowBlank: false
                            
                             
                        },
                        {
                        	xtype: 'hiddenfield',
                        	//labelAlign : 'top',
                            //fieldLabel: 'CNPJ',
                            allowBlank: false,
                            name:'despesas_id_despesa'
                            //itemId:'cnpj'
                            
                           
                        },
                           {
         labelAlign : 'top',
         xtype: 'combo',
         fieldLabel: 'Conta Bancaria',
         store:  'StoreComboParcelasContasAPagarContasBancarias',
         queryMode : 'local',
         displayField: 'nome',
         valueField: 'idcontasbancarias',
        afterLabelTextTpl : App.util.Util.required,
		name:'contasbancarias_idcontasbancarias',
		blankText : 'Este campo precisa ser prenchido ',
		allowBlank : false,
		emptyText: 'Conta', 
		forceSelection : true,
		autoSelect : true,
		triggerAction: 'all',
        selectOnTab: true,
         typeAhead : true
       
       },{
                        	xtype:'datefield',
                            fieldLabel: 'Data Pagamento',
                            name: 'data_baixa',
                            afterLabelTextTpl : App.util.Util.required,
							blankText : 'Este campo precisa ser prenchido ',
							allowBlank : false,
                            format:'d/m/Y',
                        	submitFormat :'Ymd',
							dateFormat: 'd/m/Y',
							formatText:'Formato Invalido',
							altFormats:'d/m/Y',
							invalidText :'{0} não é uma data válida - precisa estar no formato {10/03/2009}',
						
                            labelAlign : 'top',
                            itemId:'data_baixa'
                            
                            
                        },{
                        	xtype:'numberfield',
                            anchor : '100%',
                            fieldLabel: 'Valor',
                            //name: 'numero',
                           labelAlign : 'top',
						   afterLabelTextTpl : App.util.Util.required,
							blankText : 'Este campo precisa ser prenchido ',
							allowBlank : false,
							 //hideTrigger: true,
							maxText : 'O valor maximo para este campo e o valor da parcela',
							mouseWheelEnabled :false,
							keyNavEnabled : false,
							//editable:false,
							focusOnToFront : true,
							 minValue: 1,
							name : 'valor',
							maxValue:90000000,		
                            itemId:'valor'
                            
                        },
                        {
                        	xtype: 'hiddenfield',
                            //anchor : '100%',
                            //labelAlign : 'top',
                            //fieldLabel: 'Bairro',
                            name:'idparcelasapagar',
                            itemId:'parcelasapagar_idparcelasapagar'
                            
                           
                        }
                    
                    ]        
                    ,
        
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
					xtype : 'tbfill' // #24
					},{
                    xtype: 'button',
                    text: 'Baixar',
                    formBind:true,
                   // disabled: true,
                    itemId: 'baixarConta',
                    iconCls: 'criancaverde'
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    //formBind:true,
                    itemId: 'fechatelabaixa',
                    iconCls: 'cancel'
                }
            ]
        }
    ]
    }]
});
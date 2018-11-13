
Ext.define('App.view.financeiro.ContasAPagar', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.contasapagar',
			itemId : 'contasapagar',
			 //enableTabScroll:true,
			autoScroll : true,
			//overflowy:'scroll' ,
			closeAction:'hide',
			 
			bodyPadding : '5 5 0',
			// maximizable :false,
			 //maximized : false,
			//frame:true,
			
			height: 600,
			width : 850,
			// pollForChanges : true,

			requires : ['Ext.form.*','Ext.form.Panel', 'Ext.form.field.Text','App.view.financeiro.DivisaodeRateioContasAPagarList',
					'App.util.Util','Ext.grid.*', 'App.util.CnpjField','App.store.ContasAPagar','App.store.ComboPlanodeContas','App.store.ComboParcelasContasAPagarContasBancarias',
					'Ext.ux.InputTextMask', 'App.util.CpfField','App.view.financeiro.ParcelasAPagarList'
			],
			
			defaults : {
				//border : false,

				labelAlign : 'top',
				xtype: 'panel',
				flex : 3,
				msgTarget:'under',
				layout : 'anchor'
			},
			layout: {
        type: 'vbox',       // Arrange child items vertically
      align: 'stretch',  
      
        padding: 1
    },
    items: [
    	
    		{                    
      // title: 'Details',
       xtype:'form',
       itemId:'formContasAPagar',
    	bodyPadding: 1,
         layout:'hbox',
         border : false,
         
          
        items: [
        	{flex:2,
        	 border : false,
        	 layout : 'anchor',
        	items: [ {
					xtype : 'combobox', //9
					fieldLabel : 'Pagar para (Favorecido)',
					name : 'fornecedores_idfornecedores',
					itemId : 'combofornecedor',
					labelAlign : 'top',
					//flex : 3,
					//ancor : '-10',
					afterLabelTextTpl : App.util.Util.required,
					blankText : 'Este campo precisa ser prenchido ',
					//allowBlank : false,

					displayField : 'fantasia',
					valueField : 'idfornecedores',
					width : 330,
					//valueNotFoundText :'Valor não corresponde',
					forceSelection : true,
					autoSelect : true,
					store : Ext.create('App.store.ComboContasAPagarFornecedor'),
					queryMode : 'local',
					allowBlank : false,
					//ancor : '-10',
					typeAhead : true,
					listConfig : {
						getInnerTpl : function() {
							return '<div data-qtip="{name}. {fantasia}"><h4>{razaosocial}</h4> - {fantasia} </div>';
						}
					}
				}, {
									xtype : 'textfield',
									fieldLabel : 'Histórico',
									labelAlign : 'top',
									//afterLabelTextTpl : App.util.Util.required,
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									focusOnToFront : true,
									id:'23',
									name : 'descricao',
									anchor : '-10',
									itemId : 'descricao'

								}, {
									xtype : 'datefield',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
                                    format:'d/m/Y',
                          			submitFormat :'Ymd',
									dateFormat: 'd/m/Y',
									formatText:'Formato Invalido',
									altFormats:'d/m/Y',
									invalidText :'{0} não é uma data válida - precisa estar no formato {10/03/2009}',
						
									fieldLabel : 'Competencia',
									name : 'competencia',
									anchor : '-10',
									itemId : 'competencia'

								},{
									xtype : 'numberfield',
									fieldLabel : 'Parcelas',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									focusOnToFront : true,
									editable:false,
									name : 'parcelas',
									anchor : '-10',
									itemId : 'parcelas',
									hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false

								}]},{
			flex:2,
			border : false,
			layout : 'anchor',
			items: [ 
				{
					xtype : 'combobox', //9
					fieldLabel : 'Tipo Documento',
					name : 'tipodocumento',
					itemId : 'tipodocumento',
					labelAlign : 'top',
					//flex : 2,
					//ancor : '-10',
					afterLabelTextTpl : App.util.Util.required,
					blankText : 'Este campo precisa ser prenchido ',
					allowBlank : false,

					displayField : 'nome',
					valueField : 'tipo',
					//autoLoad:true,
					//valueNotFoundText :'Valor não corresponde',
					forceSelection : true,
					autoSelect : true,
					store : Ext.create('Ext.data.Store', {
								fields : ['tipo', 'nome'],
								data : [{
											"nome" : "Boleto",
											"tipo" : "Boleto"
										}, {
											"nome" : "Fatura",
											"tipo" : "Fatura"
										}, {
											"nome" : "Duplicata",
											"tipo" : "Duplicata"
										}, {
											"nome" : "Carnes",
											"tipo" : "Carnes"
										},{
											"nome" : "Nota Promissoria",
											"tipo" : "Nota Promissoria"
										}, {
											"nome" : "Fat/Dup",
											"tipo" : "Fat/Dup"
										}]
							}),
					//width : 290,
					anchor : '-10',
					queryMode : 'local',
					allowBlank : false,
					typeAhead : true
				}, {
									xtype : 'datefield',
									labelAlign : 'top',
									fieldLabel : 'Data Emissão',
									afterLabelTextTpl : App.util.Util.required,
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
                                    //width:'100', 
									hideTrigger:false,
									format:'d/m/Y',
									submitFormat :'Ymd',
									dateFormat: 'd/m/Y',
									formatText:'Formato Invalido',
									altFormats:'d/m/Y',
									invalidText :'{0} não é uma data válida - precisa estar no formato {10/03/2009}',
									
									anchor : '-10',
									name : 'data_emissao'

								}, {
									xtype : 'textfield',
									labelAlign : 'top',
									blankText : 'Este campo precisa ser prenchido ',
									allowBlank : false,
									//vtype: 'alphanum',
									afterLabelTextTpl : App.util.Util.required,
									fieldLabel : 'Numero',
									anchor : '-10',
									name : 'num_nota',
									itemId:'num_nota'

								},{
									xtype : 'numberfield',
									fieldLabel : 'Valor total',
									labelAlign : 'top',
									afterLabelTextTpl : App.util.Util.required,
									//blankText : 'Este campo precisa ser prenchido ',
									//allowBlank : false,
									editable:false,
									focusOnToFront : true,
									 minValue: 0,
									name : 'valor',
									anchor : '-10',
									itemId : 'valor',
									 hideTrigger: true,
                                     keyNavEnabled: false,
                                     mouseWheelEnabled: false

								}]
    
        	
        }], // An array of form fields
        flex: 2              // Use 2/3 of Container's height (hint to Box layout)
    },{title:'Divisão / Rateio',
    //autoScroll : true,
       xtype:'DivisaodeRateioContasAPagarList',
       flex:2// A splitter between the two child items
    }   
    , { title:'Parcelas',
    //autoScroll : true,// Results grid specified as a config object with an xtype of 'grid'
        xtype: 'ParcelasAPagarList',
       
        flex: 2                                      // Use 1/3 of Container's height (hint to Box layout)
    }],
    initComponent : function() {
			
				this.dockedItems = [{
							xtype : 'toolbar',
							dock : 'bottom',
							id : 'buttonContasAPagar',
							//ui: 'footer',
							items : [ {
										xtype : 'button',
										text : 'Lançar Pagamento',
										itemId : 'lancacontasapagar',
										iconCls : 'addcontatofornecedor'
									},'->',{
										xtype : 'button',
										text : 'Ok',
										formBind:true,
										itemId : 'addcontasapagar',
										iconCls : 'liberar'
									},{
										xtype : 'button',
										text : 'Cancel',
										itemId : 'cancelcontasapagar',
										iconCls : 'cancel'
									}]
						}];

				this.callParent(arguments);
			}
		});
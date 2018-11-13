Ext.define('App.view.usuario.Profile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.profile',
    itemId:'profile',

    //height: 260,
    //width: 550,
     requires: ['Ext.form.Panel','App.util.Util','Ext.form.field.Text','App.store.ComboEmpresas','App.store.Filiais'],
    //requires: ['Packt.util.Util'],

    layout: {
        align: 'stretch',
        type: 'fit'
    },
    title: 'User',

    items: [
        {
            xtype: 'form',
            bodyPadding: 5,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 2,
                    title: 'User Information',
                    defaults: {
                        //afterLabelTextTpl: Packt.util.Util.required,
                        anchor: '80%',
                        xtype: 'textfield',
                        allowBlank: false,
                        labelWidth: 122
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'id'
                        },
                        {
                            fieldLabel: 'Nome Usuario',
                            name: 'userName',
                            //labelWidth:'120',
                            xtype:'textfield'
                            
                        },
                        {
                            fieldLabel: 'Login',
                            maxLength: 100,
                            vtype:'password',
                            name: 'name'
                        },
                        {
                            fieldLabel: 'Email',
                            maxLength: 100,
                            vtype:'email',
                            name: 'email'
                        },{
									xtype : 'combobox', //9
									fieldLabel : 'Empresas',
									name:'firmausuario',
									itemId:'firmausuario',
									//id:'firma',
									flex : 2,
									displayField : 'razao',
									valueField:'idfirma',
									blankText :'Este campo precisa ser prenchido ',
									//valueNotFoundText :'Valor não corresponde',
									forceSelection:true,
									autoload:true,
									autoSelect :true,
									store : Ext.create('App.store.ComboEmpresas'),
									queryMode : 'local',
								allowBlank : false ,
									typeAhead : true
								},{
									xtype : 'combobox', //9
									fieldLabel : 'Filial',
									name:'combofilial',
									itemId:'combofilial',
									//id:'firma',
									flex : 2,
									displayField : 'razao',
									valueField:'idfiliais',
									blankText :'Este campo precisa ser prenchido ',
									//valueNotFoundText :'Valor não corresponde',
									forceSelection:true,
									autoload:true,
									autoSelect :true,
									store : Ext.create('App.store.ComboFiliais'),
									queryMode : 'local',
								allowBlank : false ,
									typeAhead : true
								},
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Picture',
                            name: 'picture',
                            allowBlank: true,
                            afterLabelTextTpl: ''
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Picture',
                    //width: 170,
                    items: [
                        {
                            xtype: 'image',
                            heigh:150,
                            width: 150,
                            src: ''
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    itemId: 'save',
                    iconCls: 'save'
                }
            ]
        }
    ]
});
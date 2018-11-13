Ext.define('App.view.MyForm', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.myform',
requires: ['Ext.form.Panel','Ext.form.field.Text'],
    //height: 250,
    width: 400,
   // bodyPadding: 10,
    title: 'My Form',
    layout: { type: 'fit'  },
   //autoShow:true,
   //renderTo:
    initComponent: function() {
        var me = this;

        Ext.applyif(me, {
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Label'
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    fieldLabel: 'Label'
                },
                {
                    xtype: 'radiofield',
                    anchor: '100%',
                    fieldLabel: 'Label',
                    boxLabel: 'Box Label'
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Label'
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    height: 150,
                    fieldLabel: 'Label'
                }
            ]
        });

        me.callParent(arguments);
    }

});
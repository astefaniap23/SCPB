//public\app\view\componentes\radiogroup\RgAno.js

var name = 'ano';  //Variable Global para el Nombre del RadioGrupo

Ext.define('SisCPB.view.componentes.radiogroup.RgAno', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.rgano',
    name: 'ano', //*--------------------------------> cambiar nombre
    fieldLabel: 'A&ntilde;o',
    itemId: 'anio',
    allowBlank: false,
    validateBlank: true,
    blankText: 'Este campo es obligatorio',
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'radiofield',
                    boxLabel: '360',
                    name: 'ano',
                    inputValue: '360'
                },
                {
                    xtype: 'radiofield',
                    boxLabel: '365',
                    name: 'ano',
                    inputValue: '365'
                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'Actual',
                    name: 'ano',
                    inputValue: 'Actual'
                }

            ],
            listeners: {
                change: function() {
                    console.log(this.getValue().ano); //nombre de los xtype
                }
            }
        });

        me.callParent(arguments);
    }
});  /*
 
 xtype: 'radiogroup',
 fieldLabel: 'A&ntilde;o',
 labelWidth: 130,
 name: 'ano',
 items: [
 {
 xtype: 'radiofield',
 boxLabel: '360'
 },
 {
 xtype: 'radiofield',
 boxLabel: '365'
 },
 {
 xtype: 'radiofield',
 boxLabel: 'Actual'
 }
 ]
 
 */
//public\app\view\componentes\radiogroup\RgMes.js

var name = 'mes';  //Variable Global para el Nombre del RadioGrupo

Ext.define('SisCPB.view.componentes.radiogroup.RgMes', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.rgmes',
    name: 'mes',
    itemId:'mes',
    allowBlank: false,
    validateBlank: true,
    blankText: 'Este campo es obligatorio',
    initComponent: function() {
        var me = this;


        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'radiofield',
                    boxLabel: '30',
                    name: 'mes',
                    inputValue: '30'


                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'Actual',
                    name: 'mes',
                    inputValue: 'Actual'

                }

            ],
            listeners: {
                change: function() {
                    console.log(this.getValue().mes); //nombre de los xtype
                }

            }


        }
        );

        me.callParent(arguments);
    }




});  /*
 
 {
 xtype: 'radiogroup',
 fieldLabel: 'Mes',
 labelWidth: 130,
 name: 'mes',
 items: [
 {
 xtype: 'radiofield',
 boxLabel: '30',
 inputValue: '30'
 },
 {
 xtype: 'radiofield',
 boxLabel: 'Actual',
 inputValue: 'Actual'
 }
 ]
 },
 
 
 */
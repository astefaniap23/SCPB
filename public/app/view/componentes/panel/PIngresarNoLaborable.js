/* 
 * panel/PIngresarNoLaborablejs
 */

Ext.define('SisCPB.view.componentes.panel.PIngresarNoLaborable', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pingresarnolaborable',
    name: 'pingresarnolaborable',
    requires:['SisCPB.view.componentes.gridpanel.GBandejaNoLaborables'],
    itemId:'pingresarnolaborable',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'D&iacute;as no laborales',
    tabConfig: {
        xtype: 'tab',
        icon: 'iconos/16x16/calendar.png'
    },
    items: [
        {
            itemId: 'ingresarnolaborable',
            xtype: 'form',
            height: 150,
            bodyPadding: 10,
            title: 'Agregar d&iacute;a no laborable',
            dockedItems: [
                {
                    itemId:'guardarcancelarINL',
                    xtype: 'tbguardarcancelar',
                    dock: 'bottom'
                }
            ],
            items: [
                {
                    xtype: 'fieldset',
                    height: 55,
                    layout: {
                        type: 'absolute'
                    },
                    title: 'Datos de la fecha',
                    items: [
                        {
                            xtype: 'datefield',
                            format:('Y/m/d'),
                            name:'fecha',
                            fieldLabel: 'Seleccione d&iacute;a',
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio'
                        },
                        {
                            xtype: 'textfield',
                            name:'nombre',
                            x: 310,
                            y: 0,
                            width: 440,
                            fieldLabel: 'Descripci&oacute;n',
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio'
                        }
                    ]
                }
            ]
        },
       {
           xtype: 'gpbandejanolaborables',
            itemId:'gpbandejanolaborables'
        }
    ]
});

/* 
 * panel/PIngresarBanco.js
 */

Ext.define('SisCPB.view.componentes.panel.PIngresarBanco', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pingresarbanco',
    name: 'pingresarbanco',
    requires:['SisCPB.view.componentes.gridpanel.GPBandejaBancos'],
    itemId:'pingresarbanco',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Bancos',
    tabConfig: {
        xtype: 'tab',
        icon: 'iconos/16x16/building.png'
    },
    
   
    items: [
        {   
           itemId: 'ingresarbanco',
            xtype: 'form',
            height: 150,
            bodyPadding: 10,
            title: 'Agregar instituci&oacute;n financiera',
            dockedItems: [
                {
                    itemId:'guardarcancelarIB',
                    xtype: 'tbguardarcancelar',
                    dock: 'bottom'
                }
            ],
            items: [
                {   
                  //  itemId:'insertarBanco',
                    xtype: 'fieldset',
                    height: 55,
                    title: 'Datos b&aacute;sicos de la instituci&oacute;n',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Nombre',
                            name: 'nombre', 
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio'
                        }
                    ]
                }
            ]
        },
        {   itemId:'gridBancos',
            xtype: 'gpbandejabancos',
          
        },
    ]

});

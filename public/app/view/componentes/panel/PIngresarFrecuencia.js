/* 
 * panel/PIngresarFrecuenciajs
 */

Ext.define('SisCPB.view.componentes.panel.PIngresarFrecuencia', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pingresarfrecuencia',
    name: 'pingresarfrecuencia',
    itemId: 'pingresarfrecuencia',
    requires: ['SisCPB.view.componentes.gridpanel.GBandejaFrecuencias'],
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Frecuencia',
    tabConfig: {
        xtype: 'tab',
        icon: 'iconos/16x16/arrow_refresh.png'
    },
    items: [
        {
            itemId: 'ingresarfrecuencia',
            xtype: 'form',
            height: 180,
            bodyPadding: 10,
            title: 'Agregar frecuencia',
            dockedItems: [
                {
                    itemId: 'guardarcancelarIF',
                    xtype: 'tbguardarcancelar',
                    dock: 'bottom'
                }
            ],
            items: [
                {
                    xtype: 'fieldset',
                    height: 89,
                    layout: {
                        type: 'absolute'
                    },
                    title: 'Datos de la frecuencia',
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'categoria',
                            width: 360,
                            fieldLabel: 'Categor&iacute;a',
                            store: 'SCbCategoriaFrecuencia_scpb',
                            queryMode: 'local',
                            triggerAction: 'all',
                            displayField: 'nombre',
                            valueField: 'id',
                            forceSelection: true,
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio',
                            listeners: {
                                select: function() {
                                    //categoria.getValue();// valuedField
                                    // cbbanco.getRawValue(),// displayField
                                    console.log(this.getValue()); //nombre de los xtype
                                }
                            }
                        },
                        {
                            xtype: 'numberfield',
                            name: 'periodicidad',
                            x: 370,
                            y: 0,
                            width: 380,
                            fieldLabel: 'Periodicidad',
                            emptyText: 'Ej. 12 (Si es anual)',
                            minValue: 0, ///valor minimo
                            allowDecimals: true,
                            decimalSeparator: false,
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio',
                            hideTrigger: true //Quiter flechas del campo

                        },
                        {
                            xtype: 'textfield',
                            name: 'nombre',
                            x: 0,
                            y: 30,
                            width: 750,
                            fieldLabel: 'Frecuencia',
                            emptyText: 'Ej. Anual',
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gbandejafrecuencias',
            itemId: 'gridfrecuencias'
        }
    ]
});

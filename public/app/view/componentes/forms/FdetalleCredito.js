/*
 * File: app/view/componentes/forms/FdetalleCredito.js
 */

Ext.define('SisCPB.view.componentes.forms.FdetalleCredito', {
    extend: 'Ext.form.Panel',
    alias: 'widget.fdetallecredito',
    // id: 'fdetallecredito',
    bodyPadding: 10,
    requires: [
        'SisCPB.view.componentes.combobox.CbFrecuenciaInt',
        'SisCPB.view.componentes.combobox.CbFrecuenciaCap',
        'SisCPB.view.componentes.combobox.CbBanco',
        'SisCPB.view.componentes.radiogroup.RgMes',
        'SisCPB.view.componentes.radiogroup.RgAno',
        'SisCPB.view.componentes.combobox.CbInteresAde',
        'SisCPB.view.componentes.combobox.CbCapitalAde',
        'SisCPB.view.componentes.combobox.CbCuotaFija',
        'SisCPB.view.componentes.datefield.DaFechaIni',
        'SisCPB.view.componentes.datefield.DaFechaVto'],
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    itemId: 'fdetallecredito',
                    xtype: 'fieldset',
                    title: 'Detalle del cr&eacute;dito',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'nombre',
                            fieldLabel: 'Nombre',
                            labelWidth: 130,
                            name: 'nombre',
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio'
                        },
                        {
                            xtype: 'cbbanco',
                            itemId: 'cbbanco',
                            anchor: '100%',
                            fieldLabel: 'Banco',
                            labelWidth: 130



                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Monto',
                            itemId: 'monto',
                            labelWidth: 130,
                            name: 'monto',
                            ///  minValue: 0, ///valor minimo
                            allowBlank: false,
                            maskRe: /[0-9]/,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio',
                            hideTrigger: true, //Quiter flechas del campo
                            listeners: {
                                blur: function(field) {
                                    field.setValue(Ext.util.Format.number(field.getValue().replace(/,/g, '')));
                                    Ext.util.Format.thousandSeparator = ',';
                                    Ext.util.Format.decimalSeparator = '.';
                                    field.setValue(Ext.util.Format.number(field.getValue(), '0,000.00'));

                                }
                            }

                        },
                        {
                            xtype: 'dateFechaIni',
                            anchor: '100%',
                            fieldLabel: 'Fecha inicio',
                            labelWidth: 130

                        },
                        {
                            xtype: 'dateFechaVto',
                            anchor: '100%',
                            fieldLabel: 'Fecha vcto',
                            labelWidth: 130
                        },
                        {
                            xtype: 'rgmes',
                            fieldLabel: 'Mes',
                            labelWidth: 130
                        },
                        {
                            xtype: 'rgano',
                            fieldLabel: 'A&ntilde;o',
                            labelWidth: 130
                        },
                        {
                            xtype: 'cbfrecuenciaint',
                            anchor: '100%',
                            fieldLabel: 'Frecuencia de interes',
                        },
                        {
                            xtype: 'cbfrecuenciacap',
                            anchor: '100%',
                            fieldLabel: 'Frecuencia de capital'
                        },
                        {
                            xtype: 'ckbginteresade',
                            fieldLabel: 'Interes adelantado',
                            labelWidth: 130

                        },
                        {
                            xtype: 'ckbgcapitalade',
                            fieldLabel: 'Capital adelantado',
                            labelWidth: 130

                        },
                        {
                            xtype: 'ckbgcuotafija',
                            fieldLabel: 'Cuota fija',
                            labelWidth: 130,
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Porcentaje de Interes',
                            labelWidth: 130,
                            format: '100%',
                            itemId: 'porcentaje_int',
                            name: 'porcentaje_int',
                            minValue: 0,
                            maxValue: 100,
                            decimalSeparator: false, //no permite el 10.5
                            hideTrigger: true, //Quiter flechas del campo
                            emptyText: 'Ej. 50',
                            allowBlank: false,
                            validateBlank: true,
                            blankText: 'Este campo es obligatorio',
                        },
                                /* {
                                 xtype: 'numberfield',
                                 fieldLabel: 'Interes',
                                 
                                 sortable: true,
                                 labelWidth: 130,
                                 renderer: function(val) {
                                 if (val > 0) {
                                 return '<span style="color:green;">' + val + '</span>';
                                 } else if (val < 0) {
                                 return '<span style="color:red;">' + val + '</span>';
                                 }
                                 return val + "%";
                                 },
                                 dataIndex: 'numberChange' // place your dataindex binding here
                                 }*/

                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
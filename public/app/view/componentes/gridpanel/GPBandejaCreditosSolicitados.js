/* 
 * /GPBandejaCreditosSolicitados
 */
Ext.define('SisCPB.view.componentes.gridpanel.GPBandejaCreditosSolicitados', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gpbandejacreditossolicitados',
    name: 'gpbandejacreditossolicitados',
    //  requires: ['SisCPB.store.SBandejaBancos_scpb'],
    title: 'Fechas no laborables registradas',
    flex: 1,
    store: 'SBandejaCreditosSolicitados_scpb',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            listeners: {
                //  'render': me.cargarstatuscredito,
                scope: me
            },
            itemId: 'gpbandejacreditossolicitados',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'numero',
                    text: 'N&uacute;mero',
                    flex: 1,
                    name: 'numero'
                },
                {
                    xtype: 'datecolumn',
                    minWidth: 100,
                    dataIndex: 'fecha_cobro',
                    text: 'Fecha de cobro',
                    format: 'Y/m/d',
                    flex: 1,
                    name: 'fecha_cobro',
                    editor: 'datefield',
                },
                {
                    xtype: 'datecolumn',
                    minWidth: 120,
                    dataIndex: 'fecha_pago',
                    text: 'Fecha de pago',
                    flex: 1,
                    format: 'Y/m/d',
                    name: 'fecha_pago'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 100,
                    dataIndex: 'interes',
                    text: '% de inter&eacute;s',
                    flex: 1,
                    name: 'interes',
                    editor: 'numberfield',
                    renderer: function(value) {
                        return value + '%';
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'cuota_capital',
                    text: 'Cuota capital',
                    flex: 1,
                    name: 'cuota_capital'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'total_interes',
                    text: 'Total interes',
                    flex: 1,
                    name: 'total_interes'
                },
                /* {
                 xtype: 'numbercolumn',
                 minWidth: 140,
                 dataIndex: 'bool',
                 text: 'Otros cargos',
                 flex: 1,
                 name:'otros_cargos'
                 },*/
                {
                    xtype: 'numbercolumn',
                    minWidth: 140,
                    dataIndex: 'total_cuota',
                    text: 'Total cuota',
                    name: 'total_cuota'


                },
                /*   {
                 xtype: 'numbercolumn',
                 minWidth: 140,
                 dataIndex: 'total_mensual',
                 text: 'Total mensual',
                 name: 'total_mensual'
                 },*/
                {
                    xtype: 'numbercolumn',
                    minWidth: 140,
                    dataIndex: 'restante',
                    text: 'Restante',
                    name: 'restante'
                }
            
            ],
            dockedItems: [
                {
                    xtype: 'tbfiltroxbanco',
                    dock: 'top'
                }
            ],
            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    listeners: {
                        edit: function(editor, event, eOpts, dv, record, item, index, e) {
                            event.store.load({
                                params: {
                                    objetoseleciondo: event.record.data.clave,
                                    fecha_cobro: event.record.data.fechrecorda_cobro,
                                    interes: event.record.data.interes,
                                    numero:event.record.data.numero,
                                    tipoTransaccion: 'editar'
                                }
                            })

                        }
                    }
                })
            ]
        });
        me.callParent(arguments);

    },
});
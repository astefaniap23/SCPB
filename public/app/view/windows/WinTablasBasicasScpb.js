/*
 * File: app/view/windows/WinTablasBasicasScpb.js
 *
 */

Ext.define('SisCPB.view.windows.WinTablasBasicasScpb', {
    extend: 'Ext.window.Window',
    alias: 'widget.wintablasbasicasscpb',
    requires: [
        'SisCPB.view.componentes.toolbars.TbarGuardarCancelar',
        'SisCPB.view.componentes.toolbars.TbarEliminar',
        'SisCPB.view.componentes.panel.PIngresarBanco',
        'SisCPB.view.componentes.panel.PIngresarNoLaborable',
        'SisCPB.view.componentes.panel.PIngresarFrecuencia',
        'SisCPB.view.componentes.gridpanel.GPBandejaBancos',
        'SisCPB.view.componentes.gridpanel.GBandejaNoLaborables',
        'SisCPB.view.componentes.gridpanel.GBandejaFrecuencias'
    ],
    store: 'SBandejaBancos_scpb',
    height: 588,
    width: 804,
    layout: {
        type: 'fit'
    },
    icon: 'iconos/16x16/cog.png',
    title: 'Configuraci&oacute;n',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            itemId: 'wintablasbasicasscpb',
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'pingresarbanco'

                        },
                        {
                            xtype: 'pingresarnolaborable'

                        },
                        {
                            xtype: 'pingresarfrecuencia'

                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
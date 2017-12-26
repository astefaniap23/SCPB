/*
 * File: app/view/IngresarCredito.js
 *
 */

Ext.define('SisCPB.view.IngresarCredito', {
    extend: 'Ext.window.Window',
    alias: 'widget.ingresarcredito',
    stores: [
        'SFrecuenciaInt_scpb',
        'SFrecuenciaCap_scpb',
        'SBanco_scpb'

    ],
    requires: [
        'SisCPB.view.componentes.forms.FdetalleCredito',
        'SisCPB.view.componentes.toolbars.TbarGuardarCancelar',
        ,
    ],
    height: 512,
    width: 450,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Ingresar Cr&eacute;dito',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            itemId: 'ingresarCredito',
            items: [
                {
                    xtype: 'fdetallecredito',
                    itemId: 'fdetallecredito'

                }
            ],
            dockedItems: [
                {itemId: 'guardarcancelarIC',
                    xtype: 'tbguardarcancelar',
                    dock: 'bottom'

                }
            ]
        });
        stb = Ext.getStore('SBanco_scpb');
        stb.load();
        stfi = Ext.getStore('SFrecuenciaInt_scpb');
        stfi.load();
        stfc = Ext.getStore('SFrecuenciaCap_scpb');
        stfc.load();

        me.callParent(arguments);
    }

});
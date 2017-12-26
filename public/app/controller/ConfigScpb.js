/*
 * File: app/controller/ConfigScpb.js
 */

Ext.define('SisCPB.controller.ConfigScpb', {
    extend: 'Ext.app.Controller',
    refs: [
        {
            autoCreate: true,
            ref: 'WinConfiguracion',
            selector: 'wintablasbasicasscpb',
            xtype: 'wintablasbasicasscpb'
        }
    ],
    init: function(application) {
        var me = this;

        me.control({
            //levanta la ventana para configurar las tablas básicas
            'vistascpb': {
                'configurar-scpb': me.mostrarWinConfiguracion,
                scope: me
            }
        });
    },
    mostrarWinConfiguracion: function() {
        var me = this;
        this.getWinConfiguracion().show();
        sbandejabancos = Ext.getStore('SBandejaBancos_scpb');
        console.log(sbandejabancos)
        sbandejabancos.load({
            params: {
                tipoTransaccion: 'mostrar'
            },
        });
        sbandejanolaborables = Ext.getStore('SNoLaborables_scpb');
        console.log(sbandejanolaborables);
        sbandejanolaborables.load({
            params: {
                tipoTransaccion: 'mostrar'
            },
        });
        sbandejafrecuencias = Ext.getStore('SFrecuencias_scpb');
        console.log(sbandejafrecuencias);
        sbandejafrecuencias.load({
            params: {
                tipoTransaccion: 'mostrar'
            },
        });
      
    }

});

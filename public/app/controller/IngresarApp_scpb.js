/*
 * File: app/controller/IngresarApp_scpb.js
 */

Ext.define('SisCPB.controller.IngresarApp_scpb', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ingresarapp_scpb',
    refs: [
        {
            autoCreate: true,
            ref: 'ingresarApp',
            selector: 'vistascpb',
            xtype: 'vistascpb'
        }
    ],
    init: function(application) {
        var me = this;

        me.control({
            //levanta el contenedor de la APP
            'demesuclave': {
                'ingresar-app': me.mostrarIngresarApp,
            }

        });

    },
    mostrarIngresarApp: function() {
        this.getIngresarApp().show();
    }

});
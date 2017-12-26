/*
 * File: app/controller/IngresarForm_scpb.js
 *
 */

Ext.define('SisCPB.controller.IngresarForm_scpb', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ingresarform_scpb',
    refs: [
        {
            autoCreate: true,
            ref: 'ingresarForm',
            selector: 'vistascpb',
            xtype: 'vistascpb'
        }
    ],
    init: function(application) {
        var me = this;

        me.control({
            //levanta el contenedor de la APP
            'demesuclave': {
                'ingresar-form': me.mostrarIngresarForm
            }
        });
    },
    mostrarIngresarForm: function() {
        this.getIngresarForm().show();
    }

});
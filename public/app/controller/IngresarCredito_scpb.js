/*
 * File: app/controller/IngresarCredito_scpb.js
 *
 */

Ext.define('SisCPB.controller.IngresarCredito_scpb', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ingresarcredito_scpb',
    itemId:'cIngresarCredito',
    // stores: ['SFrecuenciaInt_scpb', 'SFrecuenciaCap_scpb'],
    //models: ['MFrecuenciaInt_scpb', 'MFrecuenciaCap_scpb'],
    /*views: ['componentes.combobox.CbFrecuenciaInt',
     'componentes.combobox.CbFrecuenciaCap'],*/
    refs: [
        {
            autoCreate: true,
            ref: 'ingresarCredito',
            selector: 'ingresarcredito',
            xtype: 'ingresarcredito'
        }
    ],
    init: function() {
        var me = this;

        me.control({
            //levanta la ventana para ingresar creditos
            'vistascpb': {
                'ingresar-credito': me.mostrarIngresarCredito

            },
            

        });
    },
    mostrarIngresarCredito: function() {
        //var me = this;
        /// console.log(me.up('#ingresarCredito').down('#fdetallecredito').down('#guardar')),
        this.getIngresarCredito().show();
    }

});
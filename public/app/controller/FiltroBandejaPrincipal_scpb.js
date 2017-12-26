/* 
 * Controller/FiltroBandejaPrincipal_scpb.js
 */

Ext.define('SisCPB.controller.FiltroBandejaPrincipal_scpb', {
    extend: 'Ext.app.Controller',
    alias: 'controller.filtrobandejaprincipal_scpb',
    stores: ['SBandejaPrincipal_scpb'],
    init: function() {
        var me = this;

        me.control({
            //levanta la ventana para ingresar creditos
            'vistascpb': {
                'accion-filtrar': me.aplicarFiltroBandejaPrincipal
            }
        });
    },
    aplicarFiltroBandejaPrincipal: function(toolbar, params) {
        var me = this,
                fmt = 'd/m/Y',
                //tbbuscarbandejaprincipal-1026
                //    store=me.getSBandejaPrincipal_scpbStore();
                store = Ext.getStore('SBandejaBancos_scpb');


        /*    comboBanco = toolbar.down('#banco_filtrar');
         fechaInicio=toolbar.down('#fechaInicio').getValue();
         fechaVto=toolbar.down('#fechaVto').getValue();
         */
        store.load({
            params: {
                banco: params.banco,
                fechaInicio: Ext.Date.format(params.fechaInicio, fmt),
                fechaVto: Ext.Date.format(params.fechaVto, fmt)


            }
        });
    }

});


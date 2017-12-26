/*
 * File: app/controller/StatusCreditosSolicitados.js
 */

Ext.define('SisCPB.controller.StatusCreditosSolicitados', {
    extend: 'Ext.app.Controller',
    alias: 'controller.StatusCreditosSolicitados',
    stores: ['SStatusCredito'],
    models: ['MStatusCreditoSolicitado_scpb'],
    refs: [
        {
            autoCreate: true,
            ref: 'CStatusCreditosSolicitados',
            selector: 'cstatuscreditossolicitados',
            xtype: 'cstatuscreditossolicitados'
        }
    ],
    init: function(application) {
        var me = this;

        me.control({
            //levanta el contenedor de la APP
            'gpbandejaprincipal': {
                'beforeitemdblclick': me.cargarstatuscredito
            }

        });

    },
    cargarstatuscredito: function(grid, record) {
        console.log('Double clicked on ' + record.get('id'));
        var id = record.get('id');
        var container = this.getCStatusCreditosSolicitados();

        this.getSStatusCreditoStore().load({
            params: {
                dato: id},
            callback: function(record, operation, success) {
                var monto_original = record[0].get('monto_original');
                var saldo_actual = record[0].get('saldo_actual');
                var liquidado = record[0].get('liquidado');
                var int_actual = record[0].get('int_actual');
                var fecha_pago = record[0].get('fecha_pago');
                var fecha_vto = record[0].get('fecha_vto');
                container.down('#monto_original').setValue(monto_original);
                container.down('#saldo_actual').setValue(saldo_actual);
                container.down('#fecha_pago').setValue(fecha_pago);
                container.down('#int_actual').setValue(int_actual);
                container.down('#liquidado').setValue(liquidado);
                container.down('#fecha_vto').setValue(fecha_vto);

            }

        });





    }

});
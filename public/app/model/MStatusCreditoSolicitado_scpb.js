/* 
 * MStatusCreditoSolicitado_scpb.
 */

Ext.define('SisCPB.model.MStatusCreditoSolicitado_scpb', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'monto_original', type: 'auto'},
        {name: 'saldo_actual', type: 'auto'},
        {name: 'fecha_pago', type: 'date'},
        {name: 'int_actual', type: 'auto'},
        {name: 'liquidado', type: 'auto'},
        {name: 'fecha_vto', type: 'date'}
       
      
    ]



});
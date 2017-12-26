/* 
 * MBandejaCreditosSolicitados_scpb.
 */

Ext.define('SisCPB.model.MBandejaCreditosSolicitados_scpb', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'numero', type: 'integer'},
        {name: 'fecha_cobro', type: 'date'},
        {name: 'fecha_pago', type: 'date'},
        {name: 'interes', type: 'auto'},
        {name: 'cuota_capital', type: 'auto'},
        {name: 'restante', type: 'auto'},
        {name: 'total_interes', type: 'auto'},
        {name: 'total_cuota', type: 'auto'},
        // {name: 'total_mensual', type: 'auto'},
        {name: 'clave',  type: 'integer'}
        // {name: 'monto', type: 'auto'}

    ]





});

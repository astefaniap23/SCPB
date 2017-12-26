/* 
 * /model/MBandejaPrincipal_scpb.js
 */
Ext.define('SisCPB.model.MBandejaPrincipal_scpb', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'nombre', type: 'string'},
        {name: 'monto', type: 'auto'},
        {name:'banco'},
        {name: 'fechaInicio', type: 'date'},
        {name: 'fechaVto', type: 'date'},
        {name: 'mes', type: 'string'},
        {name: 'ano', type: 'string'},
        {name: 'frec_int'},
        {name: 'frec_cap'},
        {name: 'int_adelantado'},
        {name: 'cap_adelantado'},
        {name: 'cuota_fija'},
        {name: 'porcentaje_int', type: 'integer'}
    ],
    



});
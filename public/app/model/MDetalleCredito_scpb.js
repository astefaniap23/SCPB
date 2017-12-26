/*
 * Model/MDetalleCredito_scpb.js 
 */

Ext.define ('SisCPB.model.MDetalleCredito_scpb',{
    extend: 'Ext.data.Model',
    fields: ['nombre',
            'banco',
            'monto',
            'fecha_ini',
            'fecha_vto',
            'mes',
            'ano',
            'frec_int',
            'frec_cap',
            'int_adelantado',
            'cap_adelantado',
            'cuota_fija',
            'porcentaje_int'
        ]
    });



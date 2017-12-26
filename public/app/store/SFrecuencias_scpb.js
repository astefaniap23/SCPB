/* 
 * SFrecuencias_scpb.js
 */
Ext.define('SisCPB.store.SFrecuencias_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sfrecuencias',
    requires: ['SisCPB.model.MBandejaFrecuencias_scpb'],
    model: 'SisCPB.model.MBandejaFrecuencias_scpb',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: './frequency/index',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});


/* 
 * /store/SBandejaPrincipal_scpb.js
 */
Ext.define('SisCPB.store.SBandejaPrincipal_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sbandejaprincipal',
    requires: ['SisCPB.model.MBandejaPrincipal_scpb'],
    model: 'SisCPB.model.MBandejaPrincipal_scpb',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: './principalbox/index',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});
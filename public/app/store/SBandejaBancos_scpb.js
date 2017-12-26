/* 
 * store/SBandejaBancos_scpb.js
 */
Ext.define('SisCPB.store.SBandejaBancos_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sbandejabancos',
    requires: ['SisCPB.model.MBanco_scpb'],
    model: 'SisCPB.model.MBanco_scpb',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: './banks/index',

        reader: {
            type: 'json',
            root: 'data'
        }
    }

});


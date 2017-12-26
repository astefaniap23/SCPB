/* 
 *store/SNoLaborables_scpb.js
 */
Ext.define('SisCPB.store.SNoLaborables_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.snolaborables',
    requires: ['SisCPB.model.MBandejaNoLaborables_scpb'],
    model: 'SisCPB.model.MBandejaNoLaborables_scpb',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: './nonworking/index',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});



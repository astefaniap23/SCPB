/*
 * File: app/store/StoreCredito_scpb.js
 *
 */

Ext.define('SisCPB.store.StoreCredito_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.storecredito_scpb',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore',
            proxy: {
                type: 'jsonp'
            }
        }, cfg)]);
    }
});
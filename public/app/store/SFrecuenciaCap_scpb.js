/* 
 * /store/SFrecuenciaCap_scpb.js
 */
Ext.define('SisCPB.store.SFrecuenciaCap_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sfrecuenciacap',
    requires: ['SisCPB.model.MFrecuenciaCap_scpb'],
    model:'SisCPB.model.MFrecuenciaCap_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
        url: './form/frecuencia_cap',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
   
});
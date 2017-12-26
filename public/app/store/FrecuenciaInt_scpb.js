/* 
 * /store/FrecuenciaInt_scpb.js
 */
Ext.define('SisCPB.store.FrecuenciaInt_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.frecuenciaint',
    requires: ['SisCPB.model.FrecuenciaInt_scpb'],
    model:'SisCPB.model.FrecuenciaInt_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
        url: './form/frecu',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
   
});
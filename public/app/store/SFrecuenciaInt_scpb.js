/* 
 * /store/SFrecuenciaInt_scpb.js
 */
Ext.define('SisCPB.store.SFrecuenciaInt_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sfrecuenciaint',
    requires: ['SisCPB.model.MFrecuenciaInt_scpb'],
    model:'SisCPB.model.MFrecuenciaInt_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
        url: './Form/frecuencia_int',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
   
});
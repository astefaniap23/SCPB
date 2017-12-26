/* 
 * /store/SBancoFiltro_scpb.js
 */
Ext.define('SisCPB.store.SBancoFiltro_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sbanco_filtro',
    requires: ['SisCPB.model.MBanco_scpb'],
    model:'SisCPB.model.MBanco_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
        url: './form/listaBancos',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
    
    
   
});
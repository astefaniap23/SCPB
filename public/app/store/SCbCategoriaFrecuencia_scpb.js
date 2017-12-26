/* 
 * SCbCategoriaFrecuencia_scpb
 */

Ext.define('SisCPB.store.SCbCategoriaFrecuencia_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.scbcategoriafrecuencia_scpb',
    requires: ['SisCPB.model.MCbCategoriaFrecuencia_scpb'],
    model:'SisCPB.model.MCbCategoriaFrecuencia_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
         url: './frequency/categoriafrecuencias',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
   
});

/* 
 * /store/SDetalleCredito_scpb.js
 */
Ext.define('SisCPB.store.SDetalleCredito_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sdetallecredito',
    requires: ['SisCPB.model.MDetalleCredito_scpb'],
    model:'SisCPB.model.MDetalleCredito_scpb',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
 
        url: './creditsdetails/mostrar',
 
        reader: {
                type: 'json',
                root: 'data'
        }
    }
   
});
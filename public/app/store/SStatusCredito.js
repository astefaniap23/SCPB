/* 
 * SStatusCredito_scpb
 */

Ext.define('SisCPB.store.SStatusCredito', {
    extend: 'Ext.data.Store',
    alias: 'store.sstatuscredito',
    requires: ['SisCPB.model.MStatusCreditoSolicitado_scpb'],
    model: 'SisCPB.model.MStatusCreditoSolicitado_scpb',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: './statuscredits/mostrar',
      
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});

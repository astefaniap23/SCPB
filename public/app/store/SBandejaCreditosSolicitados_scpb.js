/* 
 * SBandejaCreditosSolicitados_scpb
 */
Ext.define('SisCPB.store.SBandejaCreditosSolicitados_scpb', {
    extend: 'Ext.data.Store',
    alias: 'store.sbandejacreditossolicitados',
    requires: ['SisCPB.model.MBandejaCreditosSolicitados_scpb'],
    model: 'SisCPB.model.MBandejaCreditosSolicitados_scpb',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
              url: './creditsrequested/index',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});



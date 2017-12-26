/* 
 * GPBandejaBancos.js
 */
Ext.define('SisCPB.view.componentes.gridpanel.GPBandejaBancos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gpbandejabancos',
    name: 'gpbandejabancos',
    //  requires: ['SisCPB.store.SBandejaBancos_scpb'],
    title: 'Instituciones financieras registradas',
    flex: 1,
       store: 'SBandejaBancos_scpb',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            itemId: 'gridBancos',
         

            columns: [
                {
                    xtype: 'gridcolumn',
                    minWidth: 120,
                    dataIndex: 'id',
                    text: 'ID',
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nombre',
                    text: 'Nombre de la instituci&oacute;n',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'tbeliminar',
                    itemId:'tbeliminarIB',
                    dock: 'top'
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
             
            })
        });
        me.callParent(arguments);
    }
});
    
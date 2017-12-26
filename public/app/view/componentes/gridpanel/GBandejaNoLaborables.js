/* 
 * .gridpanel.GBandejaNoLaborables
 */

Ext.define('SisCPB.view.componentes.gridpanel.GBandejaNoLaborables', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gpbandejanolaborables',
    name: 'gpbandejanolaborables',
    //  requires: ['SisCPB.store.SBandejaBancos_scpb'],
    title: 'Fechas no laborables registradas',
    flex: 1,
    store: 'SNoLaborables_scpb',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            itemId: 'gpbandejanolaborables',
            columns: [
                {
                    xtype: 'gridcolumn',
                    minWidth: 120,
                    dataIndex: 'id',
                    text: 'ID'
                },
                {
                    xtype: 'datecolumn',
                    minWidth: 100,
                    dataIndex: 'fecha',
                    text: 'Fecha',
                    name:'fecha',
                    format:'Y/m/d'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nombre',
                    name:'nombre',
                    text: 'Descripci&oacute;n',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'tbeliminar',
                    itemId:'tbeliminarINL',
                    dock: 'top'
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
                
            })
        });
        me.callParent(arguments);
      
    }
});

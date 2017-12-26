/* 
 * .gridpanel.GBandejaFrecuencias.js
 */

Ext.define('SisCPB.view.componentes.gridpanel.GBandejaFrecuencias', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gbandejafrecuencias',
    name: 'gbandejafrecuencias',
    //  requires: ['SisCPB.store.SBandejaBancos_scpb'],
    title: 'Frecuencias registradas',
    flex: 1,
   store: 'SFrecuencias_scpb',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
           
            itemId: 'gridfrecuencias',
            columns: [
                {
                    xtype: 'gridcolumn',
                    minWidth: 120,
                    dataIndex: 'id',
                    text: 'ID',
                    name: 'id'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 150,
                    dataIndex: 'categoria',
                    text: 'Categor&iacute;a',
                    name:'categoria'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'periodicidad',
                    text: 'Periodicidad',
                    flex: 1,
                    name: 'periodicidad'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 150,
                    dataIndex: 'nombre',
                    text: 'Frecuencia',
                    name:'nombre'
                }
            ],
            dockedItems: [
                {
                    xtype: 'tbeliminar',
                    itemId:'tbeliminarIF',
                    dock: 'top'
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
            })
        });
        me.callParent(arguments);
      
    }
});

//public/app/view/componentes/container/CDetallesCreditosSolicitados

Ext.define('SisCPB.view.componentes.container.CStatusCreditosSolicitados', {
    extend: 'Ext.Container',
    alias: 'widget.cstatuscreditossolicitados',
    name: 'cstatuscreditossolicitados',
    store: 'SStatusCredito',
    //   data : getData(store),

    width: 620,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            layout: {
                type: 'absolute'
            },
            itemId: 'cstatuscreditossolicitados',
            items: [
                {
                    xtype: 'displayfield',
                    dataIndex: 'monto_original',
                    fieldLabel: 'Monto original',
                    labelWidth: 90,
                    itemId: 'monto_original',
                    value: 'Displayo Field',
                    renderer: Ext.util.Format.numberRenderer('0,000.00')
                },
                {
                    xtype: 'displayfield',
                    dataIndex: 'saldo_actual',
                    x: 0,
                    y: 20,
                    fieldLabel: 'Saldo actual',
                    labelWidth: 85,
                    itemId: 'saldo_actual',
                    value: 'Display Field',
                    renderer: Ext.util.Format.numberRenderer('0,000.00')
                },
                {
                    xtype: 'displayfield',
                    dataIndex: 'fecha_pago',
                    x: 220,
                    y: 0,
                    fieldLabel: 'Fecha Pago',
                    itemId: 'fecha_pago',
                    labelWidth: 90,
                    value: 'Display Field',
                    renderer: Ext.util.Format.dateRenderer('Y/m/d')
                },
                {
                    xtype: 'displayfield',
                    dataIndex: 'int_actual',
                    itemId: 'int_actual',
                    x: 220,
                    y: 20,
                    fieldLabel: 'Interes vigente',
                    labelWidth: 90,
                    value: 'Display Field'
                },
                {
                    xtype: 'displayfield',
                    dataIndex: 'liquidado',
                    x: 425,
                    y: 0,
                    fieldLabel: 'Liquidado',
                    labelWidth: 80,
                    itemId: 'liquidado',
                    value: 'Display Field',
                    renderer: Ext.util.Format.numberRenderer('0,000.00')
                },
                {
                    xtype: 'displayfield',
                    dataIndex: 'fecha_vto',
                    x: 425,
                    y: 20,
                    fieldLabel: 'Vencimiento',
                    labelWidth: 80,
                    itemId: 'fecha_vto',
                    value: 'Display Field',
                    renderer: Ext.util.Format.dateRenderer('Y/m/d')
                }
            ]
        });
        me.callParent(arguments);

    }
});

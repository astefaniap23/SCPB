
Ext.define('SisCPB.view.componentes.toolbars.TbBarraGeneral', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbbarrageneral',
    dock: 'top',
    itemId: 'tbbarrageneral',
    store: 'SBandejaBancos_scpb',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    handler: function(button, event) {

                        me.up('#vistascpb').fireEvent('configurar-scpb', me, button);
                       
                    },
                    icon: 'iconos/16x16/cog.png',
                    text: 'Configuraci&oacute;n'
                },
                {
                    xtype: 'combobox',
                    emptyText: 'Seleccione empresa'
                }
            ]
        });

        me.callParent(arguments);
    }

});
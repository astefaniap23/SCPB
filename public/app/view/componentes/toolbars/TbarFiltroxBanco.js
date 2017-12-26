/*
 * File: app/view/componentes/toolbars/TbarFiltroxBanco.js
 *
 */

Ext.define('SisCPB.view.componentes.toolbars.TbarFiltroxBanco', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbfiltroxbanco',
    requires: ['SisCPB.view.componentes.combobox.CbBanco'],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'cbbanco',
                    width: 149,
                    emptyText: 'Filtrar por banco'
                },
                {
                    xtype: 'textfield',
                    width: 180,
                    emptyText: 'Indique criterio de búsqueda'
                },
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/find.png',
                    text: 'Buscar'
                }
            ]
        });

        me.callParent(arguments);
    }

});
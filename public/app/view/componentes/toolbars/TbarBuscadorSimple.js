/*
 * File: app/view/componentes/toolbars/TbarBuscadorSimple.js
 */

Ext.define('SisCPB.view.componentes.toolbars.TbarBuscadorSimple', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbbuscadorsimple',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    width: 190,
                    emptyText: 'Ingrese Criterio de Búsqueda'
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
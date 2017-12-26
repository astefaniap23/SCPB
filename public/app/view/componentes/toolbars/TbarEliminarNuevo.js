/*
 * File: app/view/componentes/toolbars/TbarEliminarNuevo.js
 *
  */

Ext.define('SisCPB.view.componentes.toolbars.TbarEliminarNuevo', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbeliminarnuevo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/delete.png',
                    text: 'Eliminar'
                },
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/add.png',
                    text: 'Nuevo'
                }
            ]
        });

        me.callParent(arguments);
    }

});
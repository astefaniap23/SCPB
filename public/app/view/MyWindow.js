/*
 * File: app/view/MyWindow.js
 *
 */

Ext.define('SisCPB.view.MyWindow', {
    extend: 'Ext.window.Window',

    height: 250,
    width: 400,
    title: 'Deme su Clave',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});
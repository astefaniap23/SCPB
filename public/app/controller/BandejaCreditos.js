/*
 * File: app/controller/BandejaCreditos.js
 *
 */

Ext.define('SisCPB.controller.BandejaCreditos', {
    extend: 'Ext.app.Controller',
    alias: 'controller.bandejacreditos',
    views: ['componentes.gridpanel.GPBandejaPrincipal'],
    init: function() {
      this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            } ,
       /*     'gpbandejaprincipal': {
                itemdblclick: this.editUser
            }*/
            
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }/*,
    editUser: function(grid, record,data,item,index,e,dv) {
        var me=this;
        console.log('Double clicked on ' + record.get('id'));
        console.log(me.down());
         me.down("#paneles").setActiveTab(1);
    }*/

});

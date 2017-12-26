
/*
 * Controller/GuardarForm_scpb.js 
 */

Ext.define('SisCPB.controller.GuardarForm_scpb', {
    extend: 'Ext.app.Controller',
    alias: 'controller.guardarForm_scpb',
   // models: ['GuardarForm_scpb'],
    //views: ['componentes.toolbars.TbarGuardarCancelar'],
    init: function() {
        var me = this;
        me.control({
            /*'tbguardarcancelar button[action=save]': {
                click: me.insertCredito  ,  
            }*/


        });
    },
    insertCredito: function() {
         console.log("entre");
       /// var form = this.up('form').getForm();
       
       if (form.isValid()) {
            form.submit({
             method: 'POST',
             //url: './form/index',
            
                success: function(form, action, obj) {
                    Ext.Msg.alert('Exito', 'Bien!!!');
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Fallo', 'Hay un error en el envio de datos');
                }
         });

            }
        // console.log('Se guardo');
        // url: './form/index'
            }
    
});
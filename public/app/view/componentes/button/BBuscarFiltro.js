//public/app/view/componentes/combobox/button/BBuscarFiltro.js



Ext.define('SisCPB.view.componentes.button.BBuscarFiltro', {
    extend: 'Ext.button.Button',
    alias: 'widget.bbuscarfiltro',
    name: 'buscarfiltro',
    text: 'Buscar',
    initComponent: function() {
        var me = this;

    Ext.applyIf(me, {
            handler: function(button, event) {
                        me.up('#vistascpb').fireEvent('accion-filtrar', me, button);
                  },
                 /* handler: function filtrarbuscar() {
                        console.log("entre");
                       /*  buscar (.arriba de este) itemId:ingresarCredito (.bajo de este) itemId:fdetallecredito */ 
                    /*    var form = me.up('#vistascpb').down('#bandejaprincipal').down('#filtrobusqueda').down('#banco_filtrar');
                        console.log(form);
                        var win = me.up('#vistascpb');
                       
                
                      if (form.isValid()) {

                            form.submit({
                                method: 'POST',
                                url: './searchfilter/bandejaPrincipal',
                                waitMsg: 'Espar...',
                                success: function() {
                                      Ext.Msg.alert('Exito', 'Bien!!!');
                                    //   me.up('#ingresarCredito').destroy();
                                   win.close();

                                },
                                failure: function() {
                                    //    Ext.Msg.alert('Fallo', 'Hay un error en el envio de datos');
                                    //win.close();
                                }
                            });

                        }
                    }*/
        });

        me.callParent(arguments);
    }
});
 
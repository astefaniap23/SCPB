/*
 * File: app/view/componentes/toolbars/TbarGuardarCancelar.js
 */


Ext.define('SisCPB.view.componentes.toolbars.TbarGuardarCancelar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbguardarcancelar',
    refs: [{
            ref: 'fdetallecredito',
            selector: 'fdetallecredito'
        }],
    initComponent: function() {

        var me = this;


        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/cancel.png',
                    text: 'Cancelar',
                    itemId: 'cancelar',
                    handler: function() {
                        var cancelar = me.getItemId();

                        if (cancelar === 'guardarcancelarIC') {
                            me.up('#ingresarCredito').close();
                        }
                        if (cancelar === 'guardarcancelarIB') {

                            me.up('#wintablasbasicasscpb').close();
                        }
                        if (cancelar === 'guardarcancelarINL') {
                            me.up('#wintablasbasicasscpb').close();
                        }
                        if (cancelar === 'guardarcancelarIF') {
                            me.up('#wintablasbasicasscpb').close();
                        }


                    }
                    /* handler: function cancelarIngCredito() {
                     me.up('#ingresarCredito').close();
                     }*/
                },
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/disk.png',
                    text: 'Guardar',
                    itemId: 'guardar',
                    handler: function() {
                        var guardar = me.getItemId();

                        /*  Guardar =ingresar creditos*/
                        if (guardar === 'guardarcancelarIC') {
                            /*  buscar (.arriba de este) itemId:ingresarCredito (.bajo de este) itemId:fdetallecredito */
                            var form = me.up('#ingresarCredito').down('#fdetallecredito').getForm();
                            var win = me.up('#ingresarCredito');
                            // var form = Ext.getCmp('fdetallecredito').getForm(); //Casos con Id

                            if (form.isValid()) {

                                form.submit({
                                    method: 'POST',
                                    url: './form/index',
                                    //    waitMsg: 'Espar...',
                                    success: function() {
                                        var win = me.up('#ingresarCredito');
                                        // Ext.Msg.alert('Exito', 'Bien!!!');  me.up('#ingresarCredito').destroy();
                                        console.log('success');
                                        //stbp = Ext.getStore('SBandejaPrincipal_scpb');

                                        // this.on('render', this.getStore('SBandejaPrincipal_scpb').load(), this);
                                        //    stbp = Ext.getStore('SBandejaPrincipal_scpb');
                                        //    stbp.load();
                                        //win.close();
                                        //console.log(Ext.getStore('SBanco_scpb'))
                                        // st.load();
                                    },
                                    failure: function() {
                                        // Ext.Msg.alert('Fallo', 'Hay un error en el envio de datos');
                                        //  win.location.reload();
                                        stbp = Ext.getStore('SBandejaPrincipal_scpb');
                                        stbp.load();
                                        console.log('failure');
                                        win.close();
                                    }
                                });
                            }

                        }
                        /*  Guardar = ingresar bancos*/
                        if (guardar === 'guardarcancelarIB') {
                            var form = me.up('#wintablasbasicasscpb').down('#ingresarbanco').getForm();
                            var win = me.up('#wintablasbasicasscpb');
                            if (form.isValid()) {

                                form.submit({
                                    method: 'POST',
                                    url: './banks/insertarNuevo',
                                    success: function() {
                                        var form = me.up('#wintablasbasicasscpb').down('#gridBancos');
                                        sbandejabancos = form.getStore();
                                        sbandejabancos.load({
                                            params: {
                                                tipoTransaccion: 'mostrar'
                                            }
                                        });

                                        stbp = Ext.getStore('SBandejaPrincipal_scpb');
                                        stbp.load();
                                        stb = Ext.getStore('SBanco_scpb');
                                        stb.load();

                                    },
                                    failure: function() {
                                        stb = Ext.getStore('SBanco_scpb');
                                        stb.load();
                                        // Ext.Msg.alert('Fallo', 'Hay un error en el envio de datos');
                                    }
                                });
                            }
                        }
                        /*  Guardar = ingresar no laborables*/
                        if (guardar === 'guardarcancelarINL') {
                            var form = me.up('#wintablasbasicasscpb').down('#ingresarnolaborable').getForm();
                            var win = me.up('#wintablasbasicasscpb');
                            console.log(form);
                            if (form.isValid()) {

                                form.submit({
                                    method: 'POST',
                                    url: './nonworking/insertarNuevo',
                                    success: function() {
                                        var form = me.up('#wintablasbasicasscpb').down('#gpbandejanolaborables');
                                        sbandejanolaborables = form.getStore();
                                        sbandejanolaborables.load({
                                            params: {
                                                tipoTransaccion: 'mostrar'
                                            }
                                        });
                                    },
                                    failure: function() {

                                    }
                                });
                            }
                        }
                        /*  Guardar = ingresar frecuencia*/
                        if (guardar === 'guardarcancelarIF') {

                            var form = me.up('#wintablasbasicasscpb').down('#ingresarfrecuencia').getForm();
                            var win = me.up('#wintablasbasicasscpb');
                            console.log('hola');
                            if (form.isValid()) {

                                form.submit({
                                    method: 'POST',
                                    url: './frequency/insertarNuevo',
                                    success: function() {


                                        var form = me.up('#wintablasbasicasscpb').down('#gridfrecuencias');
                                        sbandejafrecuencias = form.getStore();
                                        sbandejafrecuencias.load({
                                            params: {
                                                tipoTransaccion: 'mostrar'
                                            }
                                        });
                                        scc = Ext.getStore('SFrecuenciaCap_scpb');
                                        scc.load();
                                        sci = Ext.getStore('SFrecuenciaInt_scpb');
                                        sci.load();
                                    },
                                    failure: function() {
                                        scc = Ext.getStore('SFrecuenciaCap_scpb');
                                        scc.load();
                                        sci = Ext.getStore('SFrecuenciaInt_scpb');
                                        sci.load();

                                    }
                                });
                            }
                        }

                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});
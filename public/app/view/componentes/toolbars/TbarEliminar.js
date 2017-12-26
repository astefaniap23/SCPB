/*
 * File: app/view/componentes/toolbars/TbarEliminar.js
 *
 */

Ext.define('SisCPB.view.componentes.toolbars.TbarEliminar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbeliminar',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    icon: 'iconos/16x16/delete.png',
                    text: 'Eliminar',
                    itemId: 'eliminar',
                    name: 'eliminar',
                    ////
                    handler: function() {
                        var eliminar = me.getItemId();

                        /*Eliminar Bancos*/
                        if (eliminar === 'tbeliminarIB') {
                            var form = me.up('#wintablasbasicasscpb').down('#gridBancos');
                            var sm = form.getSelectionModel();
                            sbandejabancos = Ext.getStore('SBandejaBancos_scpb');
                            var valor = sm.getSelection();
                            var resuldatos = [];
                            for (i = 0; i < valor.length; i++) {

                                resuldatos[i] = valor[i].data.id;

                                sbandejabancos.load({
                                    params: {
                                        objetoseleciondo: resuldatos[i],
                                        tipoTransaccion: 'eliminar'
                                    },
                                   /* success: function(result, request, response, form, action, obj) {
                                        var test = Ext.decode(response.responseText);
                                        if (test.states == 'success'){
                                        Ext.Msg.alert('Fail'),
                                        //  var jsonData = Ext.util.JSON.decode(response.responseText);
                                        //  var resultMessage = jsonData.data.result;
                                        //   console.log(resultMessage, 'Success');

                                    }
                                  /*  failure: function() {
                                        /*  var test = Ext.decode(action.response.responseText);
                                         console.log(test.failure);
                                         Ext.Msg.alert('Fail');
                                    }*/
                                });



                            }
                        }
                        /*Eliminar No Laborables*/
                        if (eliminar === 'tbeliminarINL') {
                            var form = me.up('#wintablasbasicasscpb').down('#gpbandejanolaborables');
                            var sm = form.getSelectionModel();
                            sbandejanolaborables = Ext.getStore('SNoLaborables_scpb');
                            console.log(sbandejanolaborables);
                            var valor = sm.getSelection();
                            var resuldatos = [];
                            for (i = 0; i < valor.length; i++) {

                                resuldatos[i] = valor[i].data.id;

                                sbandejanolaborables.load({
                                    params: {
                                        objetoseleciondo: resuldatos[i],
                                        tipoTransaccion: 'eliminar'
                                    }
                                });


                            }
                        }
                        if (eliminar === 'tbeliminarIF') {
                            var form = me.up('#wintablasbasicasscpb').down('#gridfrecuencias');
                            var sm = form.getSelectionModel();
                            sbandejafrecuencias = Ext.getStore('SFrecuencias_scpb');
                            console.log(sbandejafrecuencias);
                            var valor = sm.getSelection();
                            var resuldatos = [];
                            for (i = 0; i < valor.length; i++) {

                                resuldatos[i] = valor[i].data.id;

                                sbandejafrecuencias.load({
                                    params: {
                                        objetoseleciondo: resuldatos[i],
                                        tipoTransaccion: 'eliminar'
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
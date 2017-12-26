/*
 * File: app/view/DemesuClave.js
 */

Ext.define('SisCPB.view.DemesuClave', {
    extend: 'Ext.window.Window',
    alias: 'widget.demesuclave',
    autoShow: true,
    draggable: false,
    height: 245,
    width: 300,
    resizable: false,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    closable: false,
    icon: 'iconos/16x16/safe.png',
    title: 'Bienvenido al SCPB',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    height: 45,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'image',
                            x: 85,
                            y: 5,
                            height: 40,
                            width: 110,
                            src: 'img/wimac-logo.gif'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    flex: 1,
                    bodyPadding: 10,
                    waitTitle: 'Por favor espere...',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Usuario',
                            labelWidth: 70,
                            invalidText: 'El valor en este campo es invÃ¡lido',
                            allowBlank: false,
                            blankText: 'Este campo es obligatorio',
                            emptyText: 'Indique usuario',
                            validateBlank: true,
                            name: 'usuario',
                            // id: 'usuario'

                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Contrase&ntilde;a',
                            labelWidth: 70,
                            inputType: 'password',
                            allowBlank: false,
                            blankText: 'Este campo es obligatorio',
                            emptyText: 'Indique contraseÃ±a',
                            name: 'contrasenia',
                            

                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    /*  handler: function(button, event) {
                                     me.fireEvent('ingresar-app', me, button);
                                     },*/
                                    icon: 'iconos/32x32/key.png',
                                    scale: 'large',
                                    text: 'Ingresar',
                                    /******/
                                    handler: function() {
                                        var form = this.up('form').getForm();
                                        console.log("entre");

                                        if (form.isValid()) {
                                            form.submit(
                                                    {
                                                        method: 'POST',
                                                        url: './login/index',
                                                        success: function(form, action, obj) {

                                                            var test = Ext.decode(action.response.responseText);
                                                            console.log(test.id);
                                                            //var expirationDate = new Date();
                                                            //expirationDate.setDate(expirationDate.getDate() + 7);
                                                            var cookies = Ext.util.Cookies.set('CookieSCPB', test.id);

                                                            console.log(test.id + ': DemesuClave');
                                                            console.log(cookies + ": COOKIES");


                                                            Ext.create('Ext.window.Window', {
                                                                items: [{
                                                                        xtype: 'vistascpb',
                                                                        autoEl: {id: 'login-page'}
                                                                    }]

                                                            });
                                                            me.hide();
                                                            Ext.get('login-page').remove();

                                                            console.log("entre4");
                                                        },
                                                        failure: function(form, action) {
                                                            Ext.Msg.alert('Fallo', 'Hay un error en el envio de datos');
                                                            console.log(action.response.responseText);
                                                        }
                                                    }
                                            );
                                        }
                                        ;
                                    }
                                    /*******/
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'div_piso',
                    height: 35,
                    html: '<h1><b>CorporaciÃ³n WiMAC, C.A.</b>  Â© 2014</h1>',
                    layout: {
                        type: 'absolute'
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});
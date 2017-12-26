/*
 * File: app/view/VistaSCPB.js
 *
 */

Ext.define('SisCPB.view.VistaSCPB', {
    //extend: 'Ext.window.Window',
    extend: 'Ext.container.Viewport',
    alias: 'widget.vistascpb',
    store: 'SBandejaBancos_scpb',
    /*  autoShow: true,
     draggable: false,
     closable: false,*/

    requires: [
        'SisCPB.view.componentes.forms.FdetalleCredito',
        'SisCPB.view.componentes.toolbars.TbarFiltroxBanco',
        'SisCPB.view.componentes.gridpanel.GPBandejaPrincipal',
        'SisCPB.view.componentes.toolbars.TbBarraGeneral',
        'SisCPB.view.windows.WinTablasBasicasScpb',
        'SisCPB.view.componentes.toolbars.TbBuscarBandejaPrincipal',
        'SisCPB.view.componentes.gridpanel.GPBandejaCreditosSolicitados',
        'SisCPB.view.componentes.container.CStatusCreditosSolicitados'
    ],
    layout: {
        type: 'border'
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            itemId: 'vistascpb',
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    cls: 'div_tope',
                    height: 65,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'image',
                            x: 5,
                            y: 3,
                            height: 55,
                            width: 147,
                            src: 'img/wimac-logo.png'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    width: 200,
                    collapsed: true,
                    collapsible: true,
                    title: 'Men&uacute; de Opciones'
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    layout: {
                        type: 'fit'
                    },
                    icon: 'iconos/16x16/building.png',
                    title: 'Sistema de Control de Pr&eacute;stamos Bancarios | SCPB',
                    dockedItems: [
                        {
                            xtype: 'tbbarrageneral',
                        }
                    ],
                    items: [
                        {
                            //   itemId:'2',
                            xtype: 'tabpanel',
                            itemId: 'paneles',
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: {
                                        type: 'border'
                                    },
                                    bodyPadding: 5,
                                    title: 'Resumen de cr&eacute;ditos solicitados',
                                    tabConfig: {
                                        xtype: 'tab',
                                        icon: 'iconos/16x16/building_edit.png'
                                    },
                                    items: [
                                        {
                                            //itemId:'3',
                                            xtype: 'panel',
                                            flex: 7,
                                            region: 'center',
                                            layout: {
                                                align: 'stretch',
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    itemId: 'gpbandejaprincipal',
                                                    xtype: 'gpbandejaprincipal',
                                                    dockedItems: [
                                                        {
                                                            //   itemId:'filtrobusqueda',
                                                            xtype: 'tbbuscarbandejaprincipal',
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    height: 60,
                                                    layout: {
                                                        align: 'stretch',
                                                        type: 'hbox'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            flex: 1
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 4,
                                            region: 'east',
                                            split: true,
                                            layout: {
                                                align: 'stretch',
                                                type: 'vbox'
                                            },
                                            collapsible: true,
                                            icon: 'iconos/16x16/building_error.png',
                                            title: 'Detalle del cr&eacute;dito seleccionado',
                                            items: [
                                                {
                                                    xtype: 'fdetallecredito',
                                                    itemId: 'fdetallecredito',
                                                },
                                                {
                                                    xtype: 'container',
                                                    height: 50,
                                                    width: 580,
                                                    layout: {
                                                        type: 'absolute'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            x: 10,
                                                            y: -1,
                                                            fieldLabel: 'Saldo',
                                                            labelWidth: 90,
                                                            value: 'Display Field'
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            x: 235,
                                                            y: -2,
                                                            fieldLabel: 'Liquidado',
                                                            labelWidth: 75,
                                                            value: 'Display Field'
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            x: 235,
                                                            y: 20,
                                                            fieldLabel: 'Vencimiento',
                                                            labelWidth: 75,
                                                            value: 'Display Field'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'chart',
                                                    flex: 1,
                                                    width: 400,
                                                    animate: true,
                                                    insetPadding: 20,
                                                    store: 'StoreCredito_scpb',
                                                    axes: [
                                                        {
                                                            type: 'Category',
                                                            fields: [
                                                                'x'
                                                            ],
                                                            position: 'bottom'
                                                        },
                                                        {
                                                            type: 'Numeric',
                                                            fields: [
                                                                'y'
                                                            ],
                                                            position: 'left'
                                                        }
                                                    ],
                                                    series: [
                                                        {
                                                            type: 'line',
                                                            xField: 'x',
                                                            yField: 'y',
                                                            smooth: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    activeTab: 10,
                                    //  itemId:'detalleCredito',
                                    xtype: 'panel',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: 'Detalle de cr&eacute;ditos solicitados',
                                    tabConfig: {
                                        xtype: 'tab',
                                        icon: 'iconos/16x16/building_detail.png'
                                    },
                                    items: [
                                        {
                                            xtype: 'gpbandejacreditossolicitados',
                                            itemId: 'gpbandejacreditossolicitados',
                                        },
                                        {
                                            xtype: 'container',
                                            height: 48,
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'cstatuscreditossolicitados',
                                                    itemId: 'cstatuscreditossolicitados',
                                                    width: 620,
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: 'Cartera de prestamos pasivos',
                                    tabConfig: {
                                        xtype: 'tab',
                                        icon: 'iconos/16x16/building_error.png'
                                    },
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            flex: 2,
                                            title: 'Cartera de pr&eacute;stamos',
                                            columns: [
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'string',
                                                    text: 'Nombre',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'string',
                                                    text: 'Banco',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    minWidth: 140,
                                                    dataIndex: 'number',
                                                    text: 'Monto original'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    minWidth: 120,
                                                    dataIndex: 'date',
                                                    text: 'Fecha de inicio'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    minWidth: 120,
                                                    dataIndex: 'bool',
                                                    text: 'Vencimiento'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: 'Tasa'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    minWidth: 140,
                                                    dataIndex: 'bool',
                                                    text: 'Capital pagado'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    minWidth: 140,
                                                    dataIndex: 'bool',
                                                    text: 'Saldo actual'
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'pagingtoolbar',
                                                    dock: 'bottom',
                                                    width: 360,
                                                    displayInfo: true
                                                },
                                                {
                                                    xtype: 'tbfiltroxbanco',
                                                    dock: 'top'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            flex: 1,
                                            title: 'Resumen',
                                            columns: [
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'string',
                                                    text: 'Banco',
                                                    flex: 3
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'number',
                                                    text: 'Saldo actual',
                                                    flex: 1
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'pagingtoolbar',
                                                    dock: 'bottom',
                                                    width: 360,
                                                    displayInfo: true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    title: 'Vencimientos',
                                    dockedItems: [
                                        {
                                            xtype: 'tbfiltroxbanco',
                                            dock: 'top'
                                        },
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true
                                        }
                                    ],
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            minWidth: 150,
                                            dataIndex: 'string',
                                            text: 'Nombre del cr&eacute;dito'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'Banco'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'Monto'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'Inter&eacute;s'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            minWidth: 150,
                                            dataIndex: 'date',
                                            text: 'Fecha rangoM inicial'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            minWidth: 150,
                                            dataIndex: 'bool',
                                            text: 'Fecha rangoM final'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            minWidth: 150,
                                            dataIndex: 'bool',
                                            text: 'Fecha rangoM final'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'bool',
                                            text: 'Asiento contable',
                                            columns: [
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: 'D&eacute;bito',
                                                    columns: [
                                                        {
                                                            xtype: 'numbercolumn',
                                                            dataIndex: 'bool',
                                                            text: 'Total interes'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: 'D&eacute;bito',
                                                    columns: [
                                                        {
                                                            xtype: 'numbercolumn',
                                                            dataIndex: 'bool',
                                                            text: 'Cuota capital'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: '',
                                                    columns: [
                                                        {
                                                            xtype: 'numbercolumn',
                                                            dataIndex: 'bool',
                                                            text: 'Total'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: 'D(-), C(+)',
                                                    columns: [
                                                        {
                                                            xtype: 'numbercolumn',
                                                            minWidth: 140,
                                                            dataIndex: 'bool',
                                                            text: 'Gastos financieros'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'bool',
                                                    text: 'Cr&eacute;dito',
                                                    columns: [
                                                        {
                                                            xtype: 'numbercolumn',
                                                            dataIndex: 'bool',
                                                            text: 'Banco'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            dataIndex: 'bool',
                                            text: 'Fecha'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            minWidth: 150,
                                            dataIndex: 'bool',
                                            text: 'Tipo de cr&eacute;dito'
                                        }
                                    ],
                                    tabConfig: {
                                        xtype: 'tab',
                                        icon: 'iconos/16x16/building_go.png'
                                    }
                                },
                                {
                                    xtype: 'gridpanel',
                                    title: 'Proyecciones',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'string',
                                            text: 'Consolidado',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'dic 2013'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'date',
                                            text: 'ene 2014'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'bool',
                                            text: 'feb 2014'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'bool',
                                            text: 'mar 2014'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'bool',
                                            text: 'abr 2014'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'bool',
                                            text: 'may 2014'
                                        }
                                    ],
                                    tabConfig: {
                                        xtype: 'tab',
                                        icon: 'iconos/16x16/building_proy.png'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'tbfiltroxbanco',
                                            dock: 'top'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'south',
                    baseCls: 'div_piso',
                    height: 35,
                    html: '<h1>Av. Principal Macaracuay, Torre La California, Piso 8, Oficina 8-A, Urb. Macaracuay, Caracas, Venezuela. Tlf: +58 (212)-4357210 +58 (212)-4357211</h1>',
                    layout: {
                        type: 'absolute'
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});

/*
 * File: app/view/componentes/toolbars/TbBuscarBandejaPrincipal.js
 */

Ext.define('SisCPB.view.componentes.toolbars.TbBuscarBandejaPrincipal', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbbuscarbandejaprincipal',
    dock: 'top',
    itemId: 'TbBuscarBandejaPrincipal',
    requires: [
        'SisCPB.view.componentes.combobox.CbBanco_filtrar',
        'SisCPB.view.componentes.button.BBuscarFiltro',
      //  'SisCPB.view.componentes.datefield.DaFechaVto',
      //  'SisCPB.view.componentes.datefield.DaFechaIni'
                // 'SisCPB.view.componentes.forms.FdetalleCredito',
                // 'SisCPB.view.IngresarCredito',
                // 'SisCPB.controller.IngresarCredito_scpb'
    ],
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        me.up('#vistascpb').fireEvent('ingresar-credito', me, button);
                    },
                    icon: 'iconos/16x16/building_add.png',
                    text: 'Incluir cr&eacute;dito'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'banco_filtrar',
                    itemId: 'banco',
                    width: 140


                },
                {
                    ///---------------> recordar utilizar la misma de fdetallecredito
                    xtype: 'datefield',
                    itemId: 'fecha_ini',
                    width: 110,
                    emptyText: 'Fecha desde',
                    format: ('d/m/Y')
                },
                {
                    //dateFechaVto ---------------> recordar utilizar la misma de fdetallecredito
                    xtype: 'datefield',
                    itemId: 'fecha_vto',
                    width: 110,
                    emptyText: 'Fecha hasta',
                    format: ('Y/m/Y')
                },
                {
                    xtype: 'textfield',
                    width: 220,
                    emptyText: 'Indique criterio de búsqueda'
                },
                {
                    xtype: 'bbuscarfiltro',
                    // xtype: 'button',
                    text: 'Buscar',
               /* lanzarFiltroBandejaPrincipal: function() {
                        // var me = this;
                        params;
                        /*   console.log(me.down('#banco').getValue());
                         console.log(me.down('#fechaInicio').getValue());
                         console.log(me.down('#fechaVto').getValue());
                        params = {
                            banco: me.down('#banco').getValue(),
                            fechaInicio: me.down('#fechaInicio').getValue(),
                            fechaVto: me.down('#fechaVto').getValue()
                        };

                        me.fireEvent('accion-filtrar', me, params);
                    },*/
                    /*  handler: function() {
                     //var me = this,
                     
                     // me.up('#vistascpb').fireEvent('accion-filtrar', me);
                     me.up('#vistascpb').lanzarFiltroBandejaPrincipal();
                     },*/
                    icon: 'iconos/16x16/find.ong'
                }
            ]
        });

        me.callParent(arguments);
    },
    seleccionoBanco: function() {
        this.lanzarFiltroBandejaPrincipal();
    },
    lanzarFiltroBandejaPrincipal: function() {
        var me = this,
                params;
        paramas = {
            banco: me.down('#banco').getValue(),
            fechaInicio: me.down('#fechaInicio').getValue(),
            fechaVto: me.down('#fechaVto').getValue(),
        };

        me.fireEvent('accion-filtrar', me, params);
    }
    /*    lanzarFiltro: function() {
     var me = this,
     params;
     params={
     comboBanco = toolbar.down('#banco_filtrar');
     
     };
     me.fireEvent('accion-filtrar', me, params);
     }
     */
});
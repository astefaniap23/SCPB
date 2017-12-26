//public/app/view/componentes/gridpanel/GPBandejaPrincipal

Ext.define('SisCPB.view.componentes.gridpanel.GPBandejaPrincipal', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gpbandejaprincipal',
    name: 'gpbandejaprincipal',
    store: 'SBandejaPrincipal_scpb',
    title: 'Cr&eacute;ditos pendiente mes de Julio 2014',
    flex: 1,
    requires: [
        'SisCPB.view.componentes.combobox.CbFrecuenciaInt',
        'SisCPB.view.componentes.combobox.CbFrecuenciaCap',
        'SisCPB.view.componentes.combobox.CbBanco',
        'SisCPB.view.componentes.radiogroup.RgMes',
        'SisCPB.view.componentes.radiogroup.RgAno',
        'SisCPB.view.componentes.combobox.CbInteresAde',
        'SisCPB.view.componentes.combobox.CbCapitalAde',
        'SisCPB.view.componentes.combobox.CbCuotaFija',
        'SisCPB.view.componentes.datefield.DaFechaIni',
        'SisCPB.view.componentes.datefield.DaFechaVto',
        'SisCPB.view.componentes.gridpanel.GPBandejaCreditosSolicitados'
    ],
    initComponent: function() {
        //    var fm = Ext.form;
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                'beforeitemdblclick': me.cargardetallescredito,
                'itemclick': me.cargarlistadocredito,
                scope: me
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    minWidth: 220,
                    dataIndex: 'nombre',
                    itemId: 'nombreCredito',
                    text: 'Nombre del cr&eacute;dito'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 220,
                    dataIndex: 'banco',
                    text: 'Banco',
                    name: 'banco',
                    renderer: function(value) {
                        return value.nombreB;
                    }
                },
                {
                    xtype: 'numbercolumn',
                    minWidth: 150,
                    dataIndex: 'monto',
                    text: 'Monto'

                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'fechaInicio',
                    text: 'Fecha inicio',
                    format: 'Y/m/d'

                },
                {
                    xtype: 'datecolumn',
                    minWidth: 140,
                    dataIndex: 'fechaVto',
                    text: 'Fecha vencimiento',
                    format: 'Y/m/d'
                }
            ]
        });

        me.callParent(arguments);
    },
    'cargardetallescredito': function(dv, record, item, index, e) {
        var me = this;
        var dato = record.get('id');
        me.up('#paneles').setActiveTab(1);
        var form = me.up('#vistascpb').down('#gpbandejacreditossolicitados');
        sbandejacreditossolicitados = form.getStore();
        sbandejacreditossolicitados.load({
            params: {
                tipoTransaccion: 'listar',
                objetoseleciondo: dato
            }
        });
        sbandejacreditossolicitados.loadData([], false);
     



    },
    'cargarlistadocredito': function(dv, record, item, index, e, value) {
        var me = this;
        var nombre = record.get('nombre');
        var banco = record.get('banco');
        var monto = record.get('monto');
        var porcentaje_int = record.get('porcentaje_int');
        var fechaInicio = record.get('fechaInicio');
        var fechaVto = record.get('fechaVto');
        var mes = record.get('mes');
        var anio = record.get('ano');
        var frec_int = record.get('frec_int');
        var frec_cap = record.get('frec_cap');
        var int_adelantado = record.get('int_adelantado');
        var cap_adelantado = record.get('cap_adelantado');
        var cuota_fija = record.get('cuota_fija');
        var form = me.up('#vistascpb').down('#fdetallecredito');
        console.log(banco);
        sfc = Ext.getStore('SFrecuenciaCap_scpb');
        sfc.load();
        sfi = Ext.getStore('SFrecuenciaInt_scpb');
        sfi.load();
        //console.log (frec_cap);
        form.down('#nombre').setValue(nombre).setReadOnly(true);
        form.down('#cbbanco').setValue(banco.idB).setReadOnly(true);
        form.down('#monto').setValue(monto).setReadOnly(true);
        form.down('#porcentaje_int').setValue(porcentaje_int).setReadOnly(true);
        form.down('#fecha_ini').setValue(fechaInicio).setReadOnly(true);
        form.down('#fecha_vto').setValue(fechaVto).setReadOnly(true);
        form.down('#mes').setValue({mes: mes}).setReadOnly(true);
        form.down('#anio').setValue({ano: anio}).setReadOnly(true);
        form.down('#frec_int').setValue(frec_int.idFI).setReadOnly(true);
        form.down('#frec_cap').setValue(frec_cap.idFC).setReadOnly(true);
        form.down('#int_adelantado').setValue({int_adelantado: int_adelantado}).setReadOnly(true);
        form.down('#cap_adelantado').setValue({cap_adelantado: cap_adelantado}).setReadOnly(true);
        form.down('#cuota_fija').setValue({cuota_fija: cuota_fija}).setReadOnly(true);

    }

});

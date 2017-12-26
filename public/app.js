/*
 * File: app.js
 *
 */

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    appFolder: 'public/app',
    stores: [
        'StoreCredito_scpb',
        'SFrecuenciaInt_scpb',
        'SFrecuenciaCap_scpb',
        'SBanco_scpb',
        'SBandejaPrincipal_scpb',
        'SBancoFiltro_scpb',
        'SBandejaBancos_scpb',
        'SNoLaborables_scpb',
        'SFrecuencias_scpb',
        'SCbCategoriaFrecuencia_scpb',
        'SBandejaCreditosSolicitados_scpb',
        'SStatusCredito'
  
    ],
    views: [
        'IngresarCredito',
        'VistaSCPB',
        'componentes.toolbars.TbarEliminarNuevo',
        'componentes.toolbars.TbarBuscadorSimple',
        'componentes.toolbars.TbarLimpiarGuardar',
        'IngresarCredito',
        'componentes.toolbars.TbarGuardarCancelar',
        'DemesuClave',
        'windows.WinTablasBasicasScpb',
        'componentes.toolbars.TbarEliminar',
        'componentes.toolbars.TbarFiltroxBanco',
        'componentes.gridpanel.GPBandejaPrincipal',
        'componentes.toolbars.TbBuscarBandejaPrincipal'



    ],
    //  autoCreateViewport: false,
    launch: function() {
        var idcookies = Ext.util.Cookies.get('CookieSCPB');
        Ext.Ajax.request({
            url: './cookies/sessionId',
            params: {idcookies: idcookies},
            success: function(response) {
                var respuesta = Ext.decode(response.responseText);
                if (respuesta.success)
                {
                    Ext.create('SisCPB.view.VistaSCPB');

                }
                else
                {
                    Ext.create('SisCPB.view.DemesuClave');
                }


            },
            failure: function() {
                alert("No hay internet");
            }


        });


    },
    controllers: [
        'IngresarCredito_scpb',
        'IngresarApp_scpb',
        'IngresarForm_scpb',
        'GuardarForm_scpb',
        'ConfigScpb',
        'FiltroBandejaPrincipal_scpb',
        'BandejaCreditos',
        'StatusCreditosSolicitados'
    ],
    name: 'SisCPB'
});


//public/app/view/componentes/combobox/CbBanco_filtrar

Ext.define('SisCPB.view.componentes.combobox.CbBanco_filtrar', {
    extend: 'Ext.form.field.ComboBox',
    itemId: 'banco',
    alias: 'widget.banco_filtrar',
    name: 'banco',
    store: 'SBancoFiltro_scpb',
    queryMode: 'local',
    displayField: 'nombre',
    valueField: 'id',
    forceSelection: false,
    allowBlank: true,
    validateBlank: false,
    emptyText: 'Filtrar por banco',
    listeners: {
        select: function() {
            //cbbanco.getValue();// valuedField
            // cbbanco.getRawValue(),// displayField
           // console.log(this.getValue()); //nombre de los xtype
        }
    }

});
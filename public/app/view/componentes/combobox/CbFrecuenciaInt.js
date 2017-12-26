//public/app/view/componentes/combobox/CbFrecuenciaInt

Ext.define('SisCPB.view.componentes.combobox.CbFrecuenciaInt', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.cbfrecuenciaint',
    name: 'frec_int',
    itemId:'frec_int',
    store: 'SFrecuenciaInt_scpb',
    queryMode: 'local',
    displayField: 'nombre',
    valueField: 'id',
    forceSelection: true,
    allowBlank: false,
    validateBlank: true,
    blankText: 'Este campo es obligatorio',
    
    listeners: {
        select: function() {
            //cbbanco.getValue();// valuedField
            // cbbanco.getRawValue(),// displayField
            console.log(this.getValue()); //nombre de los xtype
        }
    }



});


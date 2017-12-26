//public/app/view/componentes/combobox/CbBanco

Ext.define('SisCPB.view.componentes.combobox.CbBanco', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.cbbanco',
    name: 'banco',
    store: 'SBanco_scpb',
    queryMode: 'local',
    triggerAction:'all',
    displayField: 'nombre',
    valueField: 'id',
    forceSelection: true,
    allowBlank: false,
    validateBlank: true,
    blankText: 'Este campo es obligatorio',
    listeners: {
        select: function() {
               console.log(this.getValue());
            
            // cbbanco.getRawValue(),// displayField
          //  console.log(this.getRawValue()); //nombre de los xtype
        }
    }

});
//public/app/view/componentes/combobox/CbFrecuenciaCap

Ext.define('SisCPB.view.componentes.combobox.CbFrecuenciaCap', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.cbfrecuenciacap',
    name: 'frec_cap',
    itemId:'frec_cap',
    store: 'SFrecuenciaCap_scpb',
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
          //  console.log(this.getValue()); //nombre de los xtype
        }
    }
    /*initComponent: function() {
     var me = this;
     
     Ext.applyIf(me,{
     items: [
     {
     xtype:'combobox'
     }
     ]
     }
     );
     
     me.callParent(arguments);
     }*/

});


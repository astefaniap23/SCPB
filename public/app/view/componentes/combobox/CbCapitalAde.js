//public/app/view/componentes/combobox/CbCapitalAde

//var name = 'cap_adelantado';  //Variable Global para el Nombre del CheckboxGroup

Ext.define('SisCPB.view.componentes.combobox.CbCapitalAde', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.ckbgcapitalade',
    name: 'cap_adelantado',
    itemId: 'cap_adelantado',
    checkOnly: true,
    allowBlank: false,
    validateBlank: true,
    blankText: 'Este campo es obligatorio',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'radiofield',
                    boxLabel: 'Si',
                    name: 'cap_adelantado',
                    inputValue: 1,
                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'No',
                    name: 'cap_adelantado',
                    inputValue: 0,
                }
            ],
            listeners: {
                /*  change: function(me, arrayCheckedCapAde) {
                 
                 console.log('has seleccionado capital:' + this.getValue().cap_adelantado)
                 if (arrayCheckedCapAde.length = 2) {
                 var num = 0;
                 me.items.each(function() {
                 if (this.checked) {
                 num++;
                 }
                 if (num > 1) {
                 this.setValue(false);
                 }
                 }
                 );
                 }
                 console.log(this.getValue().cap_adelantado);
                 }*/
            }
        });

        me.callParent(arguments);
    }
});
 
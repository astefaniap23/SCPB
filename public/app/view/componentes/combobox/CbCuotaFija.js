//public/app/view/componentes/combobox/CbCuotaFija

//var name = 'cuota_fija';  //Variable Global para el Nombre del CheckboxGroup

Ext.define('SisCPB.view.componentes.combobox.CbCuotaFija', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.ckbgcuotafija',
    name: 'cuota_fija',
    itemId: 'cuota_fija',
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
                    name: 'cuota_fija',
                    inputValue: 1
                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'No',
                    name: 'cuota_fija',
                    inputValue: 0
                }
            ],
            listeners: {
                /*   change: function(me, arrayCheckedCapAde) {
                 console.log('has seleccionado cuota fija:' + this.getValue().cuota_fija)
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
 
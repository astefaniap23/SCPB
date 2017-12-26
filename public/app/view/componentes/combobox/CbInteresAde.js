//public/app/view/componentes/combobox/CbCapitalAde

//var name = 'int_adelantado';  //Variable Global para el Nombre del CheckboxGroup

Ext.define('SisCPB.view.componentes.combobox.CbInteresAde', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.ckbginteresade',
    name: 'int_adelantado',
    itemId: 'int_adelantado',
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
                    name: 'int_adelantado',
                    inputValue: 1,
                   
                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'No',
                    name: 'int_adelantado',
                    inputValue: 0,
                   
                }
            ],
            listeners: {
                /*   change: function(me, arrayCheckedIntAde) {
                 
                 if (arrayCheckedIntAde.length = 2) {
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
                 //console.log(this.getValue().int_adelantado);
                 }*/
            }
        });

        me.callParent(arguments);
    }
});
 
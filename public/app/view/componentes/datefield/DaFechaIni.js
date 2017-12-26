/*
 * File: app/view/componentes/datefield/DaFechaIni.js
 *
 */

Ext.define('SisCPB.view.componentes.datefield.DaFechaIni', {
    extend: 'Ext.form.Date',
    alias: 'widget.dateFechaIni',
    name: 'fecha_ini',
    itemId: 'fecha_ini',
    allowBlank: false,
    validateBlank: true,
    format: 'Y/m/d',
    blankText: 'Este campo es obligatorio',
    vtype: 'daterange',
    endDateField: 'fecha_vto',
    maxValue: '#fecha_vto',
    listeners: {
       // change: function(a) {
            //Ext.getCmp('fecha_vto').setMinValue(a);
      //  },
        select: function() {

            //cbbanco.getValue();// valuedField
            // cbbanco.getRawValue(),// displayField
            console.log(this.getValue()); //nombre de los xtype
        }

    }

});
Ext.apply(
        Ext.form.field.VTypes, {
            daterange: function(val, field) {
                var date = field.parseDate(val);

                if (!date) {
                    return false;
                }
                if (field.startDateField && (!this.dateRangeMax)) {
                    var start = field.up('form').down('#' + field.startDateField);
                    start.setMaxValue(date);
                    start.validate();
                    this.dateRangeMax = date;
                }
                else if (field.endDateField && (!this.dateRangeMin)) {
                    var end = field.up('form').down('#' + field.endDateField);
                    end.setMinValue(date);
                    end.validate();
                    this.dateRangeMin = date;
                }
                /*
                 * Always return true since we're only using this vtype to set the
                 * min/max allowed values (these are tested for after the vtype test)
                 */
                return true;
            },
            daterangeText: 'Fecha Incio debe ser menor que Fecha Vto',
        });

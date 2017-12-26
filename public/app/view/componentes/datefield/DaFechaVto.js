/*
 * File: app/view/componentes/datefield/DaFechaVto.js
 *
 */

Ext.define('SisCPB.view.componentes.datefield.DaFechaVto', {
    extend: 'Ext.form.Date',
    alias: 'widget.dateFechaVto',
    name: 'fecha_vto',
    itemId: 'fecha_vto',
    allowBlank: false,
    validateBlank: true,
    format: 'Y/m/d',
    blankText: 'Este campo es obligatorio',
    vtype: 'daterange',
    startDateField: 'fecha_ini',
    minValue: 'fecha_ini',
    listeners: {
        select: function() {
         //   start.setMaxValue(date);
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
            daterangeText: 'Fecha Vto debe ser mayor que Fecha Inicio'
        });

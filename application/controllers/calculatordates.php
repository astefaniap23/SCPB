<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CalculatorDates extends CI_Controller {

    private $em;
    static private $true = '1';
    static private $act = 'Actual';
    static private $mesEstatico = '30';
    static private $Anio360 = '360';
    static private $Anio365 = '365';
    static private $lunes = '1';
    static private $martes = '2';
    static private $miercoles = '3';
    static private $jueves = '4';
    static private $viernes = '5';
    static private $sabado = '6';
    static private $domingo = '7';
    private $entidadPrestamosAll;
    private $entidadReportesAll;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
        $this->entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findAll();
    }

    public function domingos($datetime3) {
        //-- Insert fecha de pago si es domingo --
        $dias = 1;
        $fechaPago = strtotime('+' . $dias . ' day', strtotime($datetime3));
        $fechaPago = date('Y/m/d', $fechaPago); //-----J?
        return $fechaPago;
    }

    public function sabados($datetime3) {
        //-- Insert fecha de pago si es sabado --
        $dias = 2;
        $fechaPago = strtotime('+' . $dias . ' day', strtotime($datetime3));
        $fechaPago = date('Y/m/d', $fechaPago); //-----J?
        return $fechaPago;
    }

    public function feriadoLunesJueves($frecuencias_cap, $date, $datetime3) {
        //--- Insert fecha de pago si es feriado ---
        $dias = 1;
        $fechaPago = strtotime('+' . $dias . 'day', strtotime($datetime3));
        $fechaPago = date('Y/m/d', $fechaPago);
        return $fechaPago;
    }

    public function feriadoViernes($frecuencias_cap, $date, $datetime3) {
        //--- Insert fecha de pago si es feriado ---
        $dias = 3;
        $fechaPago = strtotime('+' . $dias . 'day', strtotime($datetime3));
        $fechaPago = date('Y/m/d', $fechaPago);
        return $fechaPago;
    }

    public function calculadoraFechas($id, $datetime3, $frecuencias_int, $frecuencias_cap, $date) {

        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {


            if ($id == $prestamos->getIdPrestamo()) {
                if (date('N', $date) === self::$sabado) {
                    return $this->sabados($datetime3);
                }
                if (date('N', $date) === self::$domingo) {
                    return $this->domingos($datetime3);
                }
                //---Rodar fecha de pago si es Feriado---------------
                if (date('N', $date) == self::$lunes || (date('N', $date) == self::$martes) || (date('N', $date) == self::$miercoles) || (date('N', $date) == self::$jueves)) {
                    $nolaborables = $this->em->getRepository('Entity\NoLaborables')->findAll();
                    foreach ($nolaborables as $row) {
                        $log_fechas = $row->getFecha();
                        if ($log_fechas->format('Y/m/d') == $frecuencias_cap) {
                            return $this->feriadoLunesJueves($frecuencias_cap, $date, $datetime3);
                        }
                    }
                }
                if (date('N', $date) == self::$viernes) {
                    $nolaborables = $this->em->getRepository('Entity\NoLaborables')->findAll();
                    foreach ($nolaborables as $row) {
                        $log_fechas = $row->getFecha();
                        if ($log_fechas->format('Y/m/d') == $frecuencias_cap) {
                            return $this->feriadoViernes($frecuencias_cap, $date, $datetime3);
                        }
                    }
                } return $frecuencias_int;
            }
        }
    }

    public function agregarMeses($date, $months) {

        $init = clone $date;
        $modifier = $months . ' months';
        $back_modifier = -$months . ' months';

        $date->modify($modifier);
        $back_to_init = clone $date;
        $back_to_init->modify($back_modifier);

        while ($init->format('m') != $back_to_init->format('m')) {
            $date->modify('-1 day');
            $back_to_init = clone $date;
            $back_to_init->modify($back_modifier);
        }return $back_to_init;
    }

}
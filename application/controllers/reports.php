<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reports extends CI_Controller {

    static private $caracasDateZone = 'America/Caracas';
    private $em;
    static private $act = 'Actual';
    static private $mesEstatico = '30';
    static private $Anio360 = '360';
    static private $Anio365 = '365';
    private $entidadPrestamosAll;
    private $entidadReportesAll;

    //   private $listaPrestamos;
    //  private $frecuencias_cap;

    public function __construct() {
        parent::__construct();
        // Your own constructor code
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
        $this->entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findAll();
    }

    public function index() {
        
    }

    public function frecuencias() {
        //**** Reportes ***//
        $em = $this->em;
        $entidadPrestamos = $this->entidadPrestamosAll;
        $columnaFechaCobro = array();
        $columnaFechaCapital = array();
        $columnaFechaPago=array();

        foreach ($entidadPrestamos as $u) {


            $listaFrecu = $this->em->getRepository('Entity\Frecuencias')->find($u->getIdFrecuenciaInteres());
            $listaFrecuCap = $this->em->getRepository('Entity\Frecuencias')->find($u->getIdFrecuenciaCapital());



            $periodicidad = $listaFrecu->getPeriodicidad();
            $periodicidad_cap = $listaFrecuCap->getPeriodicidad();
            $fechaIni = $u->getFechaInicio()->format('Y/m/d');
            $fechaFin = $u->getFechaVto()->format('Y/m/d');
            $datetime1 = new DateTime($fechaIni);
            $datetime2 = new DateTime($fechaFin);
            $datetime3 = new DateTime($fechaIni);

            /* echo "Id: " . $id . "Monto: " . $u->getMonto() . "Frecuencia Interes:" . $periodicidad . "=" . $nombrePerio . /* "Frecuencia Capital: " . $periodicidad_cap .
              "Plazo:" . $totalMes . "-  Monto: " . $u->getMonto() . "-Inicio: " . $fechaIni . "-Fin: " . $fechaFin . "<br/>"; */

            $i = 1;
            while ($datetime1 <= $datetime2) {

                $frecuencias_int = $datetime1->format('Y-m-d');
                $er = new Entity\Reportes();
                $er->setFechaCobro(new \DateTime(
                        $frecuencias_int
                ));

                // Suma periodicidad al mes 

                /*  frecuencia_cap __ Cuota Capital */
                if ($periodicidad_cap == $i) {
                    $i = 0;
                    echo 'perio_cap:' . $periodicidad_cap . "<br>";
                    echo 'date1:' . $datetime1->format('Y-m-d') . "<br>";
                    $frecuencias_cap = $datetime1->format('Y-m-d');
                    $columnaFechaCapital[] = $frecuencias_cap;


                    $er->setFechaCapital(new \DateTime($frecuencias_cap));

                    /* Sabados y domingos , Feriados _ Fecha de pago */

                    /*  Rodar fecha de pago si es Fin de semana */
                    $date = strtotime($frecuencias_cap);
                    $datetime3 = $datetime1->format('Y-m-d');

                    /*  Insert fecha de pago si es sabado */
                    if (date('N', $date) == '6') {
                        $dias = 2;

                        $fechaPago = strtotime('+' . $dias . ' day', strtotime($datetime3));
                        $fechaPago = date('Y-m-j', $fechaPago);//-----J?
                        echo "Era..Sabado........" . $fechaPago;
                        $er->setFechaPago(new \DateTime($fechaPago));
                        $columnaFechaPago[] = $fechaPago;
                    }
                    /*  Insert fecha de pago si es domingo */
                    if (date('N', $date) == '7') {
                        $dias = 1;

                        $fechaPago = strtotime('+' . $dias . ' day', strtotime($datetime3));
                        $fechaPago = date('Y-m-j', $fechaPago); //-----J?
                        echo "Era.. Domingo........" . $fechaPago;
                        $er->setFechaPago(new \DateTime($fechaPago));
                        $columnaFechaPago[] = $fechaPago;
                    }

                    /* Insert fecha de pago si es feriado */
                    if (date('N', $date) == '1' || (date('N', $date) == '2') || (date('N', $date) == '3') || (date('N', $date) == '4') || (date('N', $date) == '5')) {
                        $fechas = $frecuencias_cap;
                        $nolaborables = $em->getRepository('Entity\NoLaborables')->findAll();
                        foreach ($nolaborables as $row) {
                            $log_fechas = $row->getFecha();
                            $f = $log_fechas->format('Y-m-d');
                            $date = strtotime($frecuencias_cap);

                            if ($f == $frecuencias_cap) {
                                $dias = 1;
                                $fechaPago = strtotime('+' . $dias . 'day', strtotime($datetime3));
                                $fechaPago = date('Y-m-d', $fechaPago);
                                echo "Era.. Feriado........" . $fechaPago . "<br>";
                                $er->setFechaPago(new \DateTime($fechaPago));
                                $columnaFechaPago[] = $fechaPago;
                            }
                        }
                    }
                }
                else
                    $columnaFechaCapital[] = null;
                    $columnaFechaPago[]=$frecuencias_int;
                
                $datetime1->modify("+$periodicidad month");
                echo "Fecha de cobro: " . $frecuencias_int . "<br/>";
                $er->setFechaCobro(new \DateTime($frecuencias_int));
                $columnaFechaCobro[] = $frecuencias_int;  
                
                $er->setIdPrestamo($u);
                $em->persist($er);
                $em->flush();

                $i++;
            }
        }
        $this->viewInteresAdelantado();
        foreach($columnaFechaCobro as $i => $fechaCobro)
        {
            echo ($i+1)." ".$fechaCobro." ------------- ".$columnaFechaPago[$i]." ------------- ".$columnaFechaCapital[$i]."</br>";
        }
       
    }

    public function viewInteresAdelantado() {

        $entidadResportes = $this->entidadReportesAll;


        foreach ($entidadResportes as $row) {
            if (empty($row->getFechaPago())) {
                $fechaCobro = $row->getFechaCobro()->format('Y-m-d');
                //  echo " --" . $row->getFechaPago() . " --" . $row->getIdReportes() . " --" . $fechaCobro . "<br>";
                $fecha_cobro = new DateTime($fechaCobro);
                $row->setFechaPago($fecha_cobro);
                $this->em->persist($row);
                $this->em->flush();
            }
        }
    }

    public function calculoCuotaFija() {

        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamo) {

            $frec_capital = $this->em->getRepository('Entity\Frecuencias')->find($prestamo->getIdFrecuenciaCapital());
            $periodicidad_cap = $frec_capital->getPeriodicidad();
            $listaReport = $this->em->getRepository('Entity\Reportes')->findByIdPrestamo($prestamo);
            $monto = $prestamo->getMonto();
            /* echo "Periodicidad" . $periodicidad_cap;
              echo "Inicio: " . $fechaInicio->format('Y-m-d') . "Vto: " . $fechaVto->format('Y-m-d')
              . "Mes: " . $prestamo->getMes() . " A#o: " . $prestamo->getAno() . "ID  :" . "<br>"; */

            $arr_length = count($listaReport);
            $cantidadCapital = $arr_length / $periodicidad_cap;
            $cuotaCapitalFrecuencia = $prestamo->getMonto() / $cantidadCapital;

            foreach ($listaReport as $reporte) {

                $id_prestamo_report = $reporte->getIdPrestamo()->getIdPrestamo();
                $id_report = $reporte->getIdReportes();
                $fechaCapital = $reporte->getFechaCapital();
                //   echo $fechaCobro->format('Y-m-d');
                $diasMesActual = $this->mesActual($id_report);
                $diasAnioActual = $this->anioActual($id_report);
                $tipoMes = $this->tipoMes($id_prestamo_report);
                $tipoAnio = $this->tipoAnio($id_prestamo_report);
                $restante = $this->restante($cuotaCapitalFrecuencia, $monto, $id_prestamo_report, $fechaCapital);
                $fechaCapital_report = $this->fechaCapital(
                        $fechaCapital, $id_report, $cuotaCapitalFrecuencia, $id_report, $diasMesActual, $tipoMes, $diasAnioActual, $tipoAnio//,$restante
                );


                if ($tipoMes === self::$act) {

                    if ($tipoAnio === self::$act) {
                        $fechaAct = $diasMesActual / $diasAnioActual;
                     
                    }
                    if ($tipoAnio === self::$Anio360 || $tipoAnio === self::$Anio365) {
                        $fechaAct = $diasMesActual / $tipoAnio;
                  
                    }
                }
                if ($tipoMes === self::$mesEstatico) {

                    if ($tipoAnio === self::$act) {
                        $fechaAct = $tipoMes / $diasAnioActual;
                    }
                    if ($tipoAnio === self::$Anio360 || $tipoAnio === self::$Anio365) {
                        $fechaAct = $tipoMes / $tipoAnio;
                    }
                }
            }
        }
    }

    /* Calcula cantidad de dias entre un rango por id reporte */

    public function mesActual($id_report) {
        $entidadResportes = $this->entidadReportesAll;

        foreach ($entidadResportes as $reporte) {
            $fechaCobro = $reporte->getFechaCobro();
            $fechaPago = $reporte->getFechaPago();
            $fecha = $fechaCobro->diff($fechaPago);
            $totalMesDif = $fecha->d;
            $mesFecha = $fechaCobro->format('m');
            $anoFecha = $fechaCobro->format('Y');

            if ($id_report == $reporte->getIdReportes()) {
                $cal_days_in_month = cal_days_in_month(CAL_GREGORIAN, $mesFecha, $anoFecha);
                $diasDelMes = $cal_days_in_month + $totalMesDif;
                return $diasDelMes;
            }
        }
    }

    /* Calcula cantidad de dias entre un rango por id reporte */

    public function anioActual($id_report) {
        $entidadResportes = $this->entidadReportesAll;

        foreach ($entidadResportes as $reporte) {
            $fechaCobro = $reporte->getFechaCobro();
            $fechaPago = $reporte->getFechaPago();
            $anioCobro = $fechaCobro->format('Y');
            $anioPago = $fechaPago->format('Y');

            if ($id_report == $reporte->getIdReportes()) {
                $fechaIni = $anioCobro . + '-01' . +'-01';
                $fechaFin = $anioPago . + '-12' . +'-31';
                $fi = new DateTime($fechaIni);
                $ff = new DateTime($fechaFin);
                $fecha = $fi->diff($ff);
                $diasDelAnio = $fecha->format('%R%a dias') + 1;
                return $diasDelAnio;
            }
        }
    }

    /* Capturar tipo de mes segun id prestamo */

    public function tipoMes($id_prestamo_report) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {
            $mes = $prestamos->getMes();
            if ($id_prestamo_report == $prestamos->getIdPrestamo()) {
                if ($mes == self::$act) {
                    $result = self::$act;
                    return $result;
                }
                if ($mes == self::$mesEstatico) {
                    $result = self::$mesEstatico;
                    return $result;
                }
            }
        }
    }

    /* Capturar tipo de mes segun id prestamo */

    public function tipoAnio($id_prestamo_report) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {
            $anio = $prestamos->getAno();
            if ($id_prestamo_report == $prestamos->getIdPrestamo()) {

                if ($anio == self::$act) {
                    $result = self::$act;
                    return $result;
                }
                if ($anio == self::$Anio360) {
                    $result = self::$Anio360;
                    return $result;
                }
                if ($anio == self::$Anio365) {
                    $result = self::$Anio365;
                    return $result;
                }
            }
        }
    }

    /* Metodo captura de resultados de cuota fija */

    public function fechaCapital($fechaCapital, $id_report, $cuotaCapitalFrecuencia, $id_report, $diasMesActual, $tipoMes, $tipoAnio, $diasAnioActual) {

        $entidadResportes = $this->entidadReportesAll;

        foreach ($entidadResportes as $reporte) {

            //Si la fecha capital es Null

            if ($id_report == $reporte->getIdReportes()) {
                if (empty($fechaCapital)) {
                    $result = $reporte->getFechaCapital() . '|' .
                            $reporte->getFechaPago()->format('Y-m-d') . '|' /* . $cuotaCapitalFrecuencia */
                            . '| Id reporte: ' . $id_report . '| Dias: ' . $diasMesActual . '| Tipo mes: ' . $tipoMes . '| Tipo Anio: ' . $tipoAnio . $diasAnioActual . "<br>";
                    return $result;
                }
                //Si la fecha capital =!Null   
                else {
                    $result = $reporte->getFechaCapital()->format('Y-m-d') . '|' .
                            $reporte->getFechaPago()->format('Y-m-d') . '|' . $cuotaCapitalFrecuencia
                            . '| Id reporte: ' . $id_report . '| Dias: ' . $diasMesActual . '| Tipo mes: ' . $tipoMes . '| Tipo Anio: ' . $tipoAnio . $diasAnioActual . "<br>";


                    return $result;
                }
            }

            //  $monto-t=$cuotaCapitalFrecuencia;
        }
    }

    public function restante($cuotaCapitalFrecuencia, $monto, $id_prestamo_report, $fechaCapital) {

        $entidadResportes = $this->entidadReportesAll;
        foreach ($entidadResportes as $reporte) {
            if (($id_prestamo_report == $reporte->getIdPrestamo()->getIdPrestamo())/* && ($reporte->getIdReportes()==$id) */) {
                //  $fechaCapital = $reporte->getFechaCapital();
                //  echo $fechaCapital;
                while ($monto >= 0) {

                    if (empty($fechaCapital)) {
                        //echo $reporte->getIdReportes() . $fechaCapital . '|' .$monto. '<br>';
                        $result = $monto;
                        return $result;
                    } else {
                        //  echo $reporte->getIdReportes() . '|' . $fechaCapital->format('Y-m-d') . '|' . $cuotaCapitalFrecuencia . $monto . '<br>';
                        $result = $monto;
                        return $result;
                        //   return $result;
                    } $monto -=$cuotaCapitalFrecuencia;
                }
            }
            // }
        }
        //  }
    }

}

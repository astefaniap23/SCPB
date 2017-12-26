<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
require_once 'creditsrequested.php';

class ValuesSelected extends CI_Controller {

    private $em;
    static private $false = '0';
    static private $true = '1';
    static private $act = 'Actual';
    static private $mesEstatico = '30';
    static private $Anio360 = '360';
    static private $Anio365 = '365';
    private $entidadPrestamosAll;
    private $entidadReportesAll;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
        $this->entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findAll();
    }

    /* Calcula cantidad de dias entre un rango por id reporte */

    public function mesActual($id, $frecuencias_int, $columnaFechaPago) {
        $entidadPrestamos = $this->entidadPrestamosAll;
        $fechaIni = new DateTime($frecuencias_int);
        $fechaFin = new DateTime($columnaFechaPago);
        foreach ($entidadPrestamos as $prestamos) {
            if ($id == $prestamos->getIdPrestamo()) {
                $fecha = $fechaIni->diff($fechaFin);
                $totalMesDif = $fecha->d;
                $mesFecha = $fechaIni->format('m');
                $anoFecha = $fechaIni->format('Y');
                $cal_days_in_month = cal_days_in_month(CAL_GREGORIAN, $mesFecha, $anoFecha);
                $diasDelMes = $cal_days_in_month + $totalMesDif;
                return $diasDelMes;
            }
        }
    }

    /* Calcula cantidad de dias entre un rango por id reporte */

    public function anioActual($id, $frecuencias_int) {
        $frecuencia_int= new DateTime($frecuencias_int);
        $entidadPrestamos = $this->entidadPrestamosAll;
        $anioCobro = $frecuencia_int->format('Y');
      
        foreach ($entidadPrestamos as $prestamos) {

            if ($id == $prestamos->getIdPrestamo()) {
                $fechaIni = $anioCobro . + '-01' . +'-01';
                $fechaFin = $anioCobro . + '-12' . +'-31';
                $fi = new DateTime($fechaIni);
                $ff = new DateTime($fechaFin);
                $fecha = $fi->diff($ff);
                $diasDelAnio = $fecha->format('%R%a dias') + 1;
                return $diasDelAnio;
            }
        }
    }

    /* Capturar tipo de mes segun id prestamo */

    public function tipoMes($id, $frecuencias_int, $columnaFechaPago) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {
            $mes = $prestamos->getMes();
            if ($id == $prestamos->getIdPrestamo()) {
                if ($mes == self::$act) {
                    $result = $this->mesActual($id, $frecuencias_int, $columnaFechaPago);
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

    public function tipoAnio($id, $frecuencias_int) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {
            $anio = $prestamos->getAno();
            if ($id == $prestamos->getIdPrestamo()) {

                if ($anio == self::$act) {
                    $result = $this->anioActual($id, $frecuencias_int);
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

    /* Capturar tipo de mes segun id prestamo */

    public function tipoInteres($id) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamos) {
            $anio = $prestamos->getAno();
            if ($id == $prestamos->getIdPrestamo()) {
                if ($prestamos->getInteresAdelantado() == self::$true) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    public function calculoMesAnio($id, $frecuencias_int, $columnaFechaPago) {

        $entidadPrestamos = $this->entidadPrestamosAll;
        $tipoAnio = $this->tipoAnio($id, $frecuencias_int);
        $tipoMes = $this->tipoMes($id, $frecuencias_int, $columnaFechaPago);
        foreach ($entidadPrestamos as $prestamos) {
            if ($id == $prestamos->getIdPrestamo()) {
                $fechaAct = $tipoMes / $tipoAnio;
                return $fechaAct;
            }
        }
    }

    public function tipoCalculo($id) {

        $entidadPrestamos = $this->entidadPrestamosAll;
        $creditsrequested = new CreditsRequested();
        foreach ($entidadPrestamos as $prestamo) {

            if ($id == $prestamo->getIdPrestamo()) {
                $intAdelantado = $prestamo->getInteresAdelantado();
                $capAdelantado = $prestamo->getCapitalAdelantado();
                $cuotaFija = $prestamo->getCuotaFija();
                //////////////////////////////////
         
                $listaFrecu = $this->em->getRepository('Entity\Frecuencias')->find($prestamo->getIdFrecuenciaInteres());
                $listaFrecuCap = $this->em->getRepository('Entity\Frecuencias')->find($prestamo->getIdFrecuenciaCapital());
                $periodicidad = $listaFrecu->getPeriodicidad();
                $periodicidad_cap = $listaFrecuCap->getPeriodicidad();
                $fechaIni = $prestamo->getFechaInicio()->format('Y/m/d');
                $fechaFin = $prestamo->getFechaVto()->format('Y/m/d');
                $datetime1 = new DateTime($fechaIni);
                $datetime2 = new DateTime($fechaFin);
                $datetime3 = new DateTime($fechaIni);
                 $columnaPctInt = $prestamo->getPorcentajeInt();
                
                
                ///////////////////////////////////////
                if ($intAdelantado == self::$true) {
                     $calculo= $creditsrequested->calculoIntAdelantado($id,$periodicidad,$periodicidad_cap,
                             $datetime1,$datetime2,$datetime3,$prestamo,$columnaPctInt);
              
                }
                if ($capAdelantado == self::$true) {
                   // echo $capAdelantado;
                }
                if ($cuotaFija == self::$true) {
                   $calculo= $creditsrequested->calculoCuotaFija($id, $periodicidad, $periodicidad_cap, 
                           $datetime1, $datetime2, $datetime3, $prestamo, $columnaPctInt);
                }
                ///////////
                if ($intAdelantado == self::$false) {
                  //  echo $intAdelantado;
                }
                if ($capAdelantado == self::$false) {
                  ///  echo $capAdelantado;
                }
                if ($cuotaFija == self::$false) { // 
                   // echo $cuotaFija;
                }
                if (($intAdelantado == self::$true) && ($cuotaFija == self::$true)) {
                    
                }
                if (($intAdelantado == self::$false) && ($capAdelantado == self::$false) && ($cuotaFija == self::$false)) {
                   $calculo= $creditsrequested->calculoFechas($id, $periodicidad, $periodicidad_cap, 
                           $datetime1, $datetime2, $datetime3, $prestamo, $columnaPctInt);
                }
            }
        }
        return $calculo;
       // echo json_encode($calculo);
    }
    ////
    
    /////
}

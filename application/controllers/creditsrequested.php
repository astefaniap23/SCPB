<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
require_once 'calculatordates.php';
require_once 'valuesselected.php';

class CreditsRequested extends CI_Controller {

    private $entidadPrestamosAll;
    private $em;
    private $entidadReportesAll;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
        $this->entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findAll();
    }

    public function index() {
        $objetoseleciondo = $this->input->get('objetoseleciondo');

        if ($this->input->get('tipoTransaccion') == 'listar') {
            $this->listar($objetoseleciondo);
        } else if ($this->input->get('tipoTransaccion') == 'editar') {
            $this->editar($objetoseleciondo);
        }
    }

    public function listar($objetoseleciondo) {
        $valuesselected = new ValuesSelected();
        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            if ($objetoseleciondo == $prestamo->getIdPrestamo()) {
                $data = $valuesselected->tipoCalculo($objetoseleciondo);
            }
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data,
        )));
    }

    public function calculoFechas($id, $periodicidad, $periodicidad_cap, $datetime1, $datetime2, $datetime3, $prestamo, $columnaPctInt) {
   

                $cuotaCapital = $this->cuotaCapital($id, $datetime1, $datetime2);
                $i = 1;
                $c = 0;
                $monto = $prestamo->getMonto();

                while ($datetime1 <= $datetime2) {

                    $frecuencias_int = $datetime1->format('Y/m/t');
                    //                $columnaFechaPago = $frecuencias_int;
                    $columnaFechaCapital = 0;
                    $columnarestante = $monto;
                    $columnaPctInt = $prestamo->getPorcentajeInt();
                    $interesMonto = $this->interesMonto($id, $columnarestante, $columnaPctInt);

                    if ($periodicidad_cap === $i) {
                        $i = 0;
                        $columnaFechaCapital = $cuotaCapital;
                        $columnarestante -=$cuotaCapital;
                    }
                    $frecuencias_cap = $datetime1->format('Y/m/t');
                    $date = strtotime($frecuencias_cap);
                    $datetime3 = $datetime1->format('Y/m/t');
                    $calculatordates = new CalculatorDates();
                    $columnaFechaPago = $calculatordates->calculadoraFechas($id, $datetime3, $frecuencias_int, $frecuencias_cap, $date);
                    $datetime1->modify("+$periodicidad month");
                    $i++;
                    $c++;
                    $valuesselected = new ValuesSelected();
                    $calculoMesAnio = $valuesselected->calculoMesAnio($id, $frecuencias_int, $columnaFechaPago);
                    $columnaTotalInteres = $interesMonto * $calculoMesAnio;
                    $columnaTotalCuota = $columnaFechaCapital + $columnaTotalInteres;

                    $array[] = ['numero' => $c, 'fecha_cobro' => $frecuencias_int, 'fecha_pago' => $columnaFechaPago,
                        'interes' => $columnaPctInt, 'cuota_capital' => $columnaFechaCapital,
                        'restante' => $columnarestante, 'total_interes' => $columnaTotalInteres,
                        'total_cuota' => $columnaTotalCuota, 'clave' => $prestamo->getIdPrestamo()];
                    $monto-=$columnaFechaCapital;
                }
                return $array;
      //      }
      //  }
    }

    public function calculoCuotaFija($id, $periodicidad, $periodicidad_cap, $datetime1, $datetime2, $datetime3, $prestamo, $columnaPctInt) {


                //  $cuotaCapital = $this->cuotaCapital($id, $datetime1, $datetime2);
                $i = 1;
                $c = 0;
                $monto = $prestamo->getMonto();
                $dividendo = $this->dividendo($id, $datetime1, $datetime2);
                $columnaTotalCuota = ($prestamo->getMonto() * (($prestamo->getPorcentajeInt() / 12) / 100)) / (1 - (1 / pow(((($prestamo->getPorcentajeInt() / 12) / 100) + 1), ($dividendo))));

                while ($datetime1 < $datetime2) {

                    $frecuencias_int = $datetime1->format('Y/m/d');
                    //                $columnaFechaPago = $frecuencias_int;
                    $columnarestante = 0;
                    $restante = $monto;
                    $columnaPctInt = $prestamo->getPorcentajeInt();
                    // echo $columnarestante . '|'; 
                    $interesMonto = $this->interesMonto($id, $restante, $columnaPctInt);


                    if ($periodicidad_cap == $i) {
                        $i = 0;
                        $cuotaCapital = ($columnaTotalCuota - ($interesMonto / 12) );
                        $columnarestante = $restante - $cuotaCapital;
                        $restante -=$columnarestante;
                    }
                    $frecuencias_cap = $datetime1->format('Y/m/d');
                    $date = strtotime($frecuencias_cap);
                    $datetime3 = $datetime1->format('Y/m/d');
                    $calculatordates = new CalculatorDates();
                    $columnaFechaPago = $calculatordates->calculadoraFechas($id, $datetime3, $frecuencias_int, $frecuencias_cap, $date);

                    $i++;
                    $c++;

                    $columnaTotalInteres = $interesMonto / 12;

                    $array[] = ['numero' => $c, 'fecha_cobro' => $frecuencias_int, 'fecha_pago' => $columnaFechaPago,
                        'interes' => $columnaPctInt, 'cuota_capital' => $cuotaCapital,
                        'restante' => sprintf('%f', $columnarestante), 'total_interes' => $columnaTotalInteres,
                        'total_cuota' => $columnaTotalCuota, 'clave' => $prestamo->getIdPrestamo()];
                    $monto-=$restante;
                    $datetime1->modify("+$periodicidad month");
                    $datetime1 = $calculatordates->agregarMeses($datetime1, $periodicidad);
                }
                return $array;
          //  }
       // }
    }

    public function calculoIntAdelantado($id, $periodicidad, $periodicidad_cap, $datetime1, $datetime2, $datetime3, $prestamo, $columnaPctInt) {

       $entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findByIdPrestamo($id);
        foreach ($entidadReportesAll as $reporte) {
            
        }
        $tasaNueva = $this->modifica($id);
   
        $c = 0;
        $cuotaCapital = $prestamo->getMonto() / ($prestamo->getMonto() / ($this->cuotaCapital($id, $datetime1, $datetime2)) - 1);
        $i = 1;
        $p=0;
        $monto = $prestamo->getMonto();
    $columnarestante = $monto;
       
        foreach ($tasaNueva as $value){  
          //  $g=$value;
           // echo $value;
        }
         while ($columnarestante > 0) {

            $frecuencias_int = $datetime1->format('Y/m/t');
            $columnaFechaCapital = 0;
            //  $columnaPctInt = $prestamo->getPorcentajeInt();
             echo $value;
           if ($c+1 == $value) {
     
                    $columnaPctInt = $reporte->getPorcentajeInt();
                   //   $cuotaCapital = $prestamo->getMonto() /$p;
                    $interesMonto = $this->interesMonto($id, $columnarestante, $columnaPctInt);
                    
            }
            if ($periodicidad_cap == $i) {
                $i = 0;

                if ($c >= 1) {
                    $columnaFechaCapital = $cuotaCapital;
                    $columnarestante -=$cuotaCapital;
                }
               
            }
           

            $frecuencias_cap = $datetime1->format('Y/m/t');
            $date = strtotime($frecuencias_cap);
            $datetime3 = $datetime1->format('Y/m/t');
            $calculatordates = new CalculatorDates();
            $columnaFechaPago = $calculatordates->calculadoraFechas($id, $datetime3, $frecuencias_int, $frecuencias_cap, $date);
            $datetime1->modify("+$periodicidad month");
            $i++;
            $c++;
            $valuesselected = new ValuesSelected();
            $interesMonto = $this->interesMonto($id, $columnarestante, $columnaPctInt);
            $calculoMesAnio = $valuesselected->calculoMesAnio($id, $frecuencias_int, $columnaFechaPago);
            $columnaTotalInteres = $interesMonto * $calculoMesAnio;
            $columnaTotalCuota = $columnaFechaCapital + $columnaTotalInteres;
            $columnarestante = sprintf('%f', $columnarestante);

            $array[] = ['numero' => $c, 'fecha_cobro' => $frecuencias_int, 'fecha_pago' => $columnaFechaPago,
                'interes' => $columnaPctInt, 'cuota_capital' => $columnaFechaCapital,
                'restante' => $columnarestante, 'total_interes' => $columnaTotalInteres,
                'total_cuota' => $columnaTotalCuota, 'clave' => $prestamo->getIdPrestamo()];
            $monto-=$columnaFechaCapital;
            $columnarestante = $monto;
       }
        
        return $array;
       //echo json_encode($array);
      
    }

    public function modifica($id) {

        $entidadReportesAll = $this->em->getRepository('Entity\Reportes')->findByIdPrestamo($id);
        $c=array();
      //  $array[] = 0;
        foreach ($entidadReportesAll as $reporte) {

            if ($id == $reporte->getIdPrestamo()->getIdPrestamo()) {
               // $array[] = $reporte->getNumero();
                $c[]= $reporte->getNumero();
            } 
        } 
       return $c;  
    }

    public function cuotaCapital($id, $datetime1, $datetime2) {

        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            if ($id == $prestamo->getIdPrestamo()) {
                $idFreCap = $prestamo->getIdFrecuenciaCapital()->getPeriodicidad();
                $monto = $prestamo->getMonto();
                $diferencia = $datetime1->diff($datetime2);
                $numMeses = ( $diferencia->y * 12 ) + ($diferencia->m + 1 );
                $dividendo = $numMeses / $idFreCap;
                $cuotaCapital = $monto / $dividendo;
                return $cuotaCapital;
            }
        }
    }

    public function interesMonto($id, $columnarestante, $columnaPctInt) {
        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            if ($id == $prestamo->getIdPrestamo()) {
                $ineresMonto = ($columnaPctInt / 100) * ($columnarestante);
                return $ineresMonto;
            }
        }
    }

    public function dividendo($id, $datetime1, $datetime2) {

        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            if ($id == $prestamo->getIdPrestamo()) {
                $idFreCap = $prestamo->getIdFrecuenciaCapital()->getPeriodicidad();
                $diferencia = $datetime1->diff($datetime2);
                $numMeses = ( $diferencia->y * 12 ) + ($diferencia->m + 1 );
                $dividendo = $numMeses / $idFreCap;
                return $dividendo;
            }
        }
    }

    public function editar($objetoseleciondo) {
        $em = $this->em;
        $c = 0;
             
//        $entidadPrestamos = $this->entidadPrestamosAll;
//        foreach ($entidadPrestamos as $prestamo) {
//            
//        }

        $entidadReportesss = $this->em->getRepository('Entity\Reportes')->findByIdPrestamo($objetoseleciondo);
        $entidadReportes = $this->em->getRepository('Entity\Reportes')->find($this->input->get('objetoseleciondo'));
        foreach ($entidadReportesss as $reporte) {}
     
            if ($reporte->getNumero() == $this->input->get('numero')
                    ) {
                $c = 1;
                 
            
        }

        if ($c == 1) {
            $entidadReportesss->setFechaCobro(new DateTime($this->input->get('fecha_cobro')));
            $entidadReportesss->setPorcentajeInt($this->input->get('interes'));
            $entidadReportesss->setIdPrestamo($objetoseleciondo);
            $entidadReportesss->setNumero($this->input->get('numero'));
            $this->em->persist($entidadReportesss);
            $this->em->flush();
          
//            echo 'rxiste';
        } else {
//            /*  Guardar en BD */
            $u = new Entity\Reportes();

            $u->setFechaCobro(new DateTime($this->input->get('fecha_cobro')));
            $u->setPorcentajeInt($this->input->get('interes'));
            $u->setIdPrestamo($objetoseleciondo);
            $u->setNumero($this->input->get('numero'));
            $em->persist($u);
            $em->flush();
//echo 'nuevo';
            // Doctrine\DBAL\Logging\EchoSQLLogger::$interes;
        }
    }

}
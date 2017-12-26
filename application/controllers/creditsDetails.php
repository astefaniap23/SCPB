<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CreditsDetails extends CI_Controller {

    private $entidadPrestamosAll;
    private $em;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
    }

    public function index() {

        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            $id = $this->input->get('dato');
            if ($id == $prestamo->getIdPrestamo()) {
               $t = $this->mostrar($id);
                $data = $t;
            }
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data,
        )));
    }

    public function mostrar($id) {
        $entidadPrestamos = $this->entidadPrestamosAll;

        foreach ($entidadPrestamos as $prestamo) {
 
            if ($id == $prestamo->getIdPrestamo()) {
            
                $array[] = ['nombre' => $prestamo->getNombre(), 'banco' => $prestamo->getIdBanco(), 'monto' => $prestamo->getMonto(),
                    'fecha_ini' => $prestamo->getFechaInicio(), 'fecha_vto' => $prestamo->getFechaVto(),
                    'mes' => $prestamo->getMes(), 'ano' => $prestamo->getAno(),
                    'frec_int' => $prestamo->getIdFrecuenciaInteres(),'frec_cap'=>$prestamo->getIdFrecuenciaCapital(),
                    'int_adelantado'=>$prestamo->getInteresAdelantado(),'cap_adelantado'=>$prestamo->getCapitalAdelantado(),
                    'cuota_fija'=>$prestamo->getCuotaFija(),'porcentaje_int'=>$prestamo->getPorcentajeInt()];

                return $array;
            }
        }
    }
    

}

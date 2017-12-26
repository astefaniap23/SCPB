<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
require_once 'valuesselected.php';

class StatusCredits extends CI_Controller {

    private $entidadPrestamosAll;
    private $em;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
    }

    public function index() {

        if ($this->input->get('tipoTransaccion') == 'eliminar') {
          $objetoseleciondo = $this->input->get('objetoseleciondo');
          //   $this->eliminar($objetoseleciondo);
          }
          if ($this->input->get('tipoTransaccion') == 'statusCreditoSolictado') {
          $objetoseleciondo = $this->input->get('objetoseleciondo');
          // $this->statusCredito($objetoseleciondo);
          $this->mostrar($objetoseleciondo);
          } 
    }

    public function statusCredito($id) {

        $valuesselected = new ValuesSelected();
        $arrayvaluesselected = $valuesselected->tipoCalculo($id);
        $datetime = new \DateTime();
        $existe = false;
        $entidadPrestamos = $this->em->getRepository('Entity\Prestamos')->findByIdPrestamo($id);
        foreach ($entidadPrestamos as $prestamo) {

            foreach ($arrayvaluesselected as $value) {
                $datearrays = $value['fecha_cobro'];
                $datetimearray = new DateTime($datearrays);
                if ($datetimearray->format('Y-m') == $datetime->format('Y-m')) {
                    $existe = true;
                    //  echo $datetimearray->format('Y-m') . ' == ' . $datetime->format('Y-m');
                    $array[] = [
                        'monto_original' => $prestamo->getMonto(), 'liquidado' => ($prestamo->getMonto() - $value['restante']),
                        'int_actual' => $value['interes'], 'saldo_actual' => $value['restante'],
                        'fecha_pago' => $value['fecha_pago'], 'fecha_vto' => $prestamo->getFechaVto()->format('Y-m-d')];
                     return $array;
                    //echo json_encode($array);
                }
            }
            if ($existe == false) {
                // echo 'no existe';
                $array[] = [
                    'monto_original' => $prestamo->getMonto(), 'liquidado' => ($prestamo->getMonto() - $value['restante']),
                    'int_actual' => $value['interes'], 'saldo_actual' => $value['restante'],
                    'fecha_pago' => $prestamo->getFechaVto()->format('Y/m/d'), 'fecha_vto' => $prestamo->getFechaVto()->format('Y/m/d')];
                  return $array;
               //  echo json_encode($array);
            }
        }
    }

    public function mostrar() {

        $entidadPrestamos = $this->entidadPrestamosAll;
        foreach ($entidadPrestamos as $prestamo) {
            $id = $this->input->get('dato');
            if ($id == $prestamo->getIdPrestamo()) {
                $data = $this->statusCredito($id);
            }
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data,
        )));
    }

}

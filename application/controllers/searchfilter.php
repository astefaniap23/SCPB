<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class SearchFilter extends CI_Controller {

   private $entidadPrestamosAll;
    private $em;

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
        // $this->load->library('session');
        // You*r own constructor code
    }


    public function bandejaPrincipal() {
        
      //$em = $this->em;
        $banco = $this->input->post('banco');
        $entidadPrestamos = $this->entidadPrestamosAll;
      //  $this->load->library('PrincipalBox');
        
        foreach ($entidadPrestamos as $prestamo) {
            $listaBanco = $this->em->getRepository('Entity\Bancos')->find($prestamo->getIdBanco());
            if ($banco==$listaBanco){
                 $data [] = array(
                'nombre' => $prestamo->getNombre(),
                'banco'=>$listaBanco->getNombre(),
                'monto' => $prestamo->getMonto(),
                'fechaInicio' => $prestamo->getFechaInicio()->format('Y-m-d'),
                'fechaVto' => $prestamo->getFechaVto()->format('Y-m-d'),
                
              ); 
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data
        )));
    }

}
}

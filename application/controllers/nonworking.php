<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class NonWorking extends CI_Controller {

    private $em;

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->em = $this->doctrine->em;

        // You*r own constructor code
    }

    /* Redirecciona a otras funciones */

    public function index() {


        if ($this->input->get('tipoTransaccion') == 'eliminar') {
            $objetoseleciondo = $this->input->get('objetoseleciondo');
            $this->eliminar($objetoseleciondo);
        }
        if ($this->input->get('tipoTransaccion') == 'ingresar') {
            $this->insertarNuevo();
        }
        if ($this->input->get('tipoTransaccion') == 'mostrar') {
            $this->mostrar();
        }
    }

    /*  Insertar dia no laborable */

    public function insertarNuevo() {
        $em = $this->em;

        /* Capturando valores del formulario */
        $fecha = $this->input->post('fecha');
        $nombre = $this->input->post('nombre');
       
        
        /*  Guardar en BD */
        $u = new Entity\NoLaborables();
        $u->setFecha(new DateTime($fecha));
        $u->setNombre($nombre);
        $em->persist($u);
        $em->flush();

        /*   Pruebas para el success */
        if (($em->persist($u))) {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'true')));
        } else {
            //No sucessfull
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'true')));
        }
    }

    /* Monstrar dias no laborables */

    public function mostrar() {
        $entidadNoLaborablesAll = $this->em->getRepository('Entity\NoLaborables')->findAll();
        foreach ($entidadNoLaborablesAll as $nolaborable) {
            $data [] = array(
                'id' => $nolaborable->getIdNoLaborables(),
                'nombre' => $nolaborable->getNombre(),
                'fecha' => $nolaborable->getFecha()->format('Y/m/d'),
            );
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('data' => $data
        )));
    }
    
    /*      Eliminar el objeto seleccionado */
    public function eliminar($objetoseleciondo) {

        $entidadNoLaborables = $this->em->getRepository('Entity\NoLaborables')->find($objetoseleciondo);

        $this->em->remove($entidadNoLaborables);
        $this->em->flush();
        $this->em->clear();
        $this->mostrar();
    }

}

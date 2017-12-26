<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Banks extends CI_Controller {

    private $em;
    private $entidadBancosAll;

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->em = $this->doctrine->em;
        $this->entidadBancosAll = $this->em->getRepository('Entity\Bancos')->findAll();

        // You*r own constructor code
    }

    /*  Insertar nuevo banco */

    public function insertarNuevo() {
        $em = $this->em;

        /* Capturando valores del formulario */
        $nombre = $this->input->post('nombre');

        /*  Guardar en BD */
        $u = new Entity\Bancos();
        $u->setNombre($nombre);
        $em->persist($u);
        $em->flush();

        /*   Pruebas para el success */
        if (($em->persist($u))) {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'true',)));
        } else {
            //No sucessfull
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'true')));
        }
    }

    /* Monstrar listado de bancos */

    public function index() {

        if ($this->input->get('tipoTransaccion') == 'eliminar') {
            $objetoseleciondo = $this->input->get('objetoseleciondo');
            $this->eliminar($objetoseleciondo);
        }
        if ($this->input->get('tipoTransaccion') == 'mostrar') {

            $this->mostrar();
        }
    }

    public function eliminar($objetoseleciondo) {

        if ($this->em->getRepository('Entity\Prestamos')->findByIdBanco($objetoseleciondo)) {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => true)));
        } else {
            $entidadBancos = $this->em->getRepository('Entity\Bancos')->find($objetoseleciondo);
            $this->em->remove($entidadBancos);
            $this->em->flush();
            $this->em->clear();
            $this->mostrar();
            
             $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'failure')));
        }
    }

    public function mostrar() {
        $entidadBancosAll = $this->em->getRepository('Entity\Bancos')->findAll();
        foreach ($entidadBancosAll as $banco) {
            $data [] = array(
                'id' => $banco->getIdBanco(),
                'nombre' => $banco->getNombre(),
            );
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('data' => $data
        )));
    }

    public function validar($objetoseleciondo) {
        if ($this->em->getRepository('Entity\Prestamos')->find($objetoseleciondo)) {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'false',)));
        }
    }

}

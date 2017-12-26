<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Frequency extends CI_Controller {

    static private $interes = 'Interes';
    static private $capital = 'Capital';
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

        if ($this->input->get('tipoTransaccion') == 'mostrar') {
            $this->mostrar();
        }
    }

    /*  Insertar nueva frecuencia */

    public function insertarNuevo() {
        $em = $this->em;
        /* Capturando valores del formulario */
        $periodicidad = $this->input->post('periodicidad');
        $nombre = $this->input->post('nombre');
        $frecuencia = $this->input->post('categoria');
        $categoriasFrecuencia = $this->em->getRepository('Entity\CategoriasFrecuencia')->findByIdCategoriasFrecuencia($frecuencia);
        foreach ($categoriasFrecuencia as $categoria_frecuencia) {  }

        /*  Guardar en BD */
        $u = new Entity\Frecuencias();
        $u->setIdCategoriasFrecuencia($categoria_frecuencia);
        $u->setPeriodicidad($periodicidad);
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

    /* Monstrar listado de frecuencias */

    public function mostrar() {

        $entidadfrecuencias = $this->em->getRepository('Entity\Frecuencias')->findAll();

        foreach ($entidadfrecuencias as $frecuencia) {
            $categoriasFrecuencia = $this->em->getRepository('Entity\CategoriasFrecuencia')->find($frecuencia->getIdCategoriasFrecuencia());
            //$data []= $row->getNombre();
            $data [] = array(
                'id' => $frecuencia->getIdFrecuencia(),
                'categoria' => $categoriasFrecuencia->getNombre(),
                'periodicidad' => $frecuencia->getPeriodicidad(),
                'nombre' => $frecuencia->getNombre());
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('data' => $data
        )));
    }

    public function categoriafrecuencias() {
        //---- Busca en la BD listas de categorias de frecuencias llenar ComboBox Categoria


        $categoriasFrecuencia = $this->em->getRepository('Entity\CategoriasFrecuencia')->findAll();

        foreach ($categoriasFrecuencia as $frecuencia) {

            //$data []= $row->getNombre();
            $data [] = array(
                'id' => $frecuencia->getIdCategoriasFrecuencia(),
                'nombre' => $frecuencia->getNombre());
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data
        )));
    }

    public function eliminar($objetoseleciondo) {

        $entidadfrecuencias = $this->em->getRepository('Entity\Frecuencias')->find($objetoseleciondo);

        $this->em->remove($entidadfrecuencias);
        $this->em->flush();
        $this->em->clear();
        $this->mostrar();
    }

}

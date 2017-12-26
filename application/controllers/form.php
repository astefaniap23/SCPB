<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Form extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // Your own constructor code
    }

    public function index() {

        $em = $this->doctrine->em;

        /* Capturando valores del formulario */

        $nombre = $this->input->post('nombre');
        $monto = $this->input->post('monto');
        $monto_formateado=str_replace(',','',$monto); 
        $fecha_ini = $this->input->post('fecha_ini');
        $fecha_vto = $this->input->post('fecha_vto');
        $mes = $this->input->post('mes');
        $ano = $this->input->post('ano');
        $frec_int = $this->input->post('frec_int');
        $listaFrecuInt = $em->getRepository('Entity\Frecuencias')->findByIdFrecuencia($frec_int);
        $frec_cap = $this->input->post('frec_cap');
        $listaFrecuCap = $em->getRepository('Entity\Frecuencias')->findByIdFrecuencia($frec_cap);
        $int_adelantado = $this->input->post('int_adelantado');
        $cap_adelantado = $this->input->post('cap_adelantado');
        $cuota_fija = $this->input->post('cuota_fija');
        $porcentaje_int = $this->input->post('porcentaje_int');

        $listaBancos = $em->getRepository('Entity\Bancos')->findAll();

        foreach ($listaBancos as $banco) {
            if ($this->input->post('banco') == $banco->getIdBanco()) {
                $banco_=$banco;
            }
        }

        foreach ($listaFrecuCap as $frec_cap_) {
            $data [] = array(
                'id' => $frec_cap_->getIdFrecuencia(),
                'nombre' => $frec_cap_->getNombre());
        }

        foreach ($listaFrecuInt as $frec_int_) {
            $data [] = array(
                'id' => $frec_int_->getIdFrecuencia(),
                'nombre' => $frec_int_->getNombre());
        }

        /*  Guardar en BD */
        $u = new Entity\Prestamos();

        $u->setNombre($nombre);
        $u->setMonto($monto_formateado);
        $u->setIdBanco($banco_);
        $u->setFechaInicio(new \DateTime($fecha_ini));
        $u->setFechaVto(new \DateTime($fecha_vto));
        $u->setMes($mes);
        $u->setAno($ano);
        $u->setIdFrecuenciaInteres($frec_int_);
        $u->setIdFrecuenciaCapital($frec_cap_);
        $u->setInteresAdelantado($int_adelantado);
        $u->setCapitalAdelantado($cap_adelantado);
        $u->setCuotaFija($cuota_fija);
        $u->setPorcentajeInt($porcentaje_int);
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
                    ->set_output(json_encode(array('failure' => 'true')));
        }

        //$this->load->view('prueba', array('u' => $u));
    }

    public function frecuencia_int() {

        //---- Busca en la BD listas de frecuencias
        $em = $this->doctrine->em;

        $frecuencias_int = $em->getRepository('Entity\Frecuencias')->findAll();
        foreach ($frecuencias_int as $row) {
            $categoriaFrecuencia = $em->getRepository('Entity\CategoriasFrecuencia')->find($row->getIdCategoriasFrecuencia());
            if ($categoriaFrecuencia->getIdCategoriasFrecuencia() == '1') {

                $data [] = array(
                    'id' => $row->getIdFrecuencia(),
                    'nombre' => $row->getNombre());
            }
        }

        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data
        )));
    }

    public function frecuencia_cap() {

        //---- Busca en la BD listas de frecuencias
        $em = $this->doctrine->em;

        $frecuencias_cap = $em->getRepository('Entity\Frecuencias')->findAll();
        // $categoriaFrecuencia = $em->getRepository('Entity\CategoriasFrecuencia')->findAll();

        foreach ($frecuencias_cap as $row) {
            $categoriaFrecuencia = $em->getRepository('Entity\CategoriasFrecuencia')->find($row->getIdCategoriasFrecuencia());
            if ($categoriaFrecuencia->getIdCategoriasFrecuencia() == '2') {

                $data [] = array(
                    'id' => $row->getIdFrecuencia(),
                    'nombre' => $row->getNombre());
            }
        }

        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data
        )));
    }

    public function listaBancos() {

        //---- Busca en la BD listas de Bancos
        $em = $this->doctrine->em;

        $listarBancos = $em->getRepository('Entity\Bancos')->findAll();


        foreach ($listarBancos as $row) {
            $data [] = array(
                'id' => $row->getIdBanco(),
                'nombre' => $row->getNombre());
        }

        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('totalcount' => count($data), 'data' => $data
        )));
    }

}

<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class PrincipalBox extends CI_Controller {

    private $entidadPrestamosAll;
    private $em;
    static private $frec_int = '1';
    static private $frec_cap = '2';

    public function __construct() {
        parent::__construct();
        $this->em = $this->doctrine->em;
        $this->entidadPrestamosAll = $this->em->getRepository('Entity\Prestamos')->findAll();
    }

    public function index() {
        $entidadPrestamos = $this->entidadPrestamosAll;
        $data = array();
        foreach ($entidadPrestamos as $prestamo) {

            $idBanco = $prestamo->getIdBanco()->getIdBanco();
            $idFrecInt = $prestamo->getIdFrecuenciaInteres();
            $idFrecCap = $prestamo->getIdFrecuenciaCapital();
            $banco = $this->listaBancos($idBanco);
            // echo '---------'.$idFrecCap;
            $banco = array(
                'idB' => $banco->getIdBanco(),
                'nombreB' => $banco->getNombre()
            );
            $frecuenciaint = $this->frecuencia_int($idFrecInt);
            $frecuenciaint = array(
                'idFI' => $frecuenciaint->getIdFrecuencia(),
                'nombreFI' => $frecuenciaint->getNombre()
            );
            $frecuenciacap = $this->frecuencia_cap($idFrecCap);
            $frecuenciacap = array(
                'idFC' => $frecuenciacap->getIdFrecuencia(),
                'nombreFC' => $frecuenciacap->getNombre()
            );
            $data [] = array(
                'id' => $prestamo->getIdPrestamo(),
                'nombre' => $prestamo->getNombre(),
                'banco' => $banco,
                'monto' => $prestamo->getMonto(),
                'fechaInicio' => $prestamo->getFechaInicio()->format('Y/m/d'),
                'fechaVto' => $prestamo->getFechaVto()->format('Y/m/d'),
                'mes' => $prestamo->getMes(),
                'ano' => $prestamo->getAno(),
                'frec_int' => $frecuenciaint,
                'frec_cap' => $frecuenciacap,
                'int_adelantado' => $prestamo->getInteresAdelantado(),
                'cap_adelantado' => $prestamo->getCapitalAdelantado(),
                'cuota_fija' => $prestamo->getCuotaFija(),
                'porcentaje_int' => $prestamo->getPorcentajeInt()
            );
        }
        $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(array('data' => $data
        )));
    }

    public function listaBancos($idBanco) {

        $banco = new \Entity\Bancos();
        //---- Busca en la BD listas de Bancos
        $em = $this->doctrine->em;
        $listarBancos = $em->getRepository('Entity\Bancos')->findByIdBanco($idBanco);
        foreach ($listarBancos as $row) {
            $banco->setIdBanco($row->getIdBanco());
            $banco->setNombre($row->getNombre());
        }return $banco;
    }

    public function frecuencia_int($idFrecInt) {

        $frecuencia = new \Entity\Frecuencias();
        $em = $this->doctrine->em;
        $entidadFrecuencias = $em->getRepository('Entity\Frecuencias')->findByIdFrecuencia($idFrecInt);

        foreach ($entidadFrecuencias as $row) {
            $categoriaFrecuencia = $em->getRepository('Entity\CategoriasFrecuencia')->find($row->getIdCategoriasFrecuencia());
            if ($categoriaFrecuencia->getIdCategoriasFrecuencia() == self::$frec_int) {
                $frecuencia->setIdFrecuencia($row->getIdFrecuencia());
                $frecuencia->setNombre($row->getNombre());
            }
        }
        return $frecuencia;
    }

    public function frecuencia_cap($idFrecCap) {

        $frecuencia = new \Entity\Frecuencias();
        $em = $this->doctrine->em;
        $entidadFrecuencias = $em->getRepository('Entity\Frecuencias')->findByIdFrecuencia($idFrecCap);

        foreach ($entidadFrecuencias as $row) {
            $categoriaFrecuencia = $em->getRepository('Entity\CategoriasFrecuencia')->find($row->getIdCategoriasFrecuencia());
            if ($categoriaFrecuencia->getIdCategoriasFrecuencia() == self::$frec_cap) {
                $frecuencia->setIdFrecuencia($row->getIdFrecuencia());
                $frecuencia->setNombre($row->getNombre());
            }
        }
        return $frecuencia;
    }

}

<?php

namespace Entitys;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entitys\Prestamos
 *
 * @ORM\Table(name="prestamos")
 * @ORM\Entity
 */
class Prestamos
{
    /**
     * @var integer $idPrestamo
     *
     * @ORM\Column(name="id_prestamo", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idPrestamo;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var float $monto
     *
     * @ORM\Column(name="monto", type="float", nullable=true)
     */
    private $monto;

    /**
     * @var date $fechaInicio
     *
     * @ORM\Column(name="fecha_inicio", type="date", nullable=true)
     */
    private $fechaInicio;

    /**
     * @var date $fechaVto
     *
     * @ORM\Column(name="fecha_vto", type="date", nullable=true)
     */
    private $fechaVto;

    /**
     * @var boolean $interesAdelantado
     *
     * @ORM\Column(name="interes_adelantado", type="boolean", nullable=true)
     */
    private $interesAdelantado;

    /**
     * @var boolean $capitalAdelantado
     *
     * @ORM\Column(name="capital_adelantado", type="boolean", nullable=true)
     */
    private $capitalAdelantado;

    /**
     * @var string $tasaFija
     *
     * @ORM\Column(name="tasa_fija", type="string", length=45, nullable=true)
     */
    private $tasaFija;

    /**
     * @var string $mes
     *
     * @ORM\Column(name="mes", type="string", length=11, nullable=true)
     */
    private $mes;

    /**
     * @var string $ano
     *
     * @ORM\Column(name="ano", type="string", length=11, nullable=true)
     */
    private $ano;

    /**
     * @var Entitys\Bancos
     *
     * @ORM\ManyToOne(targetEntity="Entitys\Bancos")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_banco", referencedColumnName="id_banco")
     * })
     */
    private $idBanco;

    /**
     * @var Entitys\Calculos
     *
     * @ORM\ManyToOne(targetEntity="Entitys\Calculos")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_calculo", referencedColumnName="id_calculo")
     * })
     */
    private $idCalculo;

    /**
     * @var Entitys\Frecuencias
     *
     * @ORM\ManyToOne(targetEntity="Entitys\Frecuencias")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_frecuencia_interes", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaInteres;

    /**
     * @var Entitys\Frecuencias
     *
     * @ORM\ManyToOne(targetEntity="Entitys\Frecuencias")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_frecuencia_capital", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaCapital;

    /**
     * @var Entitys\Usuarios
     *
     * @ORM\ManyToOne(targetEntity="Entitys\Usuarios")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario")
     * })
     */
    private $idUsuario;

    public function getIdPrestamo() {
        return $this->idPrestamo;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getMonto() {
        return $this->monto;
    }

    public function getFechaInicio() {
        return $this->fechaInicio;
    }

    public function getFechaVto() {
        return $this->fechaVto;
    }

    public function getInteresAdelantado() {
        return $this->interesAdelantado;
    }

    public function getCapitalAdelantado() {
        return $this->capitalAdelantado;
    }

    public function getTasaFija() {
        return $this->tasaFija;
    }

    public function getMes() {
        return $this->mes;
    }

    public function getAno() {
        return $this->ano;
    }

    public function getIdBanco() {
        return $this->idBanco;
    }

    public function getIdCalculo() {
        return $this->idCalculo;
    }

    public function getIdFrecuenciaInteres() {
        return $this->idFrecuenciaInteres;
    }

    public function getIdFrecuenciaCapital() {
        return $this->idFrecuenciaCapital;
    }

    public function getIdUsuario() {
        return $this->idUsuario;
    }

    public function setIdPrestamo($idPrestamo) {
        $this->idPrestamo = $idPrestamo;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setMonto($monto) {
        $this->monto = $monto;
    }

    public function setFechaInicio(date $fechaInicio) {
        $this->fechaInicio = $fechaInicio;
    }

    public function setFechaVto(date $fechaVto) {
        $this->fechaVto = $fechaVto;
    }

    public function setInteresAdelantado($interesAdelantado) {
        $this->interesAdelantado = $interesAdelantado;
    }

    public function setCapitalAdelantado($capitalAdelantado) {
        $this->capitalAdelantado = $capitalAdelantado;
    }

    public function setTasaFija($tasaFija) {
        $this->tasaFija = $tasaFija;
    }

    public function setMes($mes) {
        $this->mes = $mes;
    }

    public function setAno($ano) {
        $this->ano = $ano;
    }

    public function setIdBanco(Entitys\Bancos $idBanco) {
        $this->idBanco = $idBanco;
    }

    public function setIdCalculo(Entitys\Calculos $idCalculo) {
        $this->idCalculo = $idCalculo;
    }

    public function setIdFrecuenciaInteres(Entitys\Frecuencias $idFrecuenciaInteres) {
        $this->idFrecuenciaInteres = $idFrecuenciaInteres;
    }

    public function setIdFrecuenciaCapital(Entitys\Frecuencias $idFrecuenciaCapital) {
        $this->idFrecuenciaCapital = $idFrecuenciaCapital;
    }

    public function setIdUsuario(Entitys\Usuarios $idUsuario) {
        $this->idUsuario = $idUsuario;
    }


}
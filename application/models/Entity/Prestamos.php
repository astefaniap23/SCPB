<?php

namespace Entity;


/**
 * Entity\Prestamos
 *
 * @Table(name="prestamos")
 * @Entity
 */
class Prestamos
{
    /**
     * @var integer $idPrestamo
     *
     * @Column(name="id_prestamo", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idPrestamo;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var float $monto
     *
     * @Column(name="monto", type="float", nullable=true)
     */
    private $monto;

    /**
     * @var date $fechaInicio
     *
     * @Column(name="fecha_inicio", type="date", nullable=true)
     */
    private $fechaInicio;

    /**
     * @var date $fechaVto
     *
     * @Column(name="fecha_vto", type="date", nullable=true)
     */
    private $fechaVto;

    /**
     * @var integer $interesAdelantado
     *
     * @Column(name="interes_adelantado", type="integer", nullable=true)
     */
    private $interesAdelantado;

    /**
     * @var integer $capitalAdelantado
     *
     * @Column(name="capital_adelantado", type="integer", nullable=true)
     */
    private $capitalAdelantado;

    /**
     * @var integer $cuotaFija
     *
     * @Column(name="cuota_fija", type="integer", nullable=true)
     */
    private $cuotaFija;

    /**
     * @var string $mes
     *
     * @Column(name="mes", type="string", length=11, nullable=true)
     */
    private $mes;

    /**
     * @var string $ano
     *
     * @Column(name="ano", type="string", length=11, nullable=true)
     */
    private $ano;

    /**
     * @var Entity\Bancos
     *
     * @ManyToOne(targetEntity="Entity\Bancos")
     * @JoinColumns({
     *   @JoinColumn(name="id_banco", referencedColumnName="id_banco")
     * })
     */
    private $idBanco;

    /**
     * @var Entity\Calculos
     *
     * @ManyToOne(targetEntity="Entity\Calculos")
     * @JoinColumns({
     *   @JoinColumn(name="id_calculo", referencedColumnName="id_calculo")
     * })
     */
    private $idCalculo;

      /**
     * @var Entity\Frecuencias
     *
     * @ManyToOne(targetEntity="Entity\Frecuencias")
     * @JoinColumns({
     *   @JoinColumn(name="id_frecuencia_capital", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaCapital;
   /**
     * @var Entity\Frecuencias
     *
     * @ManyToOne(targetEntity="Entity\Frecuencias")
     * @JoinColumns({
     *   @JoinColumn(name="id_frecuencia_interes", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaInteres;

    /**
     * @var Entity\Usuarios
     *
     * @ManyToOne(targetEntity="Entity\Usuarios")
     * @JoinColumns({
     *   @JoinColumn(name="id_usuario", referencedColumnName="id_usuario")
     * })
     */
    
    private $idUsuario;
    
      /**
     * @var integer $porcentajeInt
     *
     * @Column(name="porcentaje_int", type="integer", length=11, nullable=true)
     */
        
    private $porcentajeInt;
    
    
    
    /* Getters and Setters */

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

    public function getCuotaFija() {
        return $this->cuotaFija;
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

    public function getIdFrecuenciaCapital() {
        return $this->idFrecuenciaCapital;
    }

    public function getIdFrecuenciaInteres() {
        return $this->idFrecuenciaInteres;
    }

    
    public function getIdUsuario() {
        return $this->idUsuario;
    }

    public function getPorcentajeInt() {
        return $this->porcentajeInt;
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

    public function setFechaInicio( \DateTime $fechaInicio) {
        $this->fechaInicio = $fechaInicio;
    }

    public function setFechaVto( \DateTime $fechaVto) {
        $this->fechaVto = $fechaVto;
    }

    public function setInteresAdelantado($interesAdelantado) {
        $this->interesAdelantado = $interesAdelantado;
    }

    public function setCapitalAdelantado($capitalAdelantado) {
        $this->capitalAdelantado = $capitalAdelantado;
    }

    public function setCuotaFija($cuotaFija) {
        $this->cuotaFija = $cuotaFija;
    }

    public function setMes($mes) {
        $this->mes = $mes;
    }

    public function setAno($ano) {
        $this->ano = $ano;
    }

    public function setIdBanco(\Entity\Bancos $idBanco) {
        $this->idBanco = $idBanco;
    }

    public function setIdCalculo(\Entity\Calculos $idCalculo) {
        $this->idCalculo = $idCalculo;
    }

    public function setIdFrecuenciaCapital(\Entity\Frecuencias $idFrecuenciaCapital) {
        $this->idFrecuenciaCapital = $idFrecuenciaCapital;
    }

    public function setIdFrecuenciaInteres(\Entity\Frecuencias $idFrecuenciaInteres) {
        $this->idFrecuenciaInteres = $idFrecuenciaInteres;
    }

    
    public function setIdUsuario(\Entity\Usuarios $idUsuario) {
        $this->idUsuario = $idUsuario;
    }
    public function setPorcentajeInt($porcentajeInt) {
        $this->porcentajeInt = $porcentajeInt;
    }

       
     public function __toString() {
        //return $this->getIdFrecuenciaInteres();
       return $this->getNombre();
           

    }
    

}
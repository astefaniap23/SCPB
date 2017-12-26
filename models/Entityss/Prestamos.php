<?php

namespace Entity;

/**
 * User Model
 *
 * @Table(name="prestamos")
 * @Entity
 */
class Prestamos {

    /**
     * @var integer $id_prestamo
     *
     * @Column(name="id_prestamo", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $id_prestamo;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var string $monto
     *
     * @Column(name="monto", type="string", length=45, nullable=true)
     */
    private $monto;

    /**
     * @var datetime $fechaInicio
     *
     * @Column(name="fecha_inicio", type="datetime", nullable=true)
     */
    private $fechaInicio;

    /**
     * @var datetime $fechaVto
     *
     * @Column(name="fecha_vto", type="datetime", nullable=true)
     */
    private $fechaVto;

    /**
     * @var string $interes_adelantado
     *
     * @Column(name="interes_adelantado", type="string", length=45, nullable=true)
     */
    private $interes_adelantado;

    /**
     * @var string $capital_adelantado
     *
     * @Column(name="capital_adelantado", type="string", length=45, nullable=true)
     */
    private $capital_adelantado;

    /**
     * @var string $tasa_Fija
     *
     * @Column(name="tasa_fija", type="string", length=45, nullable=true)
     */
    private $tasa_fija;

    /**
     * @var Application\Entity\Bancos
     *
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     * @OneToOne(targetEntity="Entity\Bancos")
     * @JoinColumns({
     *   @JoinColumn(name="id_banco", referencedColumnName="id_banco")
     * })
     */
    private $id_banco;

    /**
     * @var Application\Entity\Calculos
     *
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     * @OneToOne(targetEntity="Entity\Calculos")
     * @JoinColumns({
     *   @JoinColumn(name="id_calculo", referencedColumnName="id_calculo")
     * })
     */
    private $id_calculo;

    /**
     * @var Application\Entity\Frecuencias
     *
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     * @OneToOne(targetEntity="Entity\Frecuencias")
     * @JoinColumns({
     *   @JoinColumn(name="id_frecuencia_interes", referencedColumnName="id_frecuencia")
     * })
     */
    private $id_frecuencia_interes;

    /**
     * @var Application\Entity\Frecuencias
     *
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     * @OneToOne(targetEntity="Entity\Frecuencias")
     * @JoinColumns({
     *   @JoinColumn(name="id_frecuencia_capital", referencedColumnName="id_frecuencia")
     * })
     */
    private $id_frecuencia_capital;

    /**
     * @var Application\Entity\Usuarios
     *
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     * @OneToOne(targetEntity="Entity\Usuarios")
     * @JoinColumns({
     *   @JoinColumn(name="id_usuario", referencedColumnName="id_usuario")
     * })
     */
    private $id_usuario;

    /// Setter and Getter

    public function getId_Prestamo() {
        return $this->id_prestamo;
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
        return $this->interes_adelantado;
    }

    public function getCapitalAdelantado() {
        return $this->capital_adelantado;
    }

    public function getTasaFija() {
        return $this->tasa_fija;
    }

    public function getId_Banco() {
        return $this->id_banco;
    }

    public function getId_Calculo() {
        return $this->id_calculo;
    }

    public function getId_FrecuenciaInteres() {
        return $this->id_frecuencia_interes;
    }

    public function getId_FrecuenciaCapital() {
        return $this->id_frecuencia_capital;
    }

    public function getId_Usuario() {
        return $this->id_usuario;
    }

    public function setId_Prestamo($id_prestamo) {
        $this->id_prestamo = $id_prestamo;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setMonto($monto) {
        $this->monto = $monto;
    }

    public function setFechaInicio(datetime $fechaInicio) {
        $this->fechaInicio = $fechaInicio;
    }

    public function setFechaVto(datetime $fechaVto) {
        $this->fechaVto = $fechaVto;
    }

    public function setInteresAdelantado($interes_adelantado) {
        $this->interes_adelantado = $interes_adelantado;
    }

    public function setCapitalAdelantado($capital_adelantado) {
        $this->capital_adelantado = $capital_adelantado;
    }

    public function setTasaFija($tasa_fija) {
        $this->tasa_fija = $tasa_fija;
    }

    public function setId_Banco(Entity\Bancos $id_banco) {
        $this->id_banco = $id_banco;
    }

    public function setId_Calculo(Entity\Calculos $id_calculo) {
        $this->id_calculo = $id_calculo;
    }

    public function setId_FrecuenciaInteres(Entity\Frecuencias $id_frecuencia_interes) {
        $this->id_frecuencia_interes = $id_frecuencia_interes;
    }

    public function setId_FrecuenciaCapital(Entity\Frecuencias $id_frecuencia_capital) {
        $this->id_frecuencia_capital = $id_frecuencia_capital;
    }

    public function setId_Usuario(Entity\Usuarios $id_usuario) {
        $this->id_usuario = $id_usuario;
    }

}

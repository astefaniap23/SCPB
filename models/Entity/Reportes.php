<?php

namespace Entity;

/**
 * Entity\Reportes
 *
 * @Table(name="reportes")
 * @Entity
 */
class Reportes {

    /**
     * @var integer $idReportes
     *
     * @Column(name="id_reportes", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idReportes;

    /**
     * @var date $fechaCobro
     *
     * @Column(name="fecha_cobro", type="date", nullable=true)
     */
    private $fechaCobro;

    /**
     * @var date $fechaPago
     *
     * @Column(name="fecha_pago", type="date", nullable=true)
     */
    private $fechaPago;

    /**
     * @var date $fechaCapital
     *
     * @Column(name="fecha_capital", type="date", nullable=true)
     */
    private $fechaCapital;

    /**
     * @var Entity\Prestamos
     *
     * @ManyToOne(targetEntity="Entity\Prestamos")
     * @JoinColumns({
     *   @JoinColumn(name="id_prestamo", referencedColumnName="id_prestamo")
     * })
     */
    private $idPrestamo;

///Getters and Setterd////


    public function getIdReportes() {
        return $this->idReportes;
    }

    public function getFechaCobro() {
        return $this->fechaCobro;
    }

    public function getFechaPago() {
        return $this->fechaPago;
    }

    public function getFechaCapital() {
        return $this->fechaCapital;
    }

    public function getIdPrestamo() {
        return $this->idPrestamo;
    }

    public function setIdReportes($idReportes) {
        $this->idReportes = $idReportes;
    }

    public function setFechaCobro(\DateTime $fechaCobro) {
        $this->fechaCobro = $fechaCobro;
    }

    public function setFechaPago(\DateTime $fechaPago) {
        $this->fechaPago = $fechaPago;
    }

    public function setFechaCapital(\DateTime $fechaCapital) {
        $this->fechaCapital = $fechaCapital;
    }

    public function setIdPrestamo(\Entity\Prestamos $idPrestamo) {
        $this->idPrestamo = $idPrestamo;
    }

   public function __toString() {
        return $this->getIdPrestamo();
    }
}

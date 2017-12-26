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
     * @var integer $porcentaje_int
     *
     * @Column(name="porcentaje_int", type="integer", nullable=true)
     */
    private $porcentaje_int;

    /**
     * @var integer $numero
     *
     * @Column(name="numero", type="integer", nullable=true)
     */
    private $numero;

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

    public function getPorcentajeInt() {
        return $this->porcentaje_int;
    }

    public function getNumero() {
        return $this->numero;
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

    public function setPorcentajeInt($porcentaje_int) {
        $this->porcentaje_int = $porcentaje_int;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }

    public function setIdPrestamo(\Entity\Prestamos $idPrestamo) {
        $this->idPrestamo = $idPrestamo;
    }

   public function __toString() {
        return $this->getIdPrestamo();
    }
}

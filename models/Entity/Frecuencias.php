<?php

namespace Entity;


/**
 *  Entity\Frecuencias
 *
 * @Table(name="frecuencias")
 * @Entity
 */
class Frecuencias
{
    /**
     * @var integer $idFrecuencia
     *
     * @Column(name="id_frecuencia", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idFrecuencia;
 /**
     * @var Entity\CategoriasFrecuencia
     *
     * @ManyToOne(targetEntity="Entity\CategoriasFrecuencia")
     * @JoinColumns({
     *   @JoinColumn(name="id_categorias_frecuencia", referencedColumnName="id_categorias_frecuencia")
     * })
     */
    private $idCategoriasFrecuencia;


    /**
     * @var integer $periodicidad
     *
     * @Column(name="periodicidad", type="integer", nullable=true)
     */
    private $periodicidad;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    //Setters and Getters
    
    public function getIdFrecuencia() {
        return $this->idFrecuencia;
    }

    public function getIdCategoriasFrecuencia() {
        return $this->idCategoriasFrecuencia;
    }

    
    public function getPeriodicidad() {
        return $this->periodicidad;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setIdCategoriasFrecuencia(\Entity\CategoriasFrecuencia $idCategoriasFrecuencia) {
        $this->idCategoriasFrecuencia = $idCategoriasFrecuencia;
    }

    
    public function setPeriodicidad($periodicidad) {
        $this->periodicidad = $periodicidad;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }
     public function __toString() {
        return $this->getNombre();
    }

}
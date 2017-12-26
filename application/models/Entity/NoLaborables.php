<?php

namespace Entity;


/**
 * Entity\NoLaborables
 *
 * @Table(name="no_laborables")
 * @Entity
 */
class NoLaborables
{
    /**
     * @var integer $idNoLaborables
     *
     * @Column(name="id_no_laborables", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idNoLaborables;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var date $fecha
     *
     * @Column(name="fecha", type="date", nullable=true)
     */
    private $fecha;

     //Setters and Getters
    
    
     public function getIdNoLaborables() {
         return $this->idNoLaborables;
     }

     public function getNombre() {
         return $this->nombre;
     }

     public function getFecha() {
         return $this->fecha;
     }


     public function setNombre($nombre) {
         $this->nombre = $nombre;
     }

     public function setFecha(\DateTime $fecha) {
         $this->fecha = $fecha;
     }


}

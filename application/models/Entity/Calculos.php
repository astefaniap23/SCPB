<?php

namespace Entity;



/**
 * Entity\Calculos
 *
 * @Table(name="calculos")
 * @Entity
 */
class Calculos
{
    /**
     * @var integer $idCalculo
     *
     * @Column(name="id_calculo", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idCalculo;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=60, nullable=true)
     */
    private $nombre;
    
    //Setters and Getters

    public function getIdCalculo() {
        return $this->idCalculo;
    }

    public function getNombre() {
        return $this->nombre;
    }

 

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }


}
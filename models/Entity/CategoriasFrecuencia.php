<?php

namespace Entity;


/**
 * Entity\CategoriasFrecuencia
 *
 * @Table(name="categorias_frecuencia")
 * @Entity
 */
class CategoriasFrecuencia
{
    /**
     * @var integer $idCategoriasFrecuencia
     *
     * @Column(name="id_categorias_frecuencia", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idCategoriasFrecuencia;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;


   /////////Setters and Getters
    
   public function getIdCategoriasFrecuencia() {
       return $this->idCategoriasFrecuencia;
   }

   public function getNombre() {
       return $this->nombre;
   }

   public function setIdCategoriasFrecuencia($idCategoriasFrecuencia) {
       $this->idCategoriasFrecuencia = $idCategoriasFrecuencia;
   }

   public function setNombre($nombre) {
       $this->nombre = $nombre;
   }
     
     public function __toString() {
        //return $this->getIdFrecuenciaInteres();
       return $this->getNombre();
           

    }



}
<?php

namespace Entity;



/**
 * User Model
 *
 * Table(name="frecuencias")
 * @Entity
 */
class Frecuencias
{
  /**
	 * @Id
	 * @Column(type="integer", nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 */
    private $id_frecuencia;

    /**
     * @var string $categoria
     *
     * @Column(name="categoria", type="string", length=45, nullable=true)
     */
    private $categoria;

    /**
     * @var integer $perioricidad
     *
     * @Column(name="perioricidad", type="integer", nullable=true)
     */
    private $perioricidad;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;
    
    //SETTER AND GETTER
    public function getId_frecuencia() {
        return $this->id_frecuencia;
    }

    public function getCategoria() {
        return $this->categoria;
    }

    public function getPerioricidad() {
        return $this->perioricidad;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setId_frecuencia($id_frecuencia) {
        $this->id_frecuencia = $id_frecuencia;
    }

    public function setCategoria($categoria) {
        $this->categoria = $categoria;
    }

    public function setPerioricidad($perioricidad) {
        $this->perioricidad = $perioricidad;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }


    
    

}
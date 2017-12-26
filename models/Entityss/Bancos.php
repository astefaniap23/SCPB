<?php

namespace Entity;

/**
 * User Model
 * @Entity
 * Table(name="bancos")
 * 
 */
class Bancos  
{
/**
	 * @Id
	 * @Column(type="integer", nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 */
    public $id_banco;

  /**
	 * @Column(type="string", nullable=false)
	 */
    public $nombre;


    public function getId_banco() {
        return $this->id_banco;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setIdBanco($id_banco) {
        
        $this->id_banco = $id_banco;
        return $this;
    }

    
    public function setNombre($nombre) {
        $this->nombre = $nombre;
        // return $this;
    }

	  
	 
	
}
<?php

namespace Entity;

/**
 * Entity\Bancos
 *
 * @Table(name="bancos")
 * @Entity
 */
class Bancos
{
    /**
     * @var integer $idBanco
     *
     * @Column(name="id_banco", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idBanco;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=false)
     */
    private $nombre;

////////////////
    
    public function getIdBanco() {
        return $this->idBanco;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setIdBanco($idBanco) {
        $this->idBanco = $idBanco;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }
    
    public function __toString() {
        return $this->getNombre();
    }
}

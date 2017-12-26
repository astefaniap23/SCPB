<?php

namespace Entity;

/**
 * Entity\Usuarios
 *
 * @Table(name="usuarios")
 * @Entity
 */
class Usuarios
{
    /**
     * @var integer $idUsuario
     *
     * @Column(name="id_usuario", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $idUsuario;

    /**
     * @var string $nombre
     *
     * @Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var string $contrasenia
     *
     * @Column(name="contrasenia", type="string", length=45, nullable=true)
     */
    private $contrasenia;

    /**
     * @var string $estatus
     *
     * @Column(name="estatus", type="string", length=45, nullable=true)
     */
    private $estatus;

    /**
     * @var datetime $fechaUltConex
     *
     * @Column(name="fecha_ult_conex", type="datetime", nullable=false)
     */
    private $fechaUltConex;

    //Setters and Getters

    public function getIdUsuario() {
        return $this->idUsuario;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getContrasenia() {
        return $this->contrasenia;
    }

    public function getEstatus() {
        return $this->estatus;
    }

    public function getFechaUltConex() {
        return $this->fechaUltConex;
    }


    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setContrasenia($contrasenia) {
        $this->contrasenia = $contrasenia;
    }

    public function setEstatus($estatus) {
        $this->estatus = $estatus;
    }

    public function setFechaUltConex(datetime $fechaUltConex) {
        $this->fechaUltConex = $fechaUltConex;
    }


}
<?php

namespace Entity;
/**
 * User Model
 * @Entity
 * Table(name="usuarios")
 */
class Usuarios
{
    /**
     * @Id
     * @Column(name="id_usuario", type="integer", nullable=false)
     * @GeneratedValue(strategy="AUTO")
     */
    private $idUsuario;
    /**
     * @Column(name="nombre", type="string", length=45, nullable=true)
    */
    private $nombre;
    /**
     * @Column(name="contrasenia", type="string", length=45, nullable=true)
     */
    private $contrasenia;
    /**
     *@Column(name="estatus", type="string", length=45, nullable=true)
     */
    private $estatus;
    /**
     * @Column(name="fecha_ult_conex", type="datetime")
     */
    private $fechaUltConex;
    
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

    public function setIdUsuario($idUsuario) {
        $this->idUsuario = $idUsuario;
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

    public function setFechaUltConex($fechaUltConex) {
        $this->fechaUltConex = $fechaUltConex;
    }



}
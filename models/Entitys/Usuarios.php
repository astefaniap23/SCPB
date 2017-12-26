<?php

namespace Entitys;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entitys\Usuarios
 *
 * @ORM\Table(name="usuarios")
 * @ORM\Entity
 */
class Usuarios
{
    /**
     * @var integer $idUsuario
     *
     * @ORM\Column(name="id_usuario", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idUsuario;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var string $contrasenia
     *
     * @ORM\Column(name="contrasenia", type="string", length=45, nullable=true)
     */
    private $contrasenia;

    /**
     * @var string $estatus
     *
     * @ORM\Column(name="estatus", type="string", length=45, nullable=true)
     */
    private $estatus;

    /**
     * @var datetime $fechaUltConex
     *
     * @ORM\Column(name="fecha_ult_conex", type="datetime", nullable=false)
     */
    private $fechaUltConex;


}
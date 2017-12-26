<?php

namespace Prueba;

use Doctrine\ORM\Mapping as ORM;

/**
 * Prueba\Frecuencias
 *
 * @ORM\Table(name="frecuencias")
 * @ORM\Entity
 */
class Frecuencias
{
    /**
     * @var integer $idFrecuencia
     *
     * @ORM\Column(name="id_frecuencia", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idFrecuencia;

    /**
     * @var string $categoria
     *
     * @ORM\Column(name="categoria", type="string", length=45, nullable=true)
     */
    private $categoria;

    /**
     * @var integer $perioricidad
     *
     * @ORM\Column(name="perioricidad", type="integer", nullable=true)
     */
    private $perioricidad;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;


}
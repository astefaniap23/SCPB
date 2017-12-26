<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Application\Entity\UserNoLaborables
 *
 * @ORM\Table(name="no_laborables")
 * @ORM\Entity
 */
class UserNoLaborables
{
    /**
     * @var integer $idNoLaborables
     *
     * @ORM\Column(name="id_no_laborables", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idNoLaborables;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var datetime $fecha
     *
     * @ORM\Column(name="fecha", type="datetime", nullable=true)
     */
    private $fecha;


}
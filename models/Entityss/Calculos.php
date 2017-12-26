<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Application\Entity\UserCalculos
 *
 * @ORM\Table(name="calculos")
 * @ORM\Entity
 */
class UserCalculos
{
    /**
     * @var integer $idCalculo
     *
     * @ORM\Column(name="id_calculo", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idCalculo;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=60, nullable=true)
     */
    private $nombre;


}
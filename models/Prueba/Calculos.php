<?php

namespace Prueba;

use Doctrine\ORM\Mapping as ORM;

/**
 * Prueba\Calculos
 *
 * @ORM\Table(name="calculos")
 * @ORM\Entity
 */
class Calculos
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
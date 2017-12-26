<?php

namespace Prueba;

use Doctrine\ORM\Mapping as ORM;

/**
 * Prueba\Prestamos
 *
 * @ORM\Table(name="prestamos")
 * @ORM\Entity
 */
class Prestamos
{
    /**
     * @var integer $idPrestamo
     *
     * @ORM\Column(name="id_prestamo", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idPrestamo;

    /**
     * @var string $nombre
     *
     * @ORM\Column(name="nombre", type="string", length=45, nullable=true)
     */
    private $nombre;

    /**
     * @var string $monto
     *
     * @ORM\Column(name="monto", type="string", length=45, nullable=true)
     */
    private $monto;

    /**
     * @var datetime $fechaInicio
     *
     * @ORM\Column(name="fecha_inicio", type="datetime", nullable=true)
     */
    private $fechaInicio;

    /**
     * @var datetime $fechaVto
     *
     * @ORM\Column(name="fecha_vto", type="datetime", nullable=true)
     */
    private $fechaVto;

    /**
     * @var string $interesAdelantado
     *
     * @ORM\Column(name="interes_adelantado", type="string", length=45, nullable=true)
     */
    private $interesAdelantado;

    /**
     * @var string $capitalAdelantado
     *
     * @ORM\Column(name="capital_adelantado", type="string", length=45, nullable=true)
     */
    private $capitalAdelantado;

    /**
     * @var string $tasaFija
     *
     * @ORM\Column(name="tasa_fija", type="string", length=45, nullable=true)
     */
    private $tasaFija;

    /**
     * @var string $cuotaFija
     *
     * @ORM\Column(name="cuota_fija", type="string", length=45, nullable=true)
     */
    private $cuotaFija;

    /**
     * @var Entity\Frecuencias
     *
     * @ORM\ManyToOne(targetEntity="Entity\Frecuencias")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_frecuencia_capital", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaCapital;

    /**
     * @var Entity\Frecuencias
     *
     * @ORM\ManyToOne(targetEntity="Entity\Frecuencias")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_frecuencia_interes", referencedColumnName="id_frecuencia")
     * })
     */
    private $idFrecuenciaInteres;

    /**
     * @var Entity\Bancos
     *
     * @ORM\ManyToOne(targetEntity="Entity\Bancos")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_banco", referencedColumnName="id_banco")
     * })
     */
    private $idBanco;

    /**
     * @var Entity\Calculos
     *
     * @ORM\ManyToOne(targetEntity="Entity\Calculos")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_calculo", referencedColumnName="id_calculo")
     * })
     */
    private $idCalculo;

    /**
     * @var Entity\Usuarios
     *
     * @ORM\ManyToOne(targetEntity="Entity\Usuarios")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario")
     * })
     */
    private $idUsuario;


}
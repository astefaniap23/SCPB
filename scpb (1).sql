-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-07-2014 a las 23:43:17
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `scpb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE IF NOT EXISTS `bancos` (
  `id_banco` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_banco`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`id_banco`, `nombre`) VALUES
(5, 'Exterior'),
(6, 'Activo'),
(7, 'BFC'),
(8, 'Bancrecer'),
(9, 'Caroni'),
(10, 'Banesco'),
(11, 'Mercantil'),
(12, 'BOD'),
(45, 'jose');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculos`
--

CREATE TABLE IF NOT EXISTS `calculos` (
  `id_calculo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_calculo`)
) ENGINE=InnoDB  DEFAULT CHARSET=cp850 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `calculos`
--

INSERT INTO `calculos` (`id_calculo`, `nombre`) VALUES
(1, ' Capital + Interes Act Vto'),
(2, ' Capital Act Vto + Interes Anticipado'),
(3, ' Cuotas fijas mensuales'),
(4, ' Interes Mensual y Capital trimestral menesual'),
(5, ' Cuotas Capital fijo mennsual y Cuotas Interes menesual');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frecuencias`
--

CREATE TABLE IF NOT EXISTS `frecuencias` (
  `id_frecuencia` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) DEFAULT NULL,
  `perioricidad` int(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_frecuencia`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `frecuencias`
--

INSERT INTO `frecuencias` (`id_frecuencia`, `categoria`, `perioricidad`, `nombre`) VALUES
(1, 'Interes', 1, 'Mensual'),
(2, 'Interes', 2, 'Bi Mensual'),
(3, 'Interes', 3, 'Trimestral'),
(4, 'Interes', 6, 'Semestral'),
(5, 'Capital', 1, 'Mensual'),
(6, 'Capital', 2, 'Bi Mensual'),
(7, 'Capital', 3, 'Trimestral'),
(8, 'Capital', 6, 'Semestral'),
(9, 'Interes', 1, 'Mensual'),
(10, 'Interes', 2, 'Bi Mensual'),
(11, 'Interes', 3, 'Trimestral'),
(12, 'Interes', 6, 'Semestral'),
(13, 'Capital', 1, 'Mensual'),
(14, 'Capital', 2, 'Bi Mensual'),
(15, 'Capital', 3, 'Trimestral'),
(16, 'Capital', 6, 'Semestral');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `no_laborables`
--

CREATE TABLE IF NOT EXISTS `no_laborables` (
  `id_no_laborables` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id_no_laborables`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Volcado de datos para la tabla `no_laborables`
--

INSERT INTO `no_laborables` (`id_no_laborables`, `nombre`, `fecha`) VALUES
(1, 'Año Nuevo', '2014-01-01 00:00:00'),
(2, 'Carnaval Día 1', '2014-03-03 00:00:00'),
(3, 'Carnaval Día 2', '2014-03-04 00:00:00'),
(4, 'Semana Santa Día 1', '2014-04-17 00:00:00'),
(5, 'Semana Santa Día 2', '2014-04-18 00:00:00'),
(6, 'Declaración de la Independencia', '2014-04-19 00:00:00'),
(7, 'Día trabajador', '2014-05-01 00:00:00'),
(8, 'Batalla de Carabobo', '2014-06-24 00:00:00'),
(9, 'Firma acta independencia', '2014-07-05 00:00:00'),
(10, 'Natalicio de Simón Bolívar', '2014-07-24 00:00:00'),
(11, 'Día de la resistencia indígena', '2014-10-12 00:00:00'),
(12, 'Víspera de Navidad', '2014-12-24 00:00:00'),
(13, 'Navidad', '2014-12-25 00:00:00'),
(14, 'Fin de año', '2014-12-31 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamos`
--

CREATE TABLE IF NOT EXISTS `prestamos` (
  `id_prestamo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `monto` varchar(45) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_vto` datetime DEFAULT NULL,
  `interes_adelantado` varchar(45) DEFAULT NULL,
  `capital_adelantado` varchar(45) DEFAULT NULL,
  `tasa_fija` varchar(45) DEFAULT NULL,
  `id_banco` int(11) NOT NULL,
  `id_frecuencia_interes` int(11) NOT NULL,
  `id_frecuencia_capital` int(11) NOT NULL,
  `id_calculo` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_prestamo`,`id_banco`,`id_frecuencia_interes`,`id_frecuencia_capital`,`id_calculo`,`id_usuario`),
  KEY `fk_Prestamos_Bancos_idx` (`id_banco`),
  KEY `fk_Prestamos_Frecuencias1_idx` (`id_frecuencia_interes`),
  KEY `fk_Prestamos_Frecuencias2_idx` (`id_frecuencia_capital`),
  KEY `fk_Prestamos_Calculos1_idx` (`id_calculo`),
  KEY `fk_Prestamos_Usuarios1_idx` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `contrasenia` varchar(45) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  `fecha_ult_conex` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=195 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `contrasenia`, `estatus`, `fecha_ult_conex`) VALUES
(3, 'charli', '', '1', '0000-00-00 00:00:00'),
(194, 'aportillo', '4d186321c1a7f0f354b297e8914ab240', '1', '2014-07-14 15:24:48');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prestamos`
--
ALTER TABLE `prestamos`
  ADD CONSTRAINT `fk_Prestamos_Bancos` FOREIGN KEY (`id_banco`) REFERENCES `bancos` (`id_banco`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prestamos_Calculos1` FOREIGN KEY (`id_calculo`) REFERENCES `calculos` (`id_calculo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prestamos_Frecuencias1` FOREIGN KEY (`id_frecuencia_interes`) REFERENCES `frecuencias` (`id_frecuencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prestamos_Frecuencias2` FOREIGN KEY (`id_frecuencia_capital`) REFERENCES `frecuencias` (`id_frecuencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prestamos_Usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

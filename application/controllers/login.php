<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Login extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
        // You*r own constructor code
    }

    public function _autenticationNombre($nombre) {

        $em = $this->doctrine->em;
        $nombeUsuario = $em->getRepository('Entity\Usuarios')->findByNombre($nombre);


        foreach ($nombeUsuario as $row) {
            if ($row->getNombre() == $nombre) {
                $login_nombre = $row->getNombre();
            }
        }
        return $login_nombre;
    }

    public function _autenticationContrasenia($contrasenia) {
        $em = $this->doctrine->em;
        $contrasenia = md5($contrasenia);
        $contraseniaUsuario = $em->getRepository('Entity\Usuarios')->findByContrasenia($contrasenia);

        foreach ($contraseniaUsuario as $row) {
            if ($row->getContrasenia() == $contrasenia) {
                $login_contrasenia = $row->getContrasenia();
            }
        }
        return $login_contrasenia;
    }

    public function index() {

        //envia            
        $nombre = $this->input->post('usuario');
        $contrasenia = $this->input->post('contrasenia');
        $userName = $this->_autenticationNombre($nombre);
        $userPassword = $this->_autenticationContrasenia($contrasenia);

        if ((($nombre == $userName) && (md5($contrasenia) == $userPassword))) {
            $this->session->set_userdata('usuario', $nombre);
            $this->session->set_userdata('contrasenia', $contrasenia);
            $session_id = $this->session->userdata('session_id');
            $this->session->set_userdata('contrasenia', $userPassword);
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => 'true', 'id' => $session_id)));
        } else {
            //No sucessfull
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('failure' => 'true')));
        }
    }

}

/* End of file logim.php */
/* Location: ./application/controllers/login.php */
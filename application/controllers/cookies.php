<?php

/*
 * application/controllers/cookies.php
 * Busca el session_id en las cookies del navegador
 */

class Cookies extends CI_Controller {
public $idCookies;

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
        // You*r own constructor code
    }

    public function sessionId() {

        $idSession = $this->session->userdata("session_id");
        $idCookies = $this->input->cookie('CookieSCPB');
        if ($idSession == $idCookies) {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => true)));
        } else {
            $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('success' => false)));
        }
    }
}

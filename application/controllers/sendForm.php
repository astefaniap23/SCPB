<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/* */
class Form extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $em = $this->doctrine->em;
        // Your own constructor code
    }
    public function index() {
    }
}

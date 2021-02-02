<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    /**
     * @Route("/{vueRouter}", name="index", priority="1")
     */
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }
}

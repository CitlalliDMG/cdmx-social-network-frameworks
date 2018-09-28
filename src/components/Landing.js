import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navigation from './Navigation';
import logo from './global/img/logotipo-lux-login.png';
import './global/css/Landing.css'

const LandingPage = () =>
    <div>
        <Navigation />
        <main className="container">
            <img src={logo} alt="logo-lux" id="logo-index" />
            <h1>"No hay logro pequeño, ni paso que no cuente."</h1>
            <p>Encuentra en LUX un espacio seguro y la motivación para atravesar esos momentos difíciles, al leer y  compartir las pequeñas metas que iluminan tu día a día.</p>
            <button type="button">
                <Link to={routes.SIGN_IN}>Entrar</Link>
            </button>
        </main>
    </div>

export default LandingPage;
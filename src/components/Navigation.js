// Dependencies
import React from 'react';
import { Link } from 'react-router-dom'; // Alow to link the application to different routes

// Assets
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SingOut';
import * as routes from '../constants/routes';
import './global/css/Navigation.css'

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

    const NavigationAuth = () =>
        <ul className="Menu">
            <li><Link to ={routes.LANDING}>Inicio</Link></li>
            <li><Link to ={routes.HOME}>Home</Link></li>
            <li><Link to ={routes.ACCOUNT}>Tu cuenta</Link></li>
            <li><SignOutButton /></li>
        </ul>

    const NavigationNonAuth = () => 
        <ul className="Menu">
            <li><Link to ={routes.LANDING}>Inicio</Link></li>
            <li><Link to ={routes.SIGN_IN}>Entrar</Link></li>
        </ul>

export default Navigation;
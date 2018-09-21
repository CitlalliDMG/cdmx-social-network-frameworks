// Dependencies
import React from 'react';
import { Link } from 'react-router-dom'; // Alow to link the application to different routes

// Assets
import SignOutButton from './SingOut';
import * as routes from '../../constants/routes';
import './css/Navigation.css'

const Navigation = ({ authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

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
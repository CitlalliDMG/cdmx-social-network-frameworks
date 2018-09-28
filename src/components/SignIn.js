import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navigation from './Navigation';
import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import logo from './global/img/logotipo-lux-login.png';
import iconLux from './global/img/icono-45-lux.png';
import iconGoogle from './global/img/google-logo-icon-PNG-Transparent-Background.png'
import './global/css/SignIn.css'

const SignInPage = ({ history }) =>
    <div>
        <Navigation />

        <header className="container">
            <img src={logo} alt="logo-lux" id="logo-index" />
            <h1>"No hay logro pequeño, ni paso que no cuente."</h1>
            <p>Encuentra en LUX un espacio seguro y la motivación para atravesar esos momentos difíciles, al leer y  compartir las pequeñas metas que iluminan tu día a día.</p>
        </header>

        <main className="container-sign-in">
            <h3>Entra a LUX</h3>
            <SignInForm history={history} />
            <PasswordForgetLink />
            <SignInGoogle history={history} />
            <SignUpLink />
        </main>
    </div>

const byPropKey = (propertyName, value) => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Correo electrónico"
                />
                <input
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    placeholder="Contraseña"
                />
                <button disabled={isInvalid} type="submit">
                    <img src={iconLux} alt="icon-lux"/> 
                    Entrar
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

class SignInGoogle extends Component {
    loginGoogle = (event) => {
        const {
            history,
        } = this.props;

        auth.doSignInWithGoogle(history)
            .then(async () => {
                await auth.authStateChangeListener;
                console.log(`Se logueo con Google`);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        return (
            <button onClick={this.loginGoogle} id="btn-google">
                <img src={iconGoogle} alt="icon-google"/> 
                Google
            </button>
        )
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
    SignInGoogle,
};
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import './global/css/SignIn.css'

const SignInPage = ({ history }) =>
    <div className="container-sign-in">
        <h1>Entra a LUX</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignInGoogle history={history}/>
        <SignUpLink />
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
            <button onClick={this.loginGoogle}>Login con Google</button>
        )
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
    SignInGoogle,
};
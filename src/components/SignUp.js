import React, { Component } from 'react';
import { 
    Link, 
    withRouter,
} from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import Navigation from './Navigation';
import './global/css/SignUp.css'

const SignUpPage = ({history}) =>
    <div>
        <Navigation />
        
        <h1>Únete a LUX</h1>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        // ... property spread notation
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {

                // Create a user in Firebase DB too
                db.doCreateUser(authUser.user.uid, username, email)
                    .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        history.push(routes.HOME);
                    })
                    .catch(error => {
                        this.setState(byPropKey('error', error));
                    })
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        
        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Nickname"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Correo electrónico"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Contraseña"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirma tu contraseña"
                />
                <button disabled={isInvalid} type="submit">
                    Regístrate
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const SignUpLink = () =>
    <p className="link-box">
        ¿No tienes cuenta? 
        <br/>
        <Link to={routes.SIGN_UP}>Crea una cuenta</Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
}
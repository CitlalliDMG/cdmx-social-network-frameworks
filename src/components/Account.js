import React from 'react';

import AuthUserContext from './AuthUserContext';
import Navigation from './Navigation';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <Navigation />

                <h1>Tu correo es: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
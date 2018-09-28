import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import Navigation from './Navigation';
import { db } from '../firebase';


class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
            this.setState({ users: snapshot.val() })
        );
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <Navigation />

                <h1>Home</h1>
                <p>The Home Page is accesible by every signed in user.</p>

                {!!users && <UserList users={users} />}
            </div>
        );
    }
}

const UserList = ({ users }) =>
    <div>
        <h2>List of Usernames of Users</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>

        {Object.keys(users).map(key =>
            <div key={key}>{users[key].username}</div>
        )}
    </div>

const authCondition = (authUser) => !!authUser;

// TO DO: Entender la línea siguiente
export default withAuthorization(authCondition)(HomePage);
import React, { Component } from 'react';

import Navigation from './Navigation';

class Page404 extends Component {
    render() {
        return(
            <div>
                <Navigation />

                <h4>Ouh!</h4>
                <p>Lo sentimos, al parecer no podemos encontrar la página que estas buscando</p>
                <p>Error: 404</p>
            </div>
        );
    }
}

export default Page404;
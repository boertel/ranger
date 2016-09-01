import React, { Component } from 'react';

import Grid from '../components/Grid';


class Favorites extends Component {
    render() {
        return (
            <div className="Content">
                <div className="picture">
                    <Grid />
                </div>
                <div className="sidebar">
                    <div className="Label">
                        <h2>Presque fini, une dernière étape!</h2>
                        <p>Choisi tes 3 photographies préferées.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorites;

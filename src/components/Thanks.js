import React, { Component } from 'react';

import './Thanks.css';


export default class Thanks extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="Overlay">
                <div className="Thanks">
                    <div>
                        <p>Merci d'avoir participer à cette petite expérimentation.</p>
                        <p className="signature">Cyril &amp; Benjamin Oertel</p>
                        <p><a onClick={this.props.close}>Retour aux photos</a></p>
                    </div>
                    <div className="credits">
                        <p>Crée par <a href="http://ben.oertel.fr" target="_blank">ben.oertel.fr</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

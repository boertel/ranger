import React, { Component } from 'react';
import _ from 'lodash';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import Grid from '../components/Grid';


class Favorites extends Component {
    render() {
        const count = 3 - this.props.favorites;
        const thanks = count === 0 ? <p style={{textAlign: 'center'}}>Merci de la part de<br />Cyril & Benjamin :)</p> : null;
        const percentage = Math.floor(this.props.correct / this.props.total * 100);
        const back = '/picture/' + this.props.total;

        return (
            <div className="Content">
                <div className="picture">
                    <Grid />
                </div>
                <div className="sidebar" style={{marginRight: '0.5em'}}>
                    <div>
                        <div className="arrow">
                            <Link to={back}>&larr;</Link>
                        </div>
                        <h1>{percentage}%</h1>
                        <p>Tu as réussi à deviner <strong>{this.props.correct} fois</strong> le correct photographe sur les {this.props.total} photographies.</p>
                    </div>

                    <div>
                        <h2>Une dernière étape !</h2>
                            <p>Choisi tes <strong>{count}</strong> photographies préferées and cliquant sur <a>&#9734;</a>.</p>
                    </div>
                    <div>{thanks}</div>
                </div>
            </div>
        );
    }
}

function select(store) {
    const pictures = _.values(store.pictures);
    return {
        total: pictures.length,
        favorites: pictures.filter(picture => !!picture.ranking).length,
        correct: pictures.filter(picture => picture.photographId === picture.predictionId).length
    }
}

export default connect(select)(Favorites);

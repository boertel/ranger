import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

import {
    Grid,
    Header,
} from '../components';
import { back } from '../actions';

import './End.css';


class End extends Component {
    render() {
        const { dispatch, total, favorites, correct } = this.props;
        const count = 3 - favorites;
        const thanks = count === 0 ? <div>Merci de la part deCyril & Benjamin :)</div> : null;
        const percentage = Math.floor(correct / total * 100);

        return (
            <div className="End">
                <Grid />
                <div className="Sidebar">
                    <Header back={() => dispatch(back(total + 1))}>
                        <h1>{percentage}%</h1>
                    </Header>
                    <div>
                    <p>Tu as réussi à deviner <strong>{correct} fois</strong> le correct photographe sur les {total} photographies.</p>
                    </div>

                    <div>
                        <h2>Et une dernière étape !</h2>
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

export default connect(select)(End);

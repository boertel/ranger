import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

import {
    Grid,
    Header,
    Thanks,
} from '../components';
import { back } from '../actions';

import './End.css';


class End extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thanks: undefined,
        };
    }

    closeThanks() {
        this.setState({
            thanks: false,
        });
    }

    render() {
        const { dispatch, total, favorites, correct } = this.props;
        const count = 3 - favorites;
        const percentage = Math.floor(correct / total * 100);

        let thanks = (count === 0);
        if (this.state.thanks !== undefined) {
            thanks = this.state.thanks;
        }
        return (
            <div>
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
                    </div>
                </div>
                <Thanks close={() => this.closeThanks()} show={thanks}/>
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

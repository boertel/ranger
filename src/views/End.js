import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import {
    Grid,
    Header,
    Thanks,
} from '../components';
import { back, next } from '../actions';

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

    openThanks() {
        this.setState({
            thanks: true,
        });
    }

    componentWillMount() {
        const { complete, dispatch, lastIndex, total } = this.props;
        if (!complete) {
            dispatch(next(lastIndex, total));
        }
    }

    render() {
        const { dispatch, total, favorites, correct, } = this.props;
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
                            <p><FormattedHTMLMessage id="success" values={{correct, total, }}/></p>
                        </div>
                        <div>
                            <h2><FormattedMessage id="lastStep" /></h2>
                            <p><FormattedHTMLMessage id="favorite" values={{count,}}/></p>
                        </div>
                        <div className="thankyou">
                            <FormattedMessage id="thankyou" values={{
                                link: <a onClick={() => { this.openThanks() }}>Cyril & Benjamin</a>
                            }}/>
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
    const total = pictures.length;
    const favorites = pictures.filter(picture => !!picture.ranking).length;
    const correct = pictures.filter(picture => picture.photographId === picture.predictionId).length;
    const completed = pictures.filter(picture => picture.predictionId).length;
    const complete = completed === total;
    let lastIndex;
    if (!complete) {
        const last = _.chain(store.pictures).pick(store.order).values().value().find(picture => !picture.predictionId);
        lastIndex = store.order.indexOf(last.id);
    }
    return {
        total,
        favorites,
        correct,
        complete: completed === total,
        lastIndex,
    }
}

export default connect(select)(End);

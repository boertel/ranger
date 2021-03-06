import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash'

import { vote } from '../../actions';
import Face from '../Face';

import './index.css'


class Choice extends Component {
    constructor(props) {
        super(props);
        this.onKeydown = this.onKeydown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmout() {
        window.removeEventListener('keydown', this.onKeydown);
    }

    onKeydown(evt) {
        const { photograph, onClick } = this.props;
        if (photograph.shortcut === evt.key) {
            onClick();
        }
    }

    render() {
        const { photograph, prediction, onClick, correct } = this.props;
        return (
            <a key={photograph.id}
               title={photograph.firstName}
               onClick={onClick}>
                   <Face {...photograph}
                        correct={correct}
                        disabled={(prediction.id !== undefined)} />
            </a>
        );
    }
}


class Choices extends Component {
    vote(predictionId) {
        const { dispatch, prediction, id } = this.props;
        if (!prediction.id) {
            return dispatch(vote(id, predictionId));
        }
    }

    renderFaces() {
        const { prediction, photograph } = this.props;

        const photographs = this.props.photographs.map((p) => {
            let correct = undefined;
            if (prediction.id && prediction.id === p.id) {
                correct = (prediction.id === photograph.id);
            }

            return (<Choice
                        correct={correct}
                        key={p.id}
                        onClick={() => this.vote(p.id) }
                        prediction={prediction}
                        photograph={p} />);
        });

        return <div className="Faces">{photographs}</div>;
    }

    render() {
        return (
            <div className="Choices">
                <h3><FormattedMessage id="who" /></h3>
                <div>
                    {this.renderFaces()}
                </div>
            </div>
        );
    }
}

function select(store, props) {
    const { photographs } = store;
    return {
        prediction: photographs[props.predictionId] || {},
        photograph: photographs[props.photographId],
        photographs: _.values(photographs),
    }
}

export default connect(select)(Choices);

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { vote } from '../actions';
import Face from './Face';



class Choice extends Component {
    constructor(props) {
        super(props);

        this.next = this.next.bind(this);
        this.shortcut = this.shortcut.bind(this);
    }

    shortcut(evt) {
        if (evt.key === 'k') {
            this.next();
        }
    }

    vote(predictionId) {
        if (!this.props.prediction.id) {
            return this.props.dispatch(vote(this.props.id, predictionId));
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.shortcut);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.shortcut);
    }

    renderMessage() {
        const style = this.props.prediction.id ? {opacity: 1} : {opacity: 0};
        let message = (<div>Oops :( C'était <em>{this.props.photograph.firstName}</em>.</div>);
        if (this.props.correct) {
            message = (<div>Bravo! C'était <em>{this.props.prediction.firstName}</em>.</div>);
        }
        return (
            <div className="message" style={style}>{message}</div>
        );
    }

    renderPhotographs() {
        return this.props.photographs.map((photograph) => {
            return <Face
                correct={(this.props.photographId === photograph.id && this.props.predictionId)}
                active={this.props.predictionId === photograph.id}
                disabled={this.props.predictionId !== undefined}
                {...photograph}
                key={photograph.id}
                onClick={this.vote.bind(this)} />
        });
    }

    next() {
        if (this.props.predictionId) {
            this.props.dispatch(push(this.props.next));
        }
    }

    renderNext() {
        const style = { opacity: this.props.predictionId ? 1 : 0 };
        return (
            <div className="Next" style={style} onClick={this.next.bind(this)}>Suivante &rarr;</div>
        );
    }

    render() {
        let correct;
        if (this.props.correct !== undefined) {
            correct = this.props.correct ? 'correct' : 'wrong';
        }
        const classNames = ['Choice', correct];
        return (
            <div className={classNames.join(' ')}>
                <h3>Qui a pris cette photo?</h3>
                <div className="choices">{this.renderPhotographs()}</div>
                {this.renderMessage()}
                {this.renderNext()}
            </div>
        );
    }
}

function select(store, props) {
    let photographs = [];
    for (var key in store.photographs) {
        if (store.photographs.hasOwnProperty(key)) {
            photographs.push(store.photographs[key]);
        }
    }
    const count = Object.keys(store.pictures).length;
    const nextIndex = props.index + 1;
    return {
        prediction: store.photographs[props.predictionId] || {},
        photograph: store.photographs[props.photographId] || {},
        photographs,
        next: (nextIndex > count) ? '/end' : '/picture/' + nextIndex,
        correct: props.predictionId !== undefined ? props.predictionId === props.photographId : undefined,
    }
}

export default connect(select)(Choice);

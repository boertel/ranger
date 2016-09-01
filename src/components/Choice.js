import React, { Component } from 'react';

import Face from './Face';

import { connect } from 'react-redux';
import { vote } from '../actions';


class Choice extends Component {
    vote(photographId) {
        if (!this.props.photograph.id) {
            const { next } = this.props;
            return this.props.dispatch(vote(this.props.id, photographId, next));
        }
    }

    renderMessage() {
        const style = this.props.photograph.id ? {opacity: 1} : {opacity: 0};
        return (
            <div className="message" style={style}>
                <span>Tu as choisi </span>
                <em>{this.props.photograph.firstName}</em>
                <span> comme photographe.</span>
            </div>
        );
    }

    renderPhotographs() {
        return this.props.photographs.map((photograph) => {
            return <Face
                active={this.props.photographId === photograph.id}
                disabled={this.props.photographId !== undefined}
                {...photograph}
                key={photograph.id}
                onClick={this.vote.bind(this)} />
        });
    }

    render() {
        return (
            <div className="Choice">
                <h3>Qui a pris cette photo?</h3>
                <div className="choices">{this.renderPhotographs()}</div>
                {this.renderMessage()}
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
        photograph: store.photographs[props.photographId] || {},
        photographs,
        next: (nextIndex > count) ? '/end' : '/picture/' + nextIndex,
    }
}

export default connect(select)(Choice);

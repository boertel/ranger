import React, { Component } from 'react';

import Face from './Face';

import { connect } from 'react-redux';
import { vote } from '../actions';


class Choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locked: false,
        };
    }

    vote(name) {
        if (this.state.locked) {
            return;
        }

        this.setState({
            locked: true,
        });
        this.props.dispatch(vote(this.props.name, this.props.index))
    }

    render() {
        return (
            <div className="Choice">
                <h3>Qui a pris la photo?</h3>
                <div className="choices">
                    <div>
                        <Face title="Cyril" name="cyril" onClick={this.vote.bind(this)} />
                    </div>
                    <div>
                        <Face title="Ben" name="ben" onClick={this.vote.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Choice);

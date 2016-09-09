import React, { Component } from 'react';

import { connect } from 'react-redux';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';


import {
    register,
    next,
} from '../actions';

import { Face } from '../components';
import './Introduction.css';


class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.firstName,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.next = this.next.bind(this);
    }

    register(firstName) {
        const anonymous = (firstName === undefined);
        firstName = firstName || ('' + Math.random()).replace('.', '') + '' + Date.now();
        this.props.dispatch(register(firstName, anonymous));
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.register(this.state.firstName);
        return false;
    }

    next() {
        this.props.dispatch(next(0, this.props.count));
    }

    renderFaces() {
        const { photographs } = this.props;
        return (
            <div className="Faces">
                <Face {...photographs.ben} />
                <div><FormattedMessage id="or" /></div>
                <Face {...photographs.cyril} />
                <div>?</div>
            </div>
        )
    }

    renderForm() {
        if (this.props.firstName) { return null; }
        return (
            <div className="registration">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder={this.props.intl.formatMessage({id: 'firstName'})}
                        value={this.state.firstName}
                        onChange={(evt) => this.setState({firstName: evt.target.value}) }
                    />
                    <br/>
                    <button type="submit" disabled={!this.state.firstName.length}><FormattedMessage id="start" /></button>
                </form>
                <FormattedMessage id="or" /><br />
                <a onClick={this.register.bind(this, undefined)}><FormattedMessage id="stayAnonymous" /></a>
            </div>
        );
    }

    renderWelcomeBack() {
        if (!this.props.firstName) { return null; }
        const firstName = this.props.isAnonymous ? null : <span className="firstName">{this.props.firstName}</span>;
        return (
            <div className="welcome">
                <p><FormattedMessage id="welcome" values={{firstName,}} /> !</p>
                <button type="button" onClick={this.next}><FormattedMessage id="start" /></button>
            </div>
        );
    }

    render() {
        return (
            <div className="Introduction">
                {this.renderFaces()}
                <div className="Sidebar">
                    <div>
                        <h2><FormattedMessage id="title" /></h2>
                        <p><FormattedHTMLMessage id="description" /></p>
                        <br />
                        <p><FormattedHTMLMessage id="criteria" values={{count: this.props.count}} /></p>
                    </div>
                    {this.renderWelcomeBack()}
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

function select(store) {
    const { firstName, isAnonymous } = store.user;
    return {
        count: Object.keys(store.pictures).length,
        photographs: store.photographs,
        firstName,
        isAnonymous,
    };
}

export default connect(select)(injectIntl(Introduction));

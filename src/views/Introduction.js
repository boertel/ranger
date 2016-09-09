import React, { Component } from 'react';

import { connect } from 'react-redux';

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
        this.props.dispatch(next(1));
    }

    renderFaces() {
        const { photographs } = this.props;
        return (
            <div className="Faces">
                <Face {...photographs.ben} />
                <div>ou</div>
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
                        placeholder="Votre prénom"
                        value={this.state.firstName}
                        onChange={(evt) => this.setState({firstName: evt.target.value}) }
                    />
                    <br/>
                    <button type="submit" disabled={!this.state.firstName.length}>Commencez</button>
                </form>
                ou<br />
                <a onClick={this.register.bind(this, undefined)}>restez anonyme</a>
            </div>
        );
    }

    renderWelcomeBack() {
        if (!this.props.firstName) { return null; }
        const firstName = this.props.isAnonymous ? null : <span className="firstName">{this.props.firstName}</span>;
        return (
            <div className="welcome">
                <p>Content de te revoir {firstName} !</p>
                <button type="button" onClick={this.next}>Commencez</button>
            </div>
        );
    }

    render() {
        return (
            <div className="Introduction">
                {this.renderFaces()}
                <div className="Sidebar">
                    <div>
                        <h2>Saurez-vous trouver le style du photographe?</h2>
                        <p>Après quelques milliers de photos prises pendant 2 semaines, nous nous sommes demandés si les gens seraient capables de deviner quelles photographies &eacute;taient prises par <em>qui</em>.</p>
                        <br />
                        <p>Le critère de sélection était de choisir une photo par jour. Parcourez les 30 photos selectionnées et cliquez sur la tête du photographe que vous pensez à pris la photo.</p>
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
        photographs: store.photographs,
        firstName,
        isAnonymous,
    };
}

export default connect(select)(Introduction);

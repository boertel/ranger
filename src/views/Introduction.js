import React, { Component } from 'react';

import { connect } from 'react-redux';

import { register } from '../actions';
import Face from '../components/Face';


class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.user.firstName,
        };
    }

    register(firstName) {
        firstName = firstName || ('' + Math.random()).replace('.', '') + '' + Date.now();
        this.props.dispatch(register(firstName));
    }

    render() {
        return (
            <div className="Content">
                <div className="picture introduction">
                    <Face id="cyril" />
                    <div>ou</div>
                    <Face id="ben" />
                    <div>?</div>
                </div>
                <div className="sidebar">
                    <div className="Label">
                        <h2>Saurez-vous trouver le style du photographe?</h2>
                        <p>Après quelques milliers de photos prises pendant 2 semaines, nous nous sommes demandés si les gens seraient capables de deviner quelles photographies &eacute;taient prises par <em>qui</em>.</p>
                        <p>Parcourez les 30 photos selectionnées et cliquez sur la tête de la personne que vous pensez avoir pris la photo et vous decouvrirez votre résultat à la fin.</p>
                        <p style={{textAlign: 'center'}}>
                            <input
                                type="text"
                                placeholder="Votre prénom"
                                value={this.props.user.firstName}
                                onChange={(evt) => this.setState({firstName: evt.target.value}) }
                            />
                            <br/>
                            <button onClick={this.register.bind(this, this.state.firstName)}>Commencez</button>
                            <br/>ou<br />
                            <a onClick={this.register.bind(this, undefined)}>restez anonyme</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function select(store) {
    return {
        user: store.user,
    };
}

export default connect(select)(Introduction);

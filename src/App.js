import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';
import { loadPictures, loadPhotographs } from './actions';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadPictures());
        this.props.dispatch(loadPhotographs());
    }

    render() {
        if (!this.props.loaded) {
            return null;
        }

        return (
            <div className="App">{this.props.children}</div>
        );
    }
}

function select(store) {
    return {
        loaded: store.loading.loaded,
    }
}
export default connect(select)(App);

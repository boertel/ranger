import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';
import { loadPictures } from './actions';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadPictures());
    }

    render() {
        return (
            <div className="App">{this.props.children}</div>
        );
    }
}

export default connect()(App);

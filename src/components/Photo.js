import React, { Component } from 'react';

import { buildUrl, } from '../flickr';


export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        };
    }

    componentDidMount() {
        this.setState({
            width: this._container.offsetWidth,
            height: this._container.offsetHeight,
        });
    }

    render() {
        const { src } = this.props;
        let url;
        if (this.state.width !== 0 || this.state.height !== 0) {
            url = buildUrl(src, this.state.width, this.state.height);
        }
        return (
            <div className="Picture" style={{backgroundImage: 'url(' + url + ')'}} ref={(c) => { this._container = c }}></div>
        );
    }
}

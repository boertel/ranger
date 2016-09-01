import React, { Component } from 'react';


export default class Thumbnail extends Component {

    render() {
        const { url, ranking } = this.props;
        return (
            <div
                className="thumbnail"
                onClick={this.props.onClick}
                style={{backgroundImage: 'url(' + url + ')'}}>
                {}
            </div>
        );
    }
}

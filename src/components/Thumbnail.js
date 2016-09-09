import React, { Component } from 'react';

import './Thumbnail.css';


export default class Thumbnail extends Component {

    render() {
        const { url, ratio, widthContainer, aspectRatio } = this.props;
        const width = Math.floor((widthContainer / ratio) * aspectRatio);
        const height = Math.floor(widthContainer / ratio);

        const style = {
            width,
            height,
        };
        return (
            <div
                onClick={this.props.onClick}
                className="Thumbnail"
                style={style}>
                <img src={url} alt={this.url} />
                {this.props.children}
            </div>
        );
    }
}

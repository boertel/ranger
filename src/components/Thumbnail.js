import React, { Component } from 'react';

import './Thumbnail.css';

import { buildUrl, } from '../flickr';


export default class Thumbnail extends Component {

    render() {
        const { src, ratio, widthContainer, aspectRatio } = this.props;
        const width = Math.floor((widthContainer / ratio) * aspectRatio);
        const height = Math.floor(widthContainer / ratio);

        const style = {
            width,
            height,
        };

        const url = buildUrl(src, width, height);
        return (
            <div
                onClick={this.props.onClick}
                className="Thumbnail"
                style={style}>
                <img src={url} alt={url} />
                {this.props.children}
            </div>
        );
    }
}

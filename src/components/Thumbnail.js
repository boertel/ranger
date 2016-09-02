import React, { Component } from 'react';


export default class Thumbnail extends Component {

    render() {
        const { url, ranking, ratio, widthContainer, aspectRatio } = this.props;
        const width = Math.floor((widthContainer / ratio) * aspectRatio);
        const height = Math.floor(widthContainer / ratio);

        const style = {
            marginRight: '1em',
            width,
            height,
        };
        return (
            <div
                onClick={this.props.onClick}
                className="thumbnail"
                style={style}>
                <img src={url} width={width} height={height} />
                {this.props.children}
            </div>
        );
    }
}

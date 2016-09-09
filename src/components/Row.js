import React, { Component } from 'react';

function aspectRatio(props) {
    return props.width / props.height;
}

export default class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        }
    }

    componentDidMount() {
        this.setState({
            width: this._container.offsetWidth,
        });
    }

    render() {
        const ratio = this.props.children.reduce((ratio, image) => {
            return ratio + aspectRatio(image.props);
        }, 0);

        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                ratio,
                aspectRatio: aspectRatio(child.props),
                widthContainer: this.state.width,
            });
        });

        return (
            <div className="Row" ref={(c) => { this._container = c; }}>
                {children}
            </div>
        )
    }
}

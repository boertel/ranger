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
        let ratio = 0;
        this.props.children.map(image => {
            ratio += aspectRatio(image.props);
        });

        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                ratio,
                aspectRatio: aspectRatio(child.props),
                widthContainer: this.state.width,
            });
        });

        return (
            <div className="Row" ref={(c) => this._container = c}>
                {children}
            </div>
        )
    }
}

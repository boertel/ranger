import React, { Component } from 'react';


class Face extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    onClick() {
        this.setState({
            active: true,
        });
        this.props.onClick(this.props.name);
    }

    render() {
        const classNames = ['face', this.props.name, this.state.active ? 'active' : ''];
        return (
            <a title={this.props.title} className={classNames.join(' ')} onClick={this.onClick.bind(this)}></a>
        );
    }
}

export default Face;

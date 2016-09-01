import React, { Component } from 'react';


class Face extends Component {
    constructor(props) {
        super(props);

        this.shortcut = this.shortcut.bind(this);
    }

    shortcut(evt) {
        if (this.props.shortcut) {
            if (evt.key === this.props.shortcut) {
                this.onClick();
            }
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.shortcut);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.shortcut);
    }

    onClick() {
        if (!this.props.disabled) {
            this.props.onClick(this.props.id, this.props.title);
        }
    }

    render() {
        const classNames = [
            'face',
            this.props.id,
            this.props.active ? 'active' : '',
            this.props.disabled ? 'disabled': '',
        ];
        return (
            <div>
                <a
                    title={this.props.title}
                    className={classNames.join(' ')}
                    onClick={this.onClick.bind(this)}></a>
            </div>
        );
    }
}

export default (Face);

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

    // TODO remove this from here, Face is UI ONLY
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
            this.props.id,
            this.props.active ? 'active' : '',
            this.props.disabled ? 'disabled': '',
            this.props.correct ? 'correct' : '',
        ];
        return (
            <div className="Face">
                <a title={this.props.title}
                    className={classNames.join(' ')}
                    onClick={this.onClick.bind(this)}></a>
            </div>
        );
    }
}

export default (Face);

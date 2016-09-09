import React, { Component } from 'react';

import './Face.css';


export default class Face extends Component {
    render() {
        const { correct, disabled } = this.props;
        const style = {
            backgroundImage: 'url(' + this.props.image + ')',
        };
        const classNames = ['Face'];

        if (correct === true) {
            classNames.push('correct');
        }
        if (correct === false) {
            classNames.push('wrong');
        }
        if (disabled) {
            classNames.push('disabled');
        }

        return (
            <div className={classNames.join(' ')} style={style} />
        );
    }
}

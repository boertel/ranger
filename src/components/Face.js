import React, { Component } from 'react';

import './Face.css';


export default class Face extends Component {
    render() {
        const { correct, disabled } = this.props;
        const style = {
            backgroundImage: 'url(' + this.props.image + ')',
        };
        const classNames = ['Face'];

        (correct === true) && classNames.push('correct');
        (correct === false) && classNames.push('wrong');
        disabled && classNames.push('disabled');

        return (
            <div className={classNames.join(' ')} style={style} />
        );
    }
}

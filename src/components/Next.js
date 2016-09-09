import React from 'react';
import { FormattedMessage } from 'react-intl';


import './Next.css';

export default function Next(props) {
    const label = props.label || <FormattedMessage id='next' />;
    return (
        <div
            style={{opacity: props.show === true ? 1 : 0}}
            className="Next"
            onClick={props.onClick}>{label}&nbsp;&rarr;</div>
    )
}

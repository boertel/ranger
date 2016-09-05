import React from 'react';

import './Next.css';

export default function Next(props) {
    const label = props.label || 'Suivante';
    return (
        <div
            style={{opacity: props.show === true ? 1 : 0}}
            className="Next"
            onClick={props.onClick}>{label} &rarr;</div>
    )
}

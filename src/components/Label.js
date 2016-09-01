import React from 'react';

import { Link } from 'react-router';

import './Label.css';


export default function(props) {
    let back = null;
    if (props.index > 1) {
        const goBack = '/picture/' + (props.index - 1);
        back = (<Link to={goBack}>&larr;</Link>);
    }
    let next = null;
    if (props.index < props.count && props.hasNext) {
        const goNext = '/picture/' + (props.index + 1);
        next = (<Link to={goNext}>&rarr;</Link>);
    }
    return (
        <div className="Label">
            <div className="arrow">{back}</div>
            <h2>{props.index} <span className="subtle">/ {props.count}</span></h2>
            <div className="arrow">{next}</div>
        </div>
    );
};

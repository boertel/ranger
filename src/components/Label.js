import React from 'react';

import { Link } from 'react-router';

import Location from './Location';
import Time from './Time';

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

    const metadata = props.hasNext ? (
        <div>
            <p><em>{props.title}</em></p>
            <p>{props.description}</p>
            <Location {...props.location} />
            <Time date={props.date} />
        </div>
    ) : null;

    return (
        <div className="Label">
            <div className="Header">
                <div className="arrow">{back}</div>
                <h2>{props.index} <span className="subtle">/ {props.count}</span></h2>
                <div className="arrow">{next}</div>
            </div>
            {metadata}
        </div>
    );
};

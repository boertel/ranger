import React from 'react';

import './Header.css';


export default function Header(props) {
    let back = null,
        next = null;

    if (props.back) {
        back = (<a onClick={props.back}>&larr;</a>);
    }

    if (props.next) {
        next = (<a onClick={props.next}>&rarr;</a>);
    }

    return (
        <div className="Header">
            <div className="arrow">{back}</div>
            {props.children}
            <div className="arrow">{next}</div>
        </div>
    );
}

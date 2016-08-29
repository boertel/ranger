import React from 'react';


export default function(props) {
    return (
        <div className="Label">
            <h2>{props.index} <span className="subtle">/ {props.count}</span></h2>
        </div>
    );
};

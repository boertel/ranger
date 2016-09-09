import React from 'react';

import Location from './Location';


export default function Metadata(props) {
    return (
        <div className="Metadata">
            <p><em>{props.title}</em></p>
            <p>{props.description}</p>
            <Location {...props.location} />
        </div>
    );
}

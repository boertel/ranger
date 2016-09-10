import React from 'react';

export default function(props) {
    const href = 'https://www.google.com/maps?q=' + encodeURIComponent(props.name);
    return (
        <p className="Location">
            <a href={href} target="_blank">{props.name}</a>
        </p>
    );
}

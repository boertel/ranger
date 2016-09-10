import React from 'react';

import { injectIntl } from 'react-intl';
import Location from './Location';


function Metadata(props) {
    const locale = props.intl.locale.split('-')[0];
    const title = props.title[locale];
    return (
        <div className="Metadata">
            <p><em>{title}</em></p>
            <p>{props.description}</p>
            <Location name={props.location} />
        </div>
    );
}

export default injectIntl(Metadata);

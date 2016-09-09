import React from 'react';
import {
    injectIntl,
    FormattedMessage,
} from 'react-intl';

import './Message.css';

function Message(props) {
    const { photograph, correct } = props;
    const style = {opacity: correct !== undefined ? 1 : 0}
    let message = null;
    let classNames = ['Message'];
    if (correct) {
        message = <FormattedMessage id="correct" values={{firstName:  photograph.firstName}} />
        classNames.push('correct');
    } else {
        classNames.push('wrong');
        message = <FormattedMessage id="wrong" values={{firstName:  photograph.firstName}} />
    }
    return <div className={classNames.join(' ')} style={style}>{message}</div>;
}

export default injectIntl(Message);

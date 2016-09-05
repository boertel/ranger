import React from 'react';

import './Message.css';

export default function Message(props) {
    const { photograph, correct } = props;
    const style = {opacity: correct !== undefined ? 1 : 0}
    let message = null;
    let classNames = ['Message'];
    if (correct) {
        message = "Bravo ! C'était bien " + photograph.firstName;
        classNames.push('correct');
    } else {
        classNames.push('wrong');
        message = "Oups ! C'était " + photograph.firstName;
    }
    return <div className={classNames.join(' ')} style={style}>{message}</div>;
}


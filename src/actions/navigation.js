import { push } from 'react-router-redux';


function next(index, count) {
    if (index < count) {
        return push('/picture/' + (index + 1));
    } else {
        return push('/end');
    }
}

function back(index) {
    if (index > 1) {
        return push('/picture/' + (index - 1));
    } else {
        return push('/');
    }
}

export default {
    next,
    back,
}

import { push } from 'react-router-redux';

import qs from 'qs';

const query = { locale: qs.parse(document.location.search.substring(1)).locale };

function next(index, count) {
    if (index < count) {
        return push({pathname: '/picture/' + (index + 1), query,});
    } else {
        return push({pathname: '/end', query,});
    }
}

function back(index) {
    if (index > 1) {
        return push({pathname: '/picture/' + (index - 1), query,});
    } else {
        return push({pathname: '/', query,});
    }
}

export default {
    next,
    back,
}

import first from '../images/DSCF0356.jpg';
import second from '../images/DSCF0923.jpg';
import third from '../images/DSCF0941.jpg';

const pictures = {
    'DSCF0356': {
        id: 'DSCF0356',
        title: 'Hello',
        description: 'World',
        url: first,
    },
    'DSCF0923': {
        id: 'DSCF0923',
        title: 'Hello',
        description: 'World',
        url: second,
    },
    'DSCF0941': {
        id: 'DSCF0941',
        title: 'Hello',
        description: 'World',
        url: third,
    },
};


function loadPictures() {
    return {
        type: 'PICTURES_LOADED',
        pictures: pictures,
    };
}

function rank(id, ranking) {
    return {
        type: 'PICTURES_RANKED',
        id,
        ranking,
    };
}

export default {
    loadPictures,
    rank,
};

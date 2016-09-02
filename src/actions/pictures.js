import first from '../images/DSCF0356.jpg';
import second from '../images/DSCF0923.jpg';
import third from '../images/DSCF0941.jpg';

const pictures = {
    'DSCF0356': {
        id: 'DSCF0356',
        title: 'Hello',
        description: 'World',
        location: {
            name: 'Miloli\'i, Big Island, Hawaii, USA',
        },
        date: '2016-08-19',
        url: first,
        width: 4896,
        height: 3264,
        photographId: 'ben',
    },
    'DSCF0923': {
        id: 'DSCF0923',
        title: 'Hello',
        description: 'World',
        url: second,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
    },
    'DSCF0941': {
        id: 'DSCF0941',
        title: 'Hello',
        description: 'World',
        url: third,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
    },
    'DSCF0942': {
        id: 'DSCF0942',
        title: 'Hello',
        description: 'World',
        url: third,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
    },
    'DSCF0943': {
        id: 'DSCF0943',
        title: 'Hello',
        description: 'World',
        url: third,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
    },
    'DSCF0944': {
        id: 'DSCF0944',
        title: 'Hello',
        description: 'World',
        url: third,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
    },
    'DSCF0945': {
        id: 'DSCF0945',
        title: 'Hello',
        description: 'World',
        url: third,
        width: 3264,
        height: 4896,
        photographId: 'cyril',
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

function unrank(id) {
    return {
        type: 'PICTURES_UNRANKED',
        id,
    };
}

export default {
    loadPictures,
    rank,
    unrank,
};

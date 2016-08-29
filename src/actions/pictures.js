import first from '../images/DSCF0356.jpg';
import second from '../images/DSCF0923.jpg';

const pictures = {
    'DSCF0356': {
        title: 'DSCF0356',
        description: 'World',
        url: first,
    },
    'DSCF0923': {
        title: 'DSCF0923',
        description: 'World',
        url: second,
    },
    'DSCF0941': {
        title: 'DSCF0941',
        description: 'World',
        url: first,
    },
};


function loadPictures() {
    return {
        type: 'PICTURES_LOADED',
        pictures: pictures,
    };
}

export default {
    loadPictures,
};

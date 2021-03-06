import cyril from '../images/cyril.png';
import ben from '../images/ben.png';


const photographs = {
    'cyril': {
        id: 'cyril',
        firstName: 'Cyril',
        shortcut: 'c',
        image: cyril,
    },
    'ben': {
        id: 'ben',
        firstName: 'Ben',
        shortcut: 'b',
        image: ben,
    }
};

function loadPhotographs() {
    return {
        type: 'PHOTOGRAPHS_LOADED',
        photographs,
    };
}

export default {
    loadPhotographs,
}

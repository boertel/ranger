const photographs = {
    'cyril': {
        id: 'cyril',
        firstName: 'Cyril',
        shortcut: 'c',
    },
    'ben': {
        id: 'ben',
        firstName: 'Ben',
        shortcut: 'b',
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

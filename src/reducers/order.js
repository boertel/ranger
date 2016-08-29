const initialState = [];


function getRandomInt(max, min=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(ids) {
    return ids;
}

export default function order(state=initialState, action) {
    switch(action.type) {
        case 'PICTURES_LOADED':
            let ids = Object.keys(action.pictures);
            return generate(ids);
        default:
            return state;
    }
};

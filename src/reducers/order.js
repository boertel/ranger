const initialState = [];


function getRandomInt(max, min=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(ids, arr) {
    arr = arr || [];
    if (ids.length >= 1) {
        var output = [].concat(ids);
        var index = getRandomInt(output.length);
        var item = output.splice(index, 1)[0];
        arr.push(item);
        return generate(output, arr);
    }
    return arr;
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

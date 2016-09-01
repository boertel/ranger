const initialState = {};

function picture(id, state, values) {
    const newPicture = Object.assign({}, state[id], values);
    return Object.assign({}, state, {[id]: newPicture});
}

export default function pictures(state=initialState, action) {
    switch(action.type) {
        case 'PICTURES_LOADED':
            return Object.assign({}, state, action.pictures);

        case 'VOTE':
            return picture(action.id, state, {photographId: action.photographId})

        case 'PICTURES_RANKED':
            return picture(action.id, state, {ranking: action.ranking})
        default:
            return state;
    }
}

const initialState = {};

function picture(id, state, values) {
    if (typeof(values) === 'function') {
        values = values(state[id]);
    }
    const newPicture = Object.assign({}, state[id], values);
    return Object.assign({}, state, {[id]: newPicture});
}

export default function pictures(state=initialState, action) {
    switch(action.type) {
        case 'PICTURES_LOADED':
            return Object.assign({}, state, action.pictures);

        case 'VOTE':
            return picture(action.id, state, (p) => {
                return {
                    predictionId: action.predictionId, correct: action.predictionId === p.photographId
                }
            });

        case 'PICTURES_RANKED':
            return picture(action.id, state, {ranking: action.ranking})

        case 'PICTURES_UNRANKED':
            return picture(action.id, state, {ranking: undefined})

        default:
            return state;
    }
}

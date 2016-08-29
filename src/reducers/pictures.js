const initialState = {};

export default function pictures(state=initialState, action) {
    switch(action.type) {
        case 'PICTURES_LOADED':
            return Object.assign({}, state, action.pictures);
        default:
            return state;
    }
}

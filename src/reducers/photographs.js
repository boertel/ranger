const initialState = {
};

export default function photographs(state=initialState, action) {
    switch(action.type) {
        case 'PHOTOGRAPHS_LOADED':
            return action.photographs;
        default:
            return state;
    }
}

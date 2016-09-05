const initialState = {
    firstName: '',
};

export default function user(state=initialState, action) {
    switch(action.type) {
        case 'USER_REGISTERED':
            return Object.assign({}, state, {
                firstName: action.firstName,
                isAnonymous: action.isAnonymous,
            });
        default:
            return state;
    }
};

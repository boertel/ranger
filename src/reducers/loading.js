const initialState = {
    loaded: false,
};

export default function loading(state=initialState, action) {
    switch(action.type) {
        case 'persist/REHYDRATE':
            return Object.assign({}, state, {
                loaded: true,
            });

        default:
            return state;
    }
};

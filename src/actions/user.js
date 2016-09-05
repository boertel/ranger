import { push } from 'react-router-redux';


function register(firstName, isAnonymous) {
    return (dispatch) => {
        dispatch(push('/picture/1'));
        return dispatch({
            type: 'USER_REGISTERED',
            firstName,
            isAnonymous,
        });
    };
}

export default {
    register,
}

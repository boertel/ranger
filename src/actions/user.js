import { push } from 'react-router-redux';


function register(firstName) {
    return (dispatch) => {
        dispatch(push('/picture/1'));
        return dispatch({
            type: 'USER_REGISTERED',
            firstName,
        });
    };
}

export default {
    register,
}

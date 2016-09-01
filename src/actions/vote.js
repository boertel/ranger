import { push } from 'react-router-redux';


function vote(id, photographId, next) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(push(next));
        }, 1000);
        return dispatch({
            type: 'VOTE',
            id,
            photographId,
        });
    };
}

export default {
    vote,
}

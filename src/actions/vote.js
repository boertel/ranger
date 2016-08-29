import { push } from 'react-router-redux';


function vote(name, nextIndex) {
    return (dispatch) => {
        setTimeout(() => {
            //dispatch(push('/picture/' + nextIndex));
        }, 1000);
        return {
            type: 'VOTE',
            name,
        };
    };
}

export default {
    vote,
}

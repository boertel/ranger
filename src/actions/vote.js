function vote(id, predictionId) {
    return (dispatch) => {
        return dispatch({
            type: 'VOTE',
            id,
            predictionId,
        });
    };
}

export default {
    vote,
}

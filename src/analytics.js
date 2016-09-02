module.exports = store => next => action => {
    if (action.type === 'USER_REGISTERED') {
        analytics.identify(action.firstName);
    }
    if (action.type === 'VOTE') {
        analytics.track('vote', {
            photoId: action.id,
            predictionId: action.predictionId
        });
    }
    if (action.type === 'PICTURES_RANKED') {
        analytics.track('favorite', {
            photoId: action.id,
            ranking: action.ranking,
        });
    }

    return next(action);
};

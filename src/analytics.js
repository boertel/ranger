module.exports = store => next => action => {
    if (action.type === 'USER_REGISTERED') {
        if (!action.isAnonymous) {
            window.analytics.identify({firstName: action.firstName});
        }
    }
    if (action.type === 'VOTE') {
        window.analytics.track('vote', {
            photoId: action.id,
            predictionId: action.predictionId
        });
    }
    if (action.type === 'PICTURES_RANKED') {
        window.analytics.track('favorite', {
            photoId: action.id,
            ranking: action.ranking,
        });
    }

    return next(action);
};

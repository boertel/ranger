import pictures from './pictures';
import vote from './vote';
import user from './user';
import photographs from './photographs';
import navigation from './navigation';


module.exports = {
    ...pictures,
    ...vote,
    ...photographs,
    ...user,
    ...navigation,
};

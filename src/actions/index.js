import pictures from './pictures';
import vote from './vote';
import user from './user';
import photographs from './photographs';


module.exports = {
    ...pictures,
    ...vote,
    ...photographs,
    ...user,
};

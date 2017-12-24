import { ADD_ITEM } from '../actions/action';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log('Added');
            break;
        default:
            return state;
    }
}

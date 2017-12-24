import Action from '../actions/action';

export default (state = {}, action) => {
    switch (action.type) {
        case Action.ADD_ITEM:
            console.log('Added');
            break;
        default:
            return state;
    }
}

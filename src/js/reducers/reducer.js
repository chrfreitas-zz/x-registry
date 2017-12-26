import { ADD_ITEM } from '../actions/action';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    domain: action.item.domain,
                    is: action.item.is,
                    price: action.item.price
                }
            ];
            break;

        default:
            return state;
    }
}

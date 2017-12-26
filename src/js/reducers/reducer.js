import { ADD_ITEM } from '../actions/action';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.domain.id,
                    domain: action.domain.domain,
                    price: action.domain.price
                }
            ];
            break;

        default:
            return state;
    }
}

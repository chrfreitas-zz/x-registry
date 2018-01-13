import { ADD_ITEM, REMOVE_ITEM } from '../actions/app.action';

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

        case REMOVE_ITEM:
            return state.filter(item => {
                return (item.id != action.id)
            })
            break;

        default:
            return state;
    }
}

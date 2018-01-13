import { ADD_ITEM, REMOVE_ITEM } from '../actions/app.action';

const initialState = {
    domains: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const domains = state.domains.concat(action.payload);
            return {...state, domains}
            break;
        }

        case REMOVE_ITEM: {
            const domains = state.domains.filter(item => (item.id != action.payload.id));
            return {...state, domains}
            break;
        }

        default:
            return state;
            break;
    }
}

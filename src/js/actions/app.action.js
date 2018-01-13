export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

let id = 1;
export const add = (domain) => {
    return {
        type: ADD_ITEM,
        domain: {
            id: id++,
            domain: domain.domain,
            price: domain.price
        }
    }
}

export const remove = (id = 0) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const ADD_ITEM = 'ADD_ITEM';

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

export const ADD_ITEM = 'ADD_ITEM';

let domainId = 1;

export const add = (domain) => {
    return {
        type: ADD_ITEM,
        domain: {
            id: domainId++,
            domain: domain.domain,
            price: domain.price
        }
    }
}

export const ADD_ITEM = 'ADD_ITEM';

export const add = (domain) => {
    return {
        type: ADD_ITEM,
        domain: {
            id: domain.id,
            domain: domain.domain,
            price: domain.price
        }
    }
}

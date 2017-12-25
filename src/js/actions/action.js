export const ADD_ITEM = 'ADD_ITEM';

export const add = (item) => {
    return {
        type: ADD_ITEM,
        item: {
            email: item.email,
            is: item.is,
            price: item.price
        }
    }
}

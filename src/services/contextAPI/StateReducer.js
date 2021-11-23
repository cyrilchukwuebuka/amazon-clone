export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const stateReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((item) => item.id === action.id)

            const newBasket = [...state.basket]
            
            if(index > 0){
                newBasket.splice(index, 1)
            } else {
                console.warn(`
                Can't remove product of (id: ${action.id}) as it does not exist in the basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
            
        default:
            return state;
    }
};

export default stateReducer;
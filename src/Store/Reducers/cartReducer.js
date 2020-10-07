const initialState={bookCart: []}

function toggleCart( state=initialState, action)  {
    let nextState
    switch(action.type){
        case 'TOGGLE_CART':
            const bookIndex =  state.bookCart.findIndex(item=> item.isbn === action.value.isbn) 

            if (bookIndex !== -1){
                nextState =  {
                    ...state,
                    bookCart: state.bookCart.filter(item=> item.isbn !== action.value.isbn)
                }
            } else {
                nextState =  {
                    ...state,
                    bookCart: [...state.bookCart, action.value]
                }
            }
            return nextState || state;
        default:
            return state
    }
}

export default toggleCart
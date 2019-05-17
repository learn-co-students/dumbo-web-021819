const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      let item = state.cart.find(item => item.id === action.payload.id)
      if (item) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        }
      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    case 'INCREASE_ITEM_AMOUNT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    case 'DECREASE_ITEM_AMOUNT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
    case 'UPDATE_CART_TOTAL':
      return state
    default:
      return state
  }
}
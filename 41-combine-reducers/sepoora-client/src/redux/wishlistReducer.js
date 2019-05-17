const initalState = []

export const wishlistReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_WISHLIST':
      return [...state, action.payload]

    case 'REMOVE_ITEM_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id)
    
    case 'LOGOUT_USER':
      console.log('wishlist reducer')
      return state

    default:
      return state
    }
}
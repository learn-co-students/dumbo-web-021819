// wishlist stuff
export const addItemToWishlist = item => ({
  type: 'ADD_ITEM_TO_WISHLIST',
  payload: item
})

export const removeItemFromWishlist = item => ({
  type: 'REMOVE_ITEM_FROM_WISHLIST',
  payload: item 
})

// cart stuff
export const addItemtoCart = item => ({
  type: 'ADD_ITEM_TO_CART',
  payload: item
})

export const removeItemFromCart = item => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: item
})

export const increaseItemAmount = item => ({
  type: 'INCREASE_ITEM_AMOUNT',
  payload: item
})

export const decreaseItemAmount = item => ({
  type: 'DECREASE_ITEM_AMOUNT',
  payload: item
})


export const updateCartTotal = items => ({
  type: 'UPDATE_CART_TOTAL',
  payload: items
})


// user Stuff...
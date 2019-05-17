import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { wishlistReducer} from './wishlistReducer'
import { cartReducer } from './cartReducer'
import { userReducer } from './userReducer'

export const reducer = combineReducers({
  products: productReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  user: userReducer
})
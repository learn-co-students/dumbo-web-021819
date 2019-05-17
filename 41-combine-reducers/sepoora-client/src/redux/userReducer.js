const initialState = {}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        token: action.payload
      }
    case "LOGOUT_USER":
      console.log('user reducer')
      return state

    case "FETCH_USER":
      return

    default:
      break;
  }
  return state
}
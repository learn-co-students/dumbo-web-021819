import wizardsArray from '../wizards'

const initialState = {
  wizards: wizardsArray
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_WIZARD":
      let newWizard = action.payload
      let addedArray = [newWizard, ...state.wizards]
      return {...state, wizards: addedArray}

    case "REMOVE_WIZARD":
      let nameOfWizardToRemove = action.payload
      let filteredArray = state.wizards.filter(wizard => wizard.name !== nameOfWizardToRemove)
      return {...state, wizards: filteredArray}

    default:
      return state
  }
}

export default reducer

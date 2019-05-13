export const addWizard = (newWizardObject) => {
  return {type: "ADD_WIZARD", payload: newWizardObject}
}

export const removeWizard = (name) => {
  return {type: "REMOVE_WIZARD", payload: name}
}

// export const actionCreator = (argument) => {
//   return {type: "THIS_IS_THE_TYPE", payload: argument}
// }

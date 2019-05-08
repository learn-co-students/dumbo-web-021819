const initalState = {
  contestants: {
    1: {
      id: 1,
      name: "Regina",
      votes: 0,
      image: "https://vignette.wikia.nocookie.net/villains/images/5/59/Prom_Regina.jpg/revision/latest?cb=20120125190707"
    },
    2: {
      id: 2,
      name: "Gretchen",
      votes: 0,
      image: "https://i.pinimg.com/originals/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"
    },
    3: {
      id: 3,
      name: "Janis",
      votes: 0,
      image: "https://vignette.wikia.nocookie.net/meangirls/images/5/54/Janis_Ian.JPG/revision/latest/scale-to-width-down/250?cb=20130403104124"
    }
  },

  currentUser: {
    id: 5,
    name: 'Ryan'
  }
}



const reducer = (state = initalState, action) => {


  switch (action.type) {
    case "DECREASE_VOTE":
      let newState = { ...state }
      newState.contestants[action.payload]["votes"]--
      console.log(newState)

      return newState
  
    default:
      return state
  }

}

export default reducer;
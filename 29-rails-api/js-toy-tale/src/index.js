
document.addEventListener('DOMContentLoaded', function(){

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyFormButton = document.querySelector('input[type="submit"]')
const toyCollection = document.getElementById('toy-collection')
// const toyCollection2 = document.querySelectorAll('#toy-collection')

let addToy = false

// toyFormButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event);
// })

toyForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  const image = document.querySelector('input[name="image"]').value

  // Getting the form data
  const formData = {
    name: name,
    image: image,
    likes: 0
  }

  // This is the fetch for creating the new toy
  postNewToy(formData)


  // 1. Optimistic Rendering - Creating the DOM element before posting to the database
  // - Creates the Toy Card using data from the form
  // - **CANNOT GET ID THIS WAY**

  // 2. Pessimistic Rendering - Send the fetch and THEN create the DOM element
  // - Creates the Toy Card using data from the database


})

toyCollection.addEventListener('click', (event) => {
  if(event.target.className === "like-btn"){
    const id = event.target.dataset.id
    getOneToy(id).then(pokemonData => patchLikes(pokemonData).then(data => event.target.previousElementSibling.innerText = `${data.likes} Likes`))

  }
})

function getOneToy(id){
  return fetch(`http://localhost:3000/toys/${id}`)
  .then(res => res.json())
}

function patchLikes(pokemonData){
  return fetch(`http://localhost:3000/toys/${pokemonData.id}`, {
    method: 'PATCH',
    headers:
    {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ "likes": pokemonData.likes + 1 })
  }
).then(res => res.json())
}


function postNewToy(formData){
  return fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(res => res.json())
  .then(newToyData => {
    toyCollection.innerHTML += createToyCard(newToyData)
  })
}

function getAllToys(){
  return fetch('http://localhost:3000/toys')
  .then(res => res.json())
}

function createToyCard(toy){
  // 1. Use innerHTML
  // return the html as a string

  return `<div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn" data-id=${toy.id}>Like <3</button>
  </div>`

}

getAllToys().then( toyArray => {
  // Find toy-container

  toyArray.forEach((toy) => {
    toyCollection.innerHTML += createToyCard(toy)

    // create a div
    // put stuff into the div
    // then append div to the DOM
  }
  )
} )

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
})

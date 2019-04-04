// helper method to get random number for photos
const randomNumber = (minNumber, maxNumber) => {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

const createComplimentCardHTML = (compliment) => {

 // let mattParrotTag = '';
 // if (compliment.favorited) {
 //   mattParrotTag = `<img src="https://emoji.slack-edge.com/T02MD9XTF/matt-parrot/6e11d5decd7c13f5.gif" class="matt-parrot" />`;
 // }
  return `<li>
      <div class="trash" data-id="${compliment.id}">🗑</div>
      <div class="favorite">⭐️</div>
      <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
      <h3>"${compliment.message}"</h3>
      <div>
        <cite data-id="${compliment.id}" data-hug-count="${compliment.hug_count}">Hugged ${compliment.hug_count} times</cite>
        <button>🤗 it</button>
      </div>
    </li>`
}

const ulTag = document.querySelector('ul');

fetch('http://localhost:3000/compliments')
  .then((response) => {
    return response.json()
  }).then((compliments) => {
    // use them to do something....
    compliments.forEach((compliment) => {
      ulTag.innerHTML += createComplimentCardHTML(compliment)
    })
  })

const deleteCompliment = (id) => {
  fetch(`http://localhost:3000/compliments/${id}`, {
    method: 'DELETE'
  })
}

const createNewCompliment = (compliment) => {
  return fetch('http://localhost:3000/compliments/', {
    method: 'POST',
    headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	},
    body: JSON.stringify(compliment)
  }).then(response => {
    return response.json()
  })
}

const updateComplimentHugCount = (id, hugCount) => {
  return fetch(`http://localhost:3000/compliments/${id}`, {
  	method: 'PATCH',
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	},
  	body: JSON.stringify({hug_count: hugCount})
  }).then((response) => {
     return response.json()
  })
}

// be able to add a "hug" to a compliment and see my hug count go up accordingly

// we need to find all of our buttons
ulTag.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let currentButtonTag = event.target;
    let citeTag = currentButtonTag.parentElement.querySelector('cite');

    let newHugCount = parseInt(citeTag.dataset.hugCount)
    newHugCount++;

    // we also need to update the server
    updateComplimentHugCount(citeTag.dataset.id, newHugCount).then((compliment) => {
      // we update the DOM here
      citeTag.dataset.hugCount = compliment.hug_count;
      let newHugText = `Hugged ${compliment.hug_count} times`;

      citeTag.textContent = newHugText;
    })

  } else if (event.target.className === 'trash') {
    // deletes the compliment from our server
    deleteCompliment(event.target.dataset.id)
    // removes the li from the DOM
    event.target.parentElement.remove()

  } else if (event.target.classList.contains('favorite')) {
    event.target.parentElement.innerHTML =
    `<img src="https://emoji.slack-edge.com/T02MD9XTF/matt-parrot/6e11d5decd7c13f5.gif" class="matt-parrot" />` +
    event.target.parentElement.innerHTML
  }
})

//  ----- to add my own compliments ------

// find our form
const formTag = document.querySelector('form')
// on submit, grab whatever is in the input box in the form (the compliment)
formTag.addEventListener('submit', (event) => {
  event.preventDefault();

  const complimentText = event.target.compliment.value;

  const complimentObject = {
    message: complimentText,
    hug_count: 0,
    favorited: false
  }
  createNewCompliment(complimentObject).then(newCompliment => {
    ulTag.innerHTML = createComplimentCardHTML(newCompliment) + ulTag.innerHTML;
  })
  // did this work?
  // if so, do this:
})

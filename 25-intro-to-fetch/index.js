// helper method to get random number for photos
const randomNumber = (minNumber, maxNumber) => {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

const createComplimentCardHTML = (compliment) => {
  return `<li>
      <div class="trash">🗑</div>
      <div class="favorite">⭐️</div>
      <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
      <h3>"${compliment}"</h3>
      <div>
        <cite data-hug-count="0">Hugged 0 times</cite>
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
      ulTag.innerHTML += createComplimentCardHTML(compliment.message)
    })
  })


// be able to add a "hug" to a compliment and see my hug count go up accordingly

// we need to find all of our buttons
ulTag.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let currentButtonTag = event.target;
    let citeTag = currentButtonTag.parentElement.querySelector('cite');

    let newHugCount = parseInt(citeTag.dataset.hugCount)
    newHugCount++;

    citeTag.dataset.hugCount = newHugCount;
    let newHugText = `Hugged ${newHugCount} times`;

    citeTag.textContent = newHugText;
    // *bonus* we will say 1 time and 0/2+ times

  } else if (event.target.className === 'trash') {
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
  event.preventDefault()

  const compliment = event.target.compliment.value
  // using that complimet make a new complimet li, add in our complimet
  // attach that new li to our UL (in the top position)
  ulTag.innerHTML = createComplimentCardHTML(compliment) + ulTag.innerHTML
})














// old way:
// function createComplimentCardHTML(compliment) {
//   return `<li>
//       <div class="trash">🗑</div>
//       <div class="favorite">⭐️</div>
//       <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
//       <h3>"${compliment}"</h3>
//       <div>
//         <cite data-hug-count="0">Hugged 0 times</cite>
//         <button>🤗 it</button>
//       </div>
//     </li>`
// }






// compliments.each do |compliment|
//
// end





// we are finding our <em> tag & removing it
// document.querySelector('em').remove();


// anything I click on should have an `angelo-parrot` added to it
// document.addEventListener('click', function(event) {
//   console.log('im attached to the document')
//   const imgTag = document.createElement('img')
//   imgTag.src = 'https://media.giphy.com/media/fxKZAR0nAUhJCcvqP5/giphy.gif';
//   imgTag.classList.add('angelo-parrot')
//
//   event.target.append(imgTag)
// })


// to find my first button and alert "HELLO!" when I click it
// const firstButtonTag = document.querySelector('button');
//
// firstButtonTag.addEventListener('click', function(event){
//   console.log('im attached directly to the button')
//   alert('HELLO!')
// })



// to click on any li and have it's background color change to `pink`
// ulTag.addEventListener('mouseover', function(event) {
//   const liTag = event.target;
//   if(liTag.tagName === 'LI') {
//     liTag.style.backgroundColor = 'pink';
//   }
// })
// const liTags = document.querySelectorAll('li')
//
// for (let i = 0; i < liTags.length; i++) {
//   liTags[i].addEventListener('click', function(event) {
//     event.target.parentElement.parentElement.style.backgroundColor = 'pink'
//   })
// }

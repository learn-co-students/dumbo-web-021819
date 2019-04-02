// anything I click on should have an `angelo-parrot` added to it
document.addEventListener('click', function(event) {
  console.log('im attached to the document')
  const imgTag = document.createElement('img')
  imgTag.src = 'https://emoji.slack-edge.com/T02MD9XTF/matt-parrot/6e11d5decd7c13f5.gif';
  imgTag.classList.add('matt-parrot')

  event.target.append(imgTag)
})


// to find my first button and alert "HELLO!" when I click it
const firstButtonTag = document.querySelector('button');

firstButtonTag.addEventListener('click', function(event){
  console.log('im attached directly to the button')
  alert('HELLO!')
})



// to click on any li and have it's background color change to `pink`
const liTags = document.querySelectorAll('li')

for (let i = 0; i < liTags.length; i++) {
  liTags[i].addEventListener('click', function(event) {
    debugger
  })
}

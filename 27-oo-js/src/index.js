const beerUlTag = document.querySelector('#list-group')
const beerDetailTag = document.querySelector('#beer-detail')

// fetch all the beers
BeerAdaptor.getAll()
  .then(beers => {
    beers.forEach(beerData => {
      const newBeer = new Beer(beerData)

      beerUlTag.innerHTML += newBeer.renderLi()
    })
  })

beerUlTag.addEventListener('click', event => {
  if (event.target.tagName == "LI") {
    const beerId = parseInt(event.target.dataset.id);
    let beer = Beer.all.find(beer => beer.id === beerId)

    beerDetailTag.innerHTML = beer.renderDetail()
  }
})

beerDetailTag.addEventListener('click', event => {
  if (event.target.id === 'edit-beer') {
    const newText = event.target.parentElement.querySelector('textarea').value;
    const beerId = parseInt(event.target.dataset.id);

    BeerAdaptor.update(beerId, newText)
      .then(beer => {
        let foundBeer = Beer.all.find(beer => beer.id === beerId)
        foundBeer.description = beer.description;

      })
  }
})








































// doing this in JavaScript
// class Beer {
//   constructor(name, description, tagLine) {
//     this.name = name
//     this.description = description
//     this.tagLine = tagLine
//     Beer.all.push(this)
//   }
//
//   hello() {
//     return `Hi!, I'm ${this.name}, and my tagline is: ${this.tagLine}!`
//   }
//
//   static whatIsThis() {
//     return "a beer is a beverage made my german monks."
//   }
// }
// Beer.all = []
//
//
//
//
//
//
//
//
//
//















// in JavaScript
// new Beer("modelo", "yum", "cool, this is my tagline")

// in ruby
// Beer.all
// Beer.what_is_this
// "a beer is a beverage made my german monks."
// // // Beer.new("modelo", "yum", "cool, this is my tagline")
// // // doing this in Ruby
// class Beer
//   attr_accessor :name, :description, :tag_line
//
//   @@all = []
//
//   def initialize(name, description, tag_line)
//     @name = name
//     @description = description
//     @tag_line = tag_line
//     @@all << self
//   end
//
//   def hello
//     "Hi!, I'm #{self.name}, and my tagline is: #{self.tag_line}!"
//   end
//
//   def self.what_is_this
//     "a beer is a beverage made my german monks."
//   end
//
//   def self.all
//     @@all
//   end
//
//
// end
// //

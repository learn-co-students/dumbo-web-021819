class BeerAdaptor {

  static getAll() {
    return fetch('http://localhost:3000/beers/')
      .then(res => res.json())
  }

  static update(beerId, newText) {
    return fetch(`http://localhost:3000/beers/${beerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        description: newText
      })
    })
      .then(res => res.json())
  }

}

# Bey-Slay

The database of Beyonce objects can be found in a JSON-server. If you haven't already done so install json-server:

TO INSTALL: npm install -g json-server

Then start the json-server:

TO START: json-server --watch db.json

1. Make a GET request to `http://localhost:4000/beys`. You should get a response that is an array of multiple objects that look like this:
   `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false }`

# Deliverables:

- Render a list of all Beyonce images
- When a User clicks on a Beyonce image in BeyContainer it should change the "favorite" key to true, which adds it to the Favorites container, or false, which should then remove it from the Favorites container

# What are we practicing?

- using both functional and class components
- deciding which component should make our fetch request
- deciding which component(s) should have state
- changing the state of a parent component from its child
- passing a callback function as a prop to be used by a child component
- manipulating objects inside of arrays in state
- reusing a component
- lifting state

### Hint

- to complete this project you may need to do some refactoring
- functions can also be passed as props

![beyonce gif](bey-slay.gif)

# Rap Rater
A small app that will practice the core concepts of React!

With this project you will:
- Understand how to design a project into composable components
- Implement state inside of components
- Utilize React lifecycle methods
- Practice Event Handling

### Deliverables
- When the app loads up, we want to display a list of rappers
- When the user clicks on a rapper image, it should switch between happy and sad photos

### API
Included to this project is a `db.json` file. You will want to be sure to install `json-server`:

```bash
npm install -g json-server
```

Then run the file:

```
json-server db.json
```

You'll be making a `GET` request to: `http://localhost:3005/rappers` to get all your rappers!

### Questions we want to ask ourselves when we are designing applications
- "What are the components that make this user interface? How can I break them down?"
- "Where should state live for this particular piece of functionality?"
- "Does state need to be shared among components?"
- "What happens to make the state change?"

### Words of Wisdom
- The function that changes state needs to be defined in the same place that state is defined; it doesn't need to be in the same place that it **executed**

### Reference Material
- [React Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [React Docs - Commonly Used Lifecycle Methods](https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)
- [React Docs - using state Correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
- [React Docs - Events](https://reactjs.org/docs/handling-events.html)
